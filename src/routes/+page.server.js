import { getPosts } from '../lib/js/posts';

export async function load({ params }) {
	return await getPosts({
		category: 'all',
		page: 1
	});
}
