import Papa from 'papaparse'; // how the fuck is this a real package name

const maxPaperAge = 1; // Max months back a paper can have in age
const SUPPRESS_ARTICLE_WARNINGS = process.env.SUPPRESS_ARTICLE_WARNINGS === '1';
// const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL;
const GOOGLE_SHEETS_URL =
	"https://docs.google.com/spreadsheets/d/12BNcNhrM3QI3K5FmCEp_u-TqqIkGYMUtHWd_Q5th4_M/gviz/tq?tqx=out:csv&sheet='Form responses 1'";
// console.log('Google sheets url:', GOOGLE_SHEETS_URL);

export async function fetchPaperIDs(year, month) {
	const allSubmissions = await downloadSubmissions();
	const filteredSubmissions = filterSubmissions(allSubmissions, year, month);
	const paperIDs = parsePaperIDs(filteredSubmissions);
	return deduplicatePaperIDs(paperIDs);
}

async function downloadSubmissions() {
	console.log('Downloading submissions');
	if (GOOGLE_SHEETS_URL === '' || GOOGLE_SHEETS_URL === undefined) {
		throw new Error('You must set the GOOGLE_SHEETS_URL environment variable.');
	}
	const rawCSV = await fetch(GOOGLE_SHEETS_URL);
	const readableCSV = await rawCSV.text();
	// console.log(readableCSV);

	const headers = ['timestamp', 'papers', 'email', 'mailing', 'hidden'];
	const csv = Papa.parse(readableCSV, {
		download: false, // See https://stackoverflow.com/a/54536164
		header: true,
		transformHeader: (header, index) => (index >= headers.length ? String(index) : headers[index])
	});

	console.log(`Downloaded table with ${csv.data.length} rows`);

	return csv;
}

function filterSubmissions(allSubmissions, year, month) {
	year = Number(year);
	month = Number(month); // Zero-indexed! FUCK JS LOL WTAF
	// Get a date representing the last millisecond in a month
	const maxAge = new Date(Date.UTC(year, month));
	const minAge = new Date(Date.UTC(year, month - 1));

	// Remove blank entries, sanitize, and filter by submission timestamp to current
	// month only, also removing anything with hidden flag
	const goodEntries = allSubmissions.data
		.filter((row) => row.timestamp !== '')
		.map((row) => ({
			timestamp: shitGoogleSheetsTimestampToDate(row.timestamp),
			// Split based on whitespace or comma https://stackoverflow.com/a/10341725
			papers: row.papers.split(/[,\s]\s*/), // Todo: A very wrong string will fuck this
			email: row.email,
			mailing: row.mailing === 'Yes',
			hidden: row.hidden !== 'FALSE'
		}))
		.filter((row) => row.timestamp >= minAge && row.timestamp < maxAge)
		.filter((row) => !row.hidden);

	console.log(`Filtered table to ${goodEntries.length} rows`);

	return goodEntries;
}

function shitGoogleSheetsTimestampToDate(bullshit) {
	// 100% chance they will change this shit and it will break
	const [dayMonthYear, time] = bullshit.split(' ');
	const [day, month, year] = dayMonthYear.split('/').map((val) => Number(val));
	const [hours, minutes, seconds] = time.split(':').map((val) => Number(val));
	// dont forget to zero index your fucking month
	// this cost me hours
	// what the hell are js dates
	// honestly. absolute joke
	return new Date(Date.UTC(year, Number(month) - 1, day, hours, minutes, seconds));
}

function checkArxivID(id, minPaperDate) {
	// Since April 2007: ID should contain exactly one . and have something that
	// converts into a number on either side. This checks that!
	const parts = id.split('.');
	if (parts.length !== 2) {
		return {
			isValid: false,
			error: `Wrong number of periods: expected 1 but got ${parts.length - 1}`
		};
	}

	// Then, check that each part either side of the . is an integer.
	const yearMonth = parseInt(parts[0]);
	const paperNumber = parseInt(parts[1]);
	const yearMonthIsNaN = isNaN(yearMonth);
	const paperNumberIsNaN = isNaN(paperNumber);
	if (yearMonthIsNaN) {
		return {
			isValid: false,
			error: `First part of ID cannot evaluate to an integer (${parts[0]} -> ${yearMonth})`
		};
	}
	if (paperNumberIsNaN) {
		return {
			isValid: false,
			error: `Second part of ID cannot evaluate to an integer (${parts[1]} -> ${paperNumber})`
		};
	}

	// Then, check that the yearmonth has length of exactly four
	if (parts[0].length !== 4) {
		return {
			isValid: false,
			error: `Year-month part of ID has length other than 4 (${parts[0].length})`
		};
	}

	// Finally, also date the paper's year/month from the ID
	const paperDate = new Date(Date.UTC('20' + parts[0].slice(0, 2), Number(parts[0].slice(2)) - 1));

	if (paperDate < minPaperDate) {
		return {
			isValid: false,
			error: `Date of paper posting is before minimum considered date for this month (${paperDate})`
		};
	}

	return { isValid: true, paperDate: paperDate };
}

function parsePaperIDs(submissions) {
	const now = new Date();
	const minPaperDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth()));

	const validSubmissions = new Array();
	for (let submission of submissions) {
		for (let paper of submission.papers) {
			const paperID = paper
				.toLowerCase()
				// Remove any arxiv: parts of IDs
				.replaceAll('arxiv:', '')
				// Remove URLs
				.replaceAll(/(https|http):\/\/arxiv.org\/(abs|pdf)\//g, '');
			const checks = checkArxivID(paperID, minPaperDate);
			if (checks.isValid) {
				validSubmissions.push(paperID);
			} else {
				// Todo: this should really output a file of errors, or there should be an option for it
				console.log('Paper submission rejected!');
				console.log('-- Error:', checks.error);
				console.log('-- Submission:', paper);
				console.log('-- Extracted ID:', paperID);
				console.log('-- Submitted by:', submission.email);
			}
		}
	}

	console.log(`Extracted ${validSubmissions.length} arXiv IDs`);
	return validSubmissions;
}

function deduplicatePaperIDs(paperIDs) {
	const startLength = paperIDs.length;

	// Gets unique vals in array https://stackoverflow.com/a/14438954
	const uniquePaperIDs = [...new Set(paperIDs)];

	console.log(`Removed ${startLength - uniquePaperIDs.length} duplicate IDs`);
	console.log(`Final query: ${uniquePaperIDs.length} IDs`);
	return uniquePaperIDs;
}
