import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request, cookies }) {
	const result = await request.json();

	// Get the file if it exists
	const shortPath = result.path.replace('/src/routes/(posts)', '');
	const fullPath = path.join(import.meta.dirname.split('/').slice(0, -5).join('/'), result.path);
	const message = result.hidden
		? `Hid post ${result.postID} at ${shortPath}`
		: `Unhid post ${result.postID} at ${shortPath}`;

	console.log("DEV:", message);

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

	// Write & return message
	fs.writeFileSync(fullPath, JSON.stringify(hiddenPosts, undefined, 4), { encoding: 'utf8' });
	return json({ success: true, message: message }, { status: 201 });
}
