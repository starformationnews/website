/* Run as "npm run arxiv"
has no error handling yet so dont fuck up 
*/
import { fetchPaperIDs } from '../src/lib/js/submissionForm.js';
import { fetchArXivMetadata } from '../src/lib/js/arxiv.js';
import { dateToSFNID, SFNIDToStartOfMonth } from '../src/lib/js/sfn.js';
import fs from 'fs';
import { parseArgs } from 'util';

async function main() {
	const params = getArgs();
	createOutputDirectory(params);
	await fetchAndSavePapers(params);
	addTemplatePageFile(params);
	printFurtherInstructions(params);
}

async function fetchAndSavePapers(params) {
	// Get paper IDs from Google sheets
	const paperIDs = await fetchPaperIDs(params.year, params.month, params.extraMonths);
	if (params.dryRun) {
		console.log('\nDry run! Will not query arXiv or save IDs. IDs that would have been queried:');
		console.log(paperIDs);
		return;
	}

	// Fetch arXiv-specific metadata, like abstracts
	const articles = await fetchArXivMetadata(paperIDs);
	await saveArticles(articles, params);
}

function createOutputDirectory(params) {
	console.log('\n-----------------------');
	console.log('CREATING OUTPUT DIRECTORY');
	console.log('-----------------------');

	if (params.dryRun) {
		console.log('Dry run! Will not create directory.');
		return;
	}

	const alreadyExists = fs.existsSync(params.dir);
	if (!params.force && alreadyExists) {
		throw new Error(
			'Directory already exists! Run with --force to allow overwriting of arxiv.json file.'
		);
	}

	if (!alreadyExists) {
		console.log('Making directory...');
		fs.mkdirSync(params.dir);
	} else {
		console.log(
			'Directory already exists, but --force specified. Overwriting of arxiv.json is allowed.'
		);
	}
}

async function saveArticles(articles, params) {
	console.log('\n-----------------------');
	console.log('SAVING OUTPUT');
	console.log('-----------------------');
	const outfile = `${params.dir}/arxiv.json`;
	fs.writeFileSync(outfile, JSON.stringify(articles, undefined, 4), 'utf8');

	console.log(`Saved output to ${outfile}`);
}

function addTemplatePageFile(params) {
	console.log('\n-----------------------');
	console.log('CREATING +page.md FROM TEMPLATE');
	console.log('-----------------------');
	if (params.dryRun) {
		console.log('Dry run! Will not overwrite page file.');
		return;
	}
	const outfile = `${params.dir}/+page.md`;
	if (fs.existsSync(outfile)) {
		console.log(
			"File already exists! +page.md will never be overwritten, even with --force. Delete the file manually if you'd like it to be replaced."
		);
		return;
	}

	// File locations
	const templateForNewsletters = `src/lib/templates/newsletter.md`;
	const publicationDate = new Date(Date.UTC(params.year, params.month, 3));
	const sfnDate = new Date(Date.UTC(params.year, params.month - 1));

	// Grab template
	let text = fs.readFileSync(templateForNewsletters, { encoding: 'utf-8' });

	// Teplace any values that are templated
	const map = {
		SFN_NUMBER: params.id,
		DAY: String(publicationDate.getUTCDay()).padStart(2, '0'),
		MONTH: String(publicationDate.getUTCMonth() + 1).padStart(2, '0'),
		YEAR: publicationDate.getUTCFullYear(),
		MONTH_TEXT: sfnDate.toLocaleDateString('en-GB', { month: 'long' })
	};
	text = text.replace(/\${([a-zA-Z_]+)}/g, (tag, key) =>
		key in map ? map[key] : `\${TAG ${tag} UNRECOGNIZED}`
	);

	// Save it!
	fs.writeFileSync(outfile, text);

	console.log(`Created new +page.md from template at ${outfile}`);
}

function getArgs() {
	const { values, positionals } = parseArgs({
		args: process.argv.slice(2),
		options: {
			id: { type: 'string' },
			month: { type: 'string' },
			year: { type: 'string' },
			force: { type: 'boolean', short: 'f', default: false },
			'dry-run': { type: 'boolean', short: 'd', default: false },
			'extra-months': { type: 'string', default: '2' } // TODO set elsewhere
		},
		allowPositionals: true
	});

	// Ensure that no positional arguments were given
	if (positionals.length > 1) {
		throw new Error(
			'Only one positional argument (SFN id) is supported. If you want ' +
				'to set the year or month, try ' +
				"'npm run arxiv -- --year=<year> --month=<month>'"
		);
	}
	if (positionals.length == 1) {
		values.id = positionals[0];
	}

	// Work out what was specified
	const definedID = values.id !== undefined;
	const definedDate = values.year !== undefined && values.month !== undefined;

	// Change the name of certain properties
	values.dryRun = values['dry-run'];
	delete values['dry-run'];
	values.extraMonths = values['extra-months'];
	delete values['extra-months'];

	// Change type of any strings that shouldn't be
	values.extraMonths = Number(values.extraMonths);
	if (definedID) {
		values.id = Number(values.id);
	}
	if (definedDate) {
		values.month = Number(values.month);
		values.year = Number(values.year);
	}

	// Special cases
	// id specified but not month or year
	if (definedID && !definedDate) {
		const date = SFNIDToStartOfMonth(values.id);
		values.year = date.getUTCFullYear();
		values.month = date.getUTCMonth() + 1;
	}
	// id is undefined but month or year are specified
	if (!definedID && definedDate) {
		values.id = dateToSFNID(new Date(Date.UTC(values.year, values.month - 1)));
	}
	// nothing specified; get input instead
	if (!definedID && !definedDate) {
		// This didn't work for some fuckign reason aaaa
		// await checkInput(values)
		// TODO: allow for capturing input manually. seems to be a fucking MESS with async tho
		throw new Error(
			'You must specify either an id, or a year and a month. e.g.: ' +
				"'npm run arxiv -- --id=400' or 'npm run arxiv -- --year=2026 --month=4'"
		);
	}

	// Add other info that's always fixed
	values.dir = `src/routes/(posts)/newsletters/${values.year}/${values.id}`;

	return values;
}

function printFurtherInstructions(params) {
	if (params.dryRun) {
		console.log('\n-----------------------');
		console.log('DRY RUN COMPLETE');
		console.log('-----------------------');
		console.log('No files were changed in the repository.');
		return;
	}

	console.log('\n-----------------------');
	console.log('NEXT STEPS');
	console.log('-----------------------');

	console.log('Script ran successfully! Before publishing the SFN, please follow the next steps:');
	console.log('1. Make sure that you are on a new git branch.');
	console.log(
		'2. Run `npm run dev` to preview the site locally and check your SFN. Hide any bad submissions.'
	);
	console.log('3. Find and add an image for your SFN. Follow the instructions in README.md.');
	console.log(
		'4. Address the to-do items in the new +page.md file - date, authors, and image details.'
	);
	console.log('5. Create a new pull request on the GitHub to merge your branch.');
}

/* Optional function that gets the user to confirm that all input is correct. */
// async function checkInput(values) {
// 	console.log(
// 		'Year and month OR id were not specified. Guessing' +
// 			'which SFN to generate. Is the following correct:'
// 	);
// 	console.log('ID:', values.id);
// 	console.log('Month:', values.month);
// 	console.log('Year:', values.year);

// 	const rl = readline.createInterface({ input: stdin, output: stdout });
// 	await rl.question('Are these values correct? ', (answer) => {
// 		if (answer.toLowerCase() !== 'y') {
// 			console.log('Specify an id manually instead.');
// 		}
// 		rl.close();
// 	});
// 	await rl.question('ID: ', (answer) => {
// 		values.id = answer;
// 		values.month = undefined;
// 		values.year = undefined;
// 		rl.close();
// 	});
// 	// const answer = await rl.question('Y/n: ');
// 	// if (answer.toLowerCase() !== 'y') {
// 	// 	console.log('Cancelling run.');
// 	// }
// 	// values.cancel = true;
// }

// Runs all code in main()
await Promise.resolve(main());

// function wait() {
// 	while (!EXITCONDITION) {
// 		setTimeout(() => {}, 100);
// 		console.log("time")
// 	}
// 	setTimeout(() => {}, 10000);
// }

// wait();
