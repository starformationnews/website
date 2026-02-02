import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request, cookies }) {
	const result = await request.json();

	// Get the file if it exists
	const shortPath = result.path.replace('/src/routes/(posts)', '');
	const fullPath = path.join(import.meta.dirname.split('/').slice(0, -5).join('/'), result.path);

	if (result.hidden) {
		console.log(`DEV: hiding post ${result.postID} at ${shortPath}`);
	} else {
		console.log(`DEV: unhiding post ${result.postID} at ${shortPath}`);
	}

	let hiddenPosts = [];
	if (fs.existsSync(fullPath)) {
		hiddenPosts = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
	}

	// Test if object already hidden
	const index = hiddenPosts.indexOf(result.postID);
	const postAlreadyHidden = index > -1;

	// Handle post hide
	if (result.hidden) {
		if (postAlreadyHidden) {
			const message = 'ERROR: Post already hidden! Will not hide again.';
			console.log(message);
			return json({ success: false, message: message }, { status: 400 });
		}

		hiddenPosts.push(result.postID);
	}

	// Handle post unhide
	else {
		if (!postAlreadyHidden) {
			const message = 'ERROR: Post is already not hidden!';
			console.log(message);
			return json({ success: false, message: message }, { status: 400 });
		}

		hiddenPosts.splice(index, 1);
	}

	fs.writeFileSync(fullPath, JSON.stringify(hiddenPosts, undefined, 4), { encoding: 'utf8' });

	return json({ success: true }, { status: 201 });
}
