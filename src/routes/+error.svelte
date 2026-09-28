<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const notFound = $derived(page.status === 404);
</script>

<Seo title={notFound ? 'Page not found' : 'Something went wrong'} />

<section class="section">
	<div class="container error">
		<p class="code">{page.status}</p>
		<h1>{notFound ? 'We couldn’t find that page' : 'Something went wrong'}</h1>
		<p class="lead">
			{notFound
				? 'The page may have moved, or the link may be incorrect.'
				: 'Please try again in a moment.'}
		</p>
		<div class="btn-row">
			<a class="btn btn--primary" href="/">Back to home <Icon name="arrow" size={18} /></a>
			<a class="btn btn--outline" href="/get-involved#support">Contact us</a>
		</div>
	</div>
</section>

<style>
	.error {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.code {
		font-family: var(--font-serif);
		font-size: clamp(4rem, 14vw, 7rem);
		font-weight: 700;
		line-height: 1;
		color: var(--terracotta-500);
		margin-bottom: 0.5rem;
	}
</style>
