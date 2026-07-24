import { getPosts } from '../lib/js/posts';

export async function load({ params }) {
	const posts = await getPosts({
		// category: 'editorials',
		page: 1
	});
	return {
		fullWidth: true, 
		...posts
	}
}
