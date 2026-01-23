import { siteTitle, siteDescription, siteKeywords, siteURL } from '$lib/config';
import { page } from '$app/state';
import { convertPathOnLocalImages } from '$lib/js/content';

export const siteHead = $state({
	title: '',
	description: '',
	keywords: '',
	author: '',
	url: '',
	image: ''
});

const defaultImage = convertPathOnLocalImages('/src/lib/assets/images/pipe_nebula_eso_2009.webp');

export function setSiteHeader(params) {
	if (params === undefined) {
		params = {};
	}

	siteHead.title = params.title ? `${params.title} - ${siteTitle}` : getDefaultPageTitle();
	siteHead.description = params.description ? params.description : siteDescription;
	siteHead.keywords = params.keywords ? params.keywords : siteKeywords;
	siteHead.author = params.author ? params.author.join(', ') : siteTitle;
	siteHead.url = siteURL + page.url.pathname;
	siteHead.image = params.image ? convertPathOnLocalImages(params.image) : defaultImage;
}

export function resetSiteHeader() {
	// Run setHeader with no params (uses defaults)
	setSiteHeader();
}

function getDefaultPageTitle() {
	const splitPath = page.url.pathname
		.split('/')
		.slice(1)
		.filter((value) => value !== 'category')
		.map((word) => (word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('%20', ' '));
	return [siteTitle, ...splitPath].reverse().filter(Boolean).join(' - ');
}
