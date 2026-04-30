<script>
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import { siteMailingListSignup } from '$lib/config';
</script>

<SiteHeader />

<h1>About us</h1>

<p>
	<em><strong>The Star Formation Newsletter</strong></em> has been the premier destination for news about
	star and planet formation since its founding in 1992.
</p>

<p>
	You can <a href={siteMailingListSignup} target="_blank">sign up to our mailing list</a> to receive our
	monthly updates.
</p>

<p>The newsletter is currently maintained by:</p>

<ul>
	<li><strong>João Alves:</strong> Editor-in-Chief</li>
	<li><strong>Emily Hunt:</strong> Technical Editor</li>
	<li><strong>Moa Huppenkothen:</strong> Editor</li>
	<li><strong>Lilly Kormann:</strong> Editor</li>
</ul>

<p>Have you got a question? Get in touch by emailing <strong><a href="mailto:sfn.astro@univie.ac.at">sfn.astro@univie.ac.at</a></strong>.</p>
