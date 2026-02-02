import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const result = await request.json();
	console.log(result);

	return json({ success: true }, { status: 201 });
}
