/* Run as "npm run arxiv <year> <month>"
has no error handling yet so dont fuck up 
*/
import { fetchPaperIDs } from '../src/lib/js/submissionForm.js';
import { fetchArXivMetadata } from '../src/lib/js/arxiv.js';
import { dateToSFNID } from '../src/lib/js/sfn.js';
import fs from 'fs';

/* Overall settings */
// Max number of extra months submissions can be in age. When zero, only current month included
const extraMonths = 2;

// Grab year
const year = process.argv[2];
const month = process.argv[3];
const id = dateToSFNID(new Date(Date.UTC(year, Number(month) - 1)));
console.log(`Downloading arXiv submissions for ${year}, month ${month}; ID is ${id}`);

async function fetchStuff() {
	const paperIDs = await fetchPaperIDs(year, month, extraMonths);
	const articles = await fetchArXivMetadata(paperIDs);
	fs.writeFileSync(
		`src/routes/(posts)/newsletters/${year}/${id}/arxiv.json`,
		JSON.stringify(articles, undefined, 4),
		'utf8'
	);
}

// Calling this at least starts the promise
// but what do i know i do not understand how the fuck js async works
fetchStuff();
