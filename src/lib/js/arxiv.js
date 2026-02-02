// import arxivClient from 'arxiv-client';

import arxivClient, { abstract, and, not, or, title, category } from 'arxiv-client';

export async function fetchArXivMetadata(paperIDs) {
	if (paperIDs.length > 1000) {
		throw new Error(
			`More than 1000 paper IDs - this is too many to query. Something is wrong! (IDs: ${paperIDs.length})`
		);
	}
	const client = arxivClient.default;
	let articles = await client
		.ids(paperIDs)
		.start(0)
		.maxResults(paperIDs.length)
		// .sortBy('submittedDate')
		// .sortOrder('ascending')
		.execute();

	articles = addAdditionalMetadata(articles);

	const articlesObject = new Object();
	articles.forEach((obj, index) => (articlesObject[obj.idShort] = obj));
	return articlesObject;
}

function addAdditionalMetadata(articles) {
	articles.forEach((obj) => {
		obj.idShort = obj.id.split('/').slice(-1)[0].replaceAll(/v.*/g, '');
	});
	return articles;
}
