import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import path from 'path';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';

/* OPTIONS FOR MDSVEX
This library converts markdown files into Svelte files that can be processed by 
SvelteKit. It's a very nice library!

Here are its docs: https://mdsvex.pngwn.io/

We use quite a few features of it, including named layouts and smartypants formatting
(which converts things like -- into an em-dash.)
*/
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],

	// Layouts. _ is default. We need it to be absolute for *reasons*, hence the paths
	layout: {
		_: path.join(import.meta.dirname, './src/lib/components/layouts/Article.svelte')
	},

	// Add LaTeX math support. TOTAL PAIN. Has to use a custom plugin because {} are
	// special characters in Svelte.
	// https://github.com/kwshi/rehype-katex-svelte
	// https://github.com/pngwn/MDsveX/issues/302#issuecomment-1041293000
	remarkPlugins: [remarkMath],
	rehypePlugins: [
		[
			rehypeKatexSvelte,
			{
				macros: {
					'\\CC': '\\mathbb{C}',
					'\\vec': '\\mathbf'
				}
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: '' // process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},

		// Also add page 1 of the all category, as it's actually not easy to reach
		prerender: {
			entries: ["*", "/category/all/1"]
		}
	}
};

export default config;
