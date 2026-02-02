/* Some utilities for e.g. random number generation. */

/* SplitMix32 random number generator. Crucially, this is simple enough to be reproducibly
seedable, but not so crap that anyone would ever beat it =) */
export function randomNumberGenerator(seed) {
	// Run through a hash function for extra randomness
	seed = generateHash(seed);

    // the splitmix32 random number generator
    // source: https://stackoverflow.com/a/47593316
	const rng = function () {
		seed |= 0;
		seed = (seed + 0x9e3779b9) | 0;
		let t = seed ^ (seed >>> 16);
		t = Math.imul(t, 0x21f0aaad);
		t = t ^ (t >>> 15);
		t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
	};

    // Run the RNG ten times to get more randomness
    for (let i = 0; i < 10; i++) {
        rng()
    }

    return rng;
}

export function generateHash(string) {
	// Taken from here: https://stackoverflow.com/a/7616484
	// this is ugly as fuck lol javascript is not a real language tbh
	let hash = 0;
	for (const char of string) {
		hash = (hash << 5) - hash + char.charCodeAt(0);
		hash |= 0; // Constrain to 32bit integer
	}
	return hash;
}
