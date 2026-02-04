<!-- Default article layout! 
Most basic article type: only contains a header & then all content in the .md file. -->

<script>
	import { formatDate, renderLaTeX } from '$lib/js/format';
	import ArticleContainer from '../articles/ArticleContainer.svelte';
	import ArticleHeading from '../articles/ArticleHeading.svelte';
	import ThesisAbstract from '../articles/ThesisAbstract.svelte';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();

	// Todo this does not support other (neo) pronouns yet
	const accusativePronouns = {
		'He/him': 'him',
		'She/her': 'her',
		'They/them': 'them'
	};
	const possessivePronouns = {
		'He/him': 'his',
		'She/her': 'her',
		'They/them': 'their'
	};

	let pronounAccusative = $derived(accusativePronouns[props.thesisPronouns]);
	let pronounPossessive = $derived(possessivePronouns[props.thesisPronouns]);

	// To keep filling out the markdown files easier, some details can be auto-filled.
	// Description
	let firstParagraph =
		$derived(`Congratulations to Dr. ${props.thesisPerson} for successfully defending ${pronounPossessive} PhD thesis
		on ${formatDate(props.thesisDate)}!`);
	let description = $derived(props.description ? props.description : firstParagraph);
</script>

<ArticleContainer>
	<ArticleHeading {...props} />

	<p>{firstParagraph}</p>

	<p><strong>Title:</strong> {renderLaTeX(props.thesisTitle)}</p>

	{#if props.thesisSupervisor}
		<p><strong>Supervisor:</strong> {props.thesisSupervisor}</p>
	{/if}

	<p><strong>Institute:</strong> {props.thesisInstitution}</p>

	<ThesisAbstract>{@render props.children?.()}</ThesisAbstract>

	{#if props.thesisWebsite || props.thesisEmail}
		<p>
			<strong>Want to find out more?</strong> You can get in touch with Dr. {props.thesisPerson} via
			{#if props.thesisEmail && !props.thesisWebsite}
				<a href="mailto:{props.thesisEmail}">{pronounPossessive} email address</a>.
			{/if}
			{#if props.thesisWebsite && !props.thesisEmail}
				<a href="{props.thesisWebsite}">via {pronounPossessive} website.</a>
			{/if}
			{#if props.thesisWebsite && props.thesisEmail}
				<a href="mailto:{props.thesisEmail}">{pronounPossessive} email address</a> or
				<a href="{props.thesisWebsite}">via {pronounPossessive} website.</a>
			{/if}
		</p>
	{/if}

	{#if props.thesisJob}
		<div class="give-me-a-job">
			<p>
				<strong>Dr. {props.thesisPerson} is currently looking for a postdoc.</strong><br />Please
				get in touch with {pronounAccusative} if you know of any openings!
			</p>
		</div>
	{/if}
</ArticleContainer>

<style>
	.give-me-a-job {
		background-color: var(--color-sandwhite-dark);
		text-align: center;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20px;
		padding: 10px;
		margin-top: 40px;
	}
	.give-me-a-job > p {
		font-size: 23px;
		margin: 0px;
		padding: 0px;
	}
</style>
