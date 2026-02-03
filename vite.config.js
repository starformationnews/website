import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

// Enable fancy animation in local editorial mode
// Currently sometimes broken (see #11)
let serverWatchParams = {};
if (process.env.PRETTY_EDITORIAL_MODE) {
	console.log('Pretty editorial mode enabled! Warning: may not work on some machines right now.');
	serverWatchParams = {
		server: {
			watch: {
				ignored: ['**/hidden.json']
			}
		}
	};
}

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	...serverWatchParams
});
