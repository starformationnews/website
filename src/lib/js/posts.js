import { dev } from '$app/environment';
import { postsPerPage } from '../config';
import { getAppropriateDefaultImage } from './content';

/* Adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/lib/assets/js/fetchPosts.js */
export async function getPosts({ cursor = 0, page = 0, limit = postsPerPage, category = 'all' }) {
	let { posts, allCategories } = await fetchPosts();

	// Now, filter out any post categories we don't want
	let { sortedPosts, totalPages } = filterAndSortPosts(category, posts, cursor, page, limit);

	// Select only desired metadata information
	sortedPosts = filterMetadata(sortedPosts);

	return {
		posts: sortedPosts,
		page: page,
		total: totalPages,
		category: category,
		allCategories: allCategories
	};
}

async function fetchPosts() {
	let posts = await Promise.all(
		// This uses a pretty awful bit of fast-glob syntax, see here: https://github.com/mrmlnc/fast-glob#basic-syntax
		Object.entries(import.meta.glob('/src/routes/\\(posts\\)/**/+page.md')).map(
			async ([path, resolver]) => {
				const { metadata } = await resolver();
				const url = '/' + path.split('/').slice(4, -1).join('/');
				return { ...metadata, url, path };
			}
		)
	);

	// Remove any unpublished posts if not in a dev environment
	posts = removeUnpublishedPosts(posts);

	// While we have everything loaded, it's also very inexpensive to get all post categories
	let allCategories = getAllPostCategories(posts);

	return { posts, allCategories };
}

function filterAndSortPosts(category, posts, cursor, page, limit) {
	if (category && category !== 'all') {
		posts = posts.filter((post) =>
			post.categories.map((a) => a.toLowerCase()).includes(category.toLowerCase())
		);
	}
	const totalPages = Math.max(Math.ceil(posts.length / postsPerPage), 1);

	// Sort by date
	posts.forEach((post) => (post.date = new Date(post.date)));
	let sortedPosts = posts.sort((a, b) => b.date - a.date);

	// Set post start
	if (cursor || page) {
		if (page) {
			sortedPosts = sortedPosts.slice((page - 1) * postsPerPage);
		} else {
			sortedPosts = sortedPosts.slice(cursor);
		}
	}

	// Set posts end
	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}
	return { sortedPosts, totalPages, posts };
}

function filterMetadata(sortedPosts) {
	sortedPosts.forEach((post) => {
		// Handle posts without an image
		if (post.image === undefined) {
			const defaultImage = getAppropriateDefaultImage(post.categories[0], post.title);
			post.image = defaultImage.localPath;
			post.imageCredit = defaultImage.credit;
			post.imageURL = defaultImage.url;
		}

		// Handle posts with a locally referenced path, which we need to santize
		if (post.image.startsWith('./')) {
			const folder = post.path.split('/').slice(0, -1).join('/');
			post.image = folder + "/" + post.image.slice(2);
		}
	});
	return sortedPosts;
}

function getAllPostCategories(posts) {
	let allCategories = new Set();
	posts.forEach((post) => allCategories.add(...post.categories));
	allCategories = new Array(...allCategories).sort();
	return allCategories;
}

function removeUnpublishedPosts(posts) {
	if (!dev) {
		posts = posts.filter((post) => post.hidden === true);
	}
	return posts;
}
