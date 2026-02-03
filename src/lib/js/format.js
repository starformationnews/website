import katex from 'katex';

export function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export const numberFormatter = Intl.NumberFormat('en', {
	notation: 'compact'
});

export function renderLaTeX(text) {
	return text
		.replaceAll(' -- ', ' – ')
		.replaceAll('--', '—')
		.replaceAll(/\$\$(.*?)\$\$/g, function (outer, inner) {
			return katex.renderToString(inner, { displayMode: true, throwOnError: false });
		})
		.replaceAll(/\$(.*?)\$/g, function (outer, inner) {
			return katex.renderToString(inner, { displayMode: false, throwOnError: false });
		})
		.replaceAll(/\\\[(.*?)\\\]/g, function (outer, innner) {
			return katex.renderToString(inner, { displayMode: true, throwOnError: false });
		})
		.replaceAll(/\\\((.*?)\\\)/g, function (outer, innner) {
			return katex.renderToString(inner, { displayMode: false, throwOnError: false });
		});
}

const ROMAN_NUMERAL_VALUES = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

/* Converts Roman numerals to numbers. If returnStringOnFail is true, will silently fail
and just return the string you started with.
Adapted from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php
*/
export function romanNumeralToNumber(string, returnStringOnFail) {
	string = string.toUpperCase();

	if (!isRomanNumeral(string)) {
		if (returnStringOnFail) {
			return string;
		}
		throw new Error(`String ${string} is not a Roman numeral!`);
	}

	// Iterate through the characters of string starting from the second character.
	let number = ROMAN_NUMERAL_VALUES[string[0]];

	for (let i = 1; i < string.length; i++) {
		const current = ROMAN_NUMERAL_VALUES[string[i]];
		const before = ROMAN_NUMERAL_VALUES[string[i - 1]];

		// If the current character's value is less than or equal to the previous
		// character's value, add it to num.
		if (current <= before) {
			number += current;
		} else {
			// If the current character's value is greater than the previous character's
			// value, subtract twice the previous character's value and add the current
			// character's value to num.
			number = number - before * 2 + current;
		}
	}

	return number;
}

/* Whether or not a given string is a valid roman numeral. Is strict about capitalization. */
export function isRomanNumeral(string) {
	for (let i = 0; i < string.length; i++) {
		if (!ROMAN_NUMERAL_VALUES.hasOwnProperty(string[i])) {
			return false;
		}
	}
	return true;
}

/* Remove all punctuation in a string. 
Source: https://stackoverflow.com/a/4328722
*/
export function removePunctuation(string) {
	return string.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
