<!-- Default article layout! 
Most basic article type: only contains a header & then all content in the .md file. -->

<script>
	import ArticleContainer from '../articles/ArticleContainer.svelte';
	import ArticleHeading from '../articles/ArticleHeading.svelte';

	// Passed props include all blog info (like title, date, etc).
	let props = $props();
</script>

<ArticleContainer>
	<ArticleHeading {...props} />

	{@render props.children?.()}

</ArticleContainer>
