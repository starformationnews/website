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

	console.log = function() {}

	let articles = await client
		.ids(paperIDs)
		.start(0)
		.maxResults(paperIDs.length)
		// .sortBy('submittedDate')
		// .sortOrder('ascending')
		.execute();

	console.log("Success! (hopefully.)")

	articles = addAdditionalMetadata(articles);

	return articles;

	// const articlesObject = new Object();
	// articles.forEach((obj, index) => (articlesObject[obj.idShort] = obj));
	// return articlesObject;
}

function addAdditionalMetadata(articles) {
	console.log("Adding additional metadata...")
	
	articles.forEach((obj) => {
		obj.idShort = obj.id.split('/').slice(-1)[0].replaceAll(/v.*/g, '');
		delete obj.links;
		delete obj.doi; // Since many don't have it
	});
	return articles;
}
