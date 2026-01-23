import { siteTitle, siteDescription, siteKeywords, siteURL } from '$lib/config';
import { page } from '$app/state';
import { convertPathOnLocalImages } from '$lib/js/content';

const defaultImage = convertPathOnLocalImages('/src/lib/assets/images/pipe_nebula_eso_2009.webp');

export function getSiteHeader(params) {
	if (params === undefined) {
		params = {};
	}

	return {
		title: params.title ? `${params.title} - ${siteTitle}` : getDefaultPageTitle(),
		description: params.description ? params.description : siteDescription,
		keywords: params.keywords ? params.keywords : siteKeywords,
		author: params.author ? params.author.join(', ') : siteTitle,
		url: siteURL + page.url.pathname,
		image: params.image ? convertPathOnLocalImages(params.image) : defaultImage
	};
}

export function resetSiteHeader() {
	// Run setHeader with no params (uses defaults)
	getSiteHeader();
}

function getDefaultPageTitle() {
	const splitPath = page.url.pathname
		.split('/')
		.slice(1)
		.filter((value) => value !== 'category')
		.map((word) => (word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('%20', ' '));
	return [siteTitle, ...splitPath].reverse().filter(Boolean).join(' - ');
}
