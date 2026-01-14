import defaultImageCredits from '../assets/images/credits.json';

export function convertPathOnLocalImages(path) {
	// Only local ones get converted! So: it must start with /src.
	if (path.slice(0, 4) !== '/src') {
		return path;
	}

	// Otherwise: this function handles accessing an object containing URLs of all objects for you.
	// Be thankful. cos this took me fucking ages
	// stackoverflow my beloved: https://stackoverflow.com/questions/77934659/how-can-i-dynamically-import-images-stored-in-lib-within-a-component-in-svelte
	const localImageURLs = import.meta.glob(['/src/**/*.webp', '/src/**/*.jpg', '/src/**/*.png'], {
		eager: true,
		query: '?url',
		import: 'default'
	});

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

function generateHash(string) {
	// Taken from here: https://stackoverflow.com/a/7616484
	// this is ugly as fuck lol javascript is not a real language tbh
	let hash = 0;
	for (const char of string) {
		hash = (hash << 5) - hash + char.charCodeAt(0);
		hash |= 0; // Constrain to 32bit integer
	}
	return hash;
}
