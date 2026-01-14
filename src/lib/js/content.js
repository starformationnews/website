import defaultImageCredits from '../assets/images/credits.json';

export function getAppropriateDefaultImage(primaryCategory, title) {
	// Special case 1: if it's an editorial, then we always do Barnard 68!
	if (primaryCategory === 'editorials') {
		return {
			filename: 'barnard_68_eso_1998.webp',
			...defaultImageCredits['barnard_68_eso_1998.webp']
		};
	}

	// Otherwise: pick one of the following (hardcoded for now so that they don't change)
	const options = [
		'hl_tau_alma_2014.jpg',
		'pipe_nebula_eso_2009.jpg',
		'rcw_36_eso_2019.jpg',
		'trumpler_14_nasa_2016.jpg'
	];

	const hash = Math.abs(generateHash(String(primaryCategory) + String(title)));
	const option = options[hash % options.length];
	console.log('filename', option, hash, hash % options.length);
	return {
		filename: option,
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
