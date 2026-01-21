<script>
	import { socials } from '$lib/config.js';
	import { icons } from '$lib/icons.js';
	import {
		siteMailingListSignup,
		siteFormPaperSubmission,
		siteFormPhDSubmission,
		siteFormMeetingSubmission
	} from '$lib/config.js';
	import Icon from '$lib/blocks/Icon.svelte';
	const year = new Date().getFullYear();

	// import { getPosts } from '$lib/js/posts.js';
	// async function fetchRecentPosts() {
	// 	return getPosts({ limit: 3 });
	// }
	// let recentPosts = fetchRecentPosts();
</script>

<footer>
	<div class="footer">
		<div class="footer-item">
			<!-- <h6>Social media links</h6> -->
			<div class="socials-container">
				<div class="socials">
					{#each Object.entries(socials) as [platform, url]}
					<div class="social-logo">
						<a href={url}>
							<Icon name={platform} />
						</a>
					</div>
					{/each}
				</div>
			</div>
			<!-- <p style="margin-top: 10px; margin-bottom: 5px">
				Email: {socials.email.replace("mailto:", "")}
			</p> -->
			<p style="margin-top: 10px; margin-bottom: 5px; text-align: center">
				© <em>The Star Formation Newsletter {year}</em>
			</p>
		</div>
		<div class="footer-item">
			<!-- <h6>Links</h6> -->
			<!-- <ul>
				<li><a href={siteMailingListSignup} target="_blank">Sign up to our mailing list</a></li>
				<li>
					<a href={siteFormPaperSubmission} target="_blank">Submit papers for the next issue</a>
				</li>
				<li>
					<a href={siteFormMeetingSubmission} target="_blank">Submit upcoming meetings</a
					>
				</li>
				<li>
					<a href={siteFormPhDSubmission} target="_blank"
						>Submit recently defended PhDs</a
					>
				</li>
			</ul> -->
			<div class="footer-links">
				<p><a href={siteMailingListSignup} target="_blank">Sign up to our mailing list</a></p>
				<p>
					<a href={siteFormPaperSubmission} target="_blank">Submit papers for the next issue</a>
				</p>
				<p>
					<a href={siteFormMeetingSubmission} target="_blank">Submit upcoming meetings</a>
				</p>
				<p>
					<a href={siteFormPhDSubmission} target="_blank">Submit recently defended PhDs</a>
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 100px;
		padding-top: 20px;
		border-top: 1px solid black;
	}
	.footer {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-flow: row wrap;
		width: min(1000px, 85vw);
	}
	.footer-item {
		flex: 1 0 auto;
		max-width: min(400px, 85vw);
	}
	.socials {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 25px;
		width: 100%;
	}
	.social-logo {
		flex: 0 0 auto;
		font-size: 25px;
	}

	h6 {
		margin-top: 0px;
		margin-bottom: 5px;
		font-size: 20px;
		font-weight: 600;
		/* font-style: italic; */
	}

	.footer-links > p {
		font-size: 16px;
		margin: 8px 0px;
	}

	@media only screen and (min-width: 1000px) {
	}
	/* Tablets */
	@media screen and (min-width: 801px) and (max-width: 999px) {
		.social-logo {
			font-size: 35px;
		}
		.socials {
			gap: 28px;
		}
		.footer-item {
			flex: 1 0 auto;
			max-width: min(250px, 85vw);
		}
	}
	/* Phones */
	@media screen and (max-width: 800px) {
		.socials {
			justify-content: center;
		}
		.social-logo {
			font-size: 35px;
		}
		.footer-item {
			text-align: center;
		}
		.footer-links {
			margin-top: 20px;
		}
		/* li {
			list-style-type: none;
			margin: 10px 0px 10px 0px;
		}
		ul {
			padding-left: 0px;
		}
		h6 {
			margin-top: 10px;
		} */
	}
</style>
