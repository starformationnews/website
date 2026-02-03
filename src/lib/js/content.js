import { formatDate, renderLaTeX, removePunctuation, romanNumeralToNumber } from '$lib/js/format';
import { render } from 'svelte/server';
import { randomNumberGenerator } from './random.js';
import defaultImageCredits from '../assets/images/credits.json';
import { generateHash } from './random.js';
import { dev } from '$app/environment';

const localImageURLs = import.meta.glob(['/src/**/*.webp', '/src/**/*.jpg', '/src/**/*.png'], {
	eager: true,
	query: '?url',
	import: 'default'
});

export function convertPathOnLocalImages(path) {
	// Only local ones get converted! So: it must start with /src.
	if (path.slice(0, 4) !== '/src') {
		return path;
	}

	// Otherwise: this function handles accessing an object containing URLs of all objects for you.
	// Be thankful. cos this took me fucking ages
	// stackoverflow my beloved: https://stackoverflow.com/questions/77934659/how-can-i-dynamically-import-images-stored-in-lib-within-a-component-in-svelte
	if (localImageURLs[path] === undefined) {
		throw new Error(`Image path does not lead to an image! Is it correct? Path: ${path}`);
	}

	return localImageURLs[path];
}

export function getAppropriateDefaultImage(primaryCategory, title) {
	// Special case 1: if it's an editorial, then we always do Barnard 68!
	if (primaryCategory === 'editorials') {
		return {
			filename: 'barnard_68_eso_1998.webp',
			localPath: '/src/lib/assets/images/barnard_68_eso_1998.webp',
			...defaultImageCredits['barnard_68_eso_1998.webp']
		};
	}

	// Otherwise: pick one of the following (hardcoded for now so that they don't change)
	const options = [
		'hl_tau_alma_2014.webp',
		'pipe_nebula_eso_2009.webp',
		'rcw_36_eso_2019.webp',
		'trumpler_14_nasa_2016.webp'
	];

	const hash = Math.abs(generateHash(String(primaryCategory) + String(title)));
	const option = options[hash % options.length];
	return {
		filename: option,
		localPath: `/src/lib/assets/images/${option}`,
		...defaultImageCredits[option]
	};
}

const arxivJsonFiles = import.meta.glob(['/src/routes/**/arxiv.json'], {
	eager: true,
	// query: '?url',
	import: 'default'
});
const arxivHiddenJsonFiles = import.meta.glob(['/src/routes/**/hidden.json'], {
	eager: true,
	// query: '?url',
	import: 'default'
});

/* Loads data in an arxiv.json object for a given page. Assumes that the page is in 
/src/routes/(posts) and only works if the file is already generated. */
export function loadArxivData(path) {
	const pathArxiv = '/src/routes/(posts)' + path + '/arxiv.json';

	if (arxivJsonFiles[pathArxiv] === undefined) {
		console.log(
			'loadArxivData(): Path does not lead to an arxiv.json file! Are you sure',
			'you generated the arXiv postings .json for this month? Is this path',
			`correct? Path: ${pathArxiv}`
		);
	}

	let posts = arxivJsonFiles[pathArxiv];
	posts = hidePosts(posts, path);
	posts = sortPosts(posts, path);
	posts = formatArxivPostProperties(posts);

	return posts;
}

/* Hides user-specified posts. */
function hidePosts(arxivPosts, path) {
	// Set default value
	arxivPosts.forEach((post) => {
		post.hidden = false;
	});

	// In case there's no hidden post file: do nothing!
	const pathHidden = '/src/routes/(posts)' + path + '/hidden.json';
	if (arxivHiddenJsonFiles[pathHidden] === undefined) {
		if (dev) {
			console.log(`hidePosts(): No hidden posts file found (yet) at ${pathHidden}`);
		}
		return arxivPosts;
	}

	// In case there are no hidden posts: do nothing!
	const hiddenIDs = arxivHiddenJsonFiles[pathHidden];
	if (hiddenIDs.length === 0) {
		return arxivPosts;
	}

	// Otherwise: merge it with our results!
	const idShortArray = arxivPosts.map((post) => post.idShort);
	for (const id of hiddenIDs) {
		const index = idShortArray.indexOf(id);

		// Failure case: no match
		if (index === -1 && dev) {
			console.log(`hidePosts(): cannot hide ${id} - it doesn't seem to exist in arxiv.json.`);
		}

		if (index > -1) {
			if (dev) {
				arxivPosts[index].hidden = true;
			} else {
				arxivPosts.splice(index, 1);
			}
		}
	}
	return arxivPosts;
}

/* Adds additional things to the posts, like rendering latex within them, a nice date, and more. */
function formatArxivPostProperties(arxivPosts) {
	const maxAuthors = 5;

	arxivPosts.forEach((post) => {
		// Title & abstract
		post.title = renderLaTeX(post.title);
		post.summary = renderLaTeX(post.summary);

		// Author list
		const allAuthors = post.authors.map((author) => author.name);
		post.displayAuthors =
			allAuthors.length > maxAuthors
				? allAuthors.slice(0, maxAuthors).join(', ') + ', <em>et al.</em>'
				: allAuthors.join(', ');

		// Date
		post.displayDate = formatDate(post.published);

		// Links
		post.nasaADSLink = `https://ui.adsabs.harvard.edu/abs/arxiv:${post.idShort}`;
		post.arxivAbsLink = `https://arxiv.org/abs/${post.idShort}`;
		post.arxivPDFLink = `https://arxiv.org/pdf/${post.idShort}`;
	});
	return arxivPosts;
}

function sortPosts(arxivPosts, path) {
	// Pick a seed. This one is impossible to predict but is deterministic on any machine!
	// We use the current month/year, and the number of posts, and the first ten
	// characters of the posts.
	const seedString =
		path +
		String(arxivPosts.length * 42) +
		arxivPosts.map((post) => post.title.slice(0, 5)).join('');

	const rng = randomNumberGenerator(seedString);

	// Next, assign every SUBTITLE a random number. This means that posts in a series
	// are hopefully sorted. We try to get subtitles from titles by splitting based on
	// common punctuation values.
	const subtitleIndex = new Object();
	for (const post of arxivPosts) {
		// Get a subtitle
		// Grab first thing after punctuation
		let subtitle = post.title.split('.')[0].split(':')[0].split('(')[0].toLowerCase();

		// Remove the last thing in the title, if possible
		const subtitleSplit = subtitle.split(' ');
		if (subtitleSplit.length > 1) {
			subtitle = subtitleSplit.slice(0, -1).join(' ');
		}

		// Make a new index for this subtitle
		if (!subtitleIndex.hasOwnProperty(subtitle)) {
			subtitleIndex[subtitle] = rng();
		}
		post.index = subtitleIndex[subtitle];

		// Also make a nicely sortable version of the title
		post.titleSortable = removePunctuation(post.title)
			.toUpperCase()
			.split(' ')
			.map((word) => String(romanNumeralToNumber(word, true)).padStart(4, '0'))
			.join(' ');
	}

	// Then, sort the posts: based on the ID of their subtitle, and then on the titles
	// themselves. This will HOPEFULLY sort series papers together, as long as the names
	// aren't too different!
	arxivPosts = arxivPosts.toSorted((a, b) =>
		a.index !== b.index ? a.index - b.index : a.titleSortable.localeCompare(b.titleSortable)
	);
	return arxivPosts;
}
