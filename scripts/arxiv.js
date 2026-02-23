/* Run as "npm run arxiv <year> <month>"
has no error handling yet so dont fuck up 
*/
import { fetchPaperIDs } from '../src/lib/js/submissionForm.js';
import { fetchArXivMetadata } from '../src/lib/js/arxiv.js';
import { dateToSFNID } from '../src/lib/js/sfn.js';
import fs from 'fs';

/* Overall settings */
// Do this to not query the arXiv API and not write a file. This is useful for debugging, as
// sometimes the arXiv API errors are absurdly long...
const dryRun = false;

// Max number of extra months submissions can be in age. When zero, only current month included
// N.B. if this is reduced in the future, this may cause duplicate submissions from prior months.
const extraMonths = 2;

// Grab year
const year = process.argv[2];
const month = process.argv[3];
const id = dateToSFNID(new Date(Date.UTC(year, Number(month) - 1)));
console.log(`Downloading arXiv submissions for ${year}, month ${month}; ID is ${id}`);

async function fetchStuff() {
	// Get paper IDs from Google sheets
	const paperIDs = await fetchPaperIDs(year, month, extraMonths);
	if (dryRun) {
		console.log('\nDry run! Halting execution. IDs that would have been queried:');
		console.log(paperIDs);
		return;
	}

	// Fetch additional information from arXiv, like abstracts and authors
	const articles = await fetchArXivMetadata(paperIDs);

	// Save the output in the right spot!
	console.log('\n-----------------------');
	console.log('SAVING OUTPUT');
	console.log('-----------------------');

	const dir = `src/routes/(posts)/newsletters/${year}/${id}`;
	const outfile = `${dir}/arxiv.json`;

	if (!fs.existsSync(dir)) {
		console.log('Making directory...');
		fs.mkdirSync(dir);
	}

	console.log('Saving...');
	fs.writeFileSync(outfile, JSON.stringify(articles, undefined, 4), 'utf8');

	console.log('\n-----------------------');
	console.log(
		'All done! Do `npm run dev` in your terminal to preview the new SFN and apply editorial updates.'
	);
}

// Calling this at least starts the promise
// but what do i know i do not understand how the fuck js async works
await Promise.resolve(fetchStuff());
