// import arxivClient from 'arxiv-client';
import arxivClient, { abstract, and, not, or, title, category } from 'arxiv-client';

export async function fetchArXivMetadata(paperIDs) {
	console.log('\n-----------------------');
	console.log('FETCHING METADATA FROM ARXIV');
	console.log('-----------------------');

	if (paperIDs.length > 1000) {
		throw new Error(
			`More than 1000 paper IDs - this is too many to query. Something is wrong! (IDs: ${paperIDs.length})`
		);
	}
	const client = arxivClient.default;

	// Block console.log because arxiv-api spams it
	const old_log = console.log;
	console.log = function () {};

	let articles;

	try {
		articles = await client
			.ids(paperIDs)
			.start(0)
			.maxResults(paperIDs.length)
			// .sortBy('submittedDate')
			// .sortOrder('ascending')
			.execute();
	} catch (error) {
		console.error(error);
		throw new Error(
			'Unable to download arXiv posts. There are a few possible reasons.\n' +
				'  1. Check your internet connection.\n' +
				'  2. Re-run with --dry-run and check whether the queried IDs look valid.\n' +
				'  3. Check that the arXiv api (export.arxiv.org) is working: https://status.arxiv.org/\n' +
				"  4. If the URL 'https://export.arxiv.org/api/query?search_query=&max_results=10' " +
				"returns with 'Rate exceeded' in your web browser, then someone on your network " +
				'has got you IP banned from arXiv... try querying on a different network.\n' +
				'If you still encounter issues, please contact the maintainer of the SFN.'
		);
	}

	// Unblock console.log
	console.log = old_log;
	console.log('Success! (hopefully.)');

	articles = addAdditionalMetadata(articles);

	return articles;
}

function addAdditionalMetadata(articles) {
	console.log('Adding additional metadata...');

	articles.forEach((obj) => {
		obj.idShort = obj.id.split('/').slice(-1)[0].replaceAll(/v.*/g, '');
		delete obj.links;
		delete obj.doi; // Since many don't have it
	});
	return articles;
}
