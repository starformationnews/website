import { getPosts } from '../lib/js/posts';

export async function load({ params }) {
	return await getPosts({
		// category: 'editorials',
		page: 1
	});
}
