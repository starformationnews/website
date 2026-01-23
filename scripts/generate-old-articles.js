/* Run as "node scripts/generate-old-articles.js" (not on the package.json because it's dangerous)
has no error handling yet so dont fuck up 
*/
import { SFNIDToStartOfMonth } from '../src/lib/js/sfn.js';
import fs from 'fs';

console.log(
	'WARNING: this script will overwrite ALL +page.md files in the old newsletter directories. BACK UP YOUR WORK!'
);

for (let id = 1; id <= 376; id++) {
// for (let id = 1; id <= 100; id++) {
	const date = SFNIDToStartOfMonth(id);
	const month = date.toLocaleDateString('en-GB', { month: 'long' });
	const year = date.toLocaleDateString('en-GB', { year: 'numeric' });
	const directory = `src/routes/(posts)/newsletters/previous-articles/${id}`;
	const editor = id < 334 ? 'Bo Reipurth' : 'João Alves';
	const link = `https://raw.githubusercontent.com/starformationnews/previous-newsletters/main/pdf/newsletter${id}.pdf`;

	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}
	const content = `---
title: 'Star Formation Newsletter #${id}'
date: ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}
hideDate: true
authors: ['${editor}']
categories: ['newsletters']
description: 'Since 1992, The Star Formation Newsletter has been the premier destination for keeping up with news from the star formation community. This is edition #${id}, covering new research postings in ${month} of ${year}.'\n
arxiv: false
link: "${link}"
# image: './header.webp'
---

This newsletter is available exclusively in .pdf format at [this link](${link}).\n`;
	fs.writeFileSync(directory + '/+page.md', content);
}
