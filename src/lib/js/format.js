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
