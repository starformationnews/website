// import arxivClient from 'arxiv-client';

import arxivClient, { abstract, and, not, or, title, category } from 'arxiv-client';

export async function fetchArXivMetadata(paperIDs) {
	if (paperIDs.length > 1000) {
		throw new Error(
			`More than 1000 paper IDs - this is too many to query. Something is wrong! (IDs: ${paperIDs.length})`
		);
	}
	const client = arxivClient.default;
	const articles = await client
		.ids(paperIDs)
		.start(0)
		.maxResults(paperIDs.length)
		.sortBy('submittedDate')
		.sortOrder('ascending')
		.execute();

	const articlesObject = new Object();
	articles.forEach((obj, index) => (articlesObject[paperIDs[index]] = obj));
	return articlesObject;
}
