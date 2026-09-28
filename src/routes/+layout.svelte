<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/playfair-display';
	import '$lib/styles/global.css';

	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo-badge.webp';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	let { children } = $props();

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'NGO',
			name: site.name,
			slogan: site.motto,
			description: site.description,
			url: page.url.origin,
			logo: new URL(logo, page.url.origin).href,
			email: site.contact.email,
			telephone: site.contact.phoneDisplay.replace(/\s/g, ''),
			founder: { '@type': 'Person', name: site.founder },
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Checkpoint, Muea',
				addressLocality: site.location.locality,
				addressRegion: site.location.region,
				addressCountry: site.location.country
			},
			areaServed: 'Buea, South West Region, Cameroon'
		}).replace(/</g, '\\u003c')
	);
	const jsonLdTag = $derived(`<script type="application/ld+json">${jsonLd}</` + `script>`);
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#1b4b4f" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static, escaped JSON-LD -->
	{@html jsonLdTag}
</svelte:head>

<a class="skip-link" href="#main">Skip to main content</a>

<Header />

<main id="main" tabindex="-1">
	{@render children()}
</main>

<Footer />

<style>
	.skip-link {
		position: absolute;
		left: 1rem;
		top: -100px;
		z-index: 100;
		padding: 0.75rem 1.25rem;
		background: var(--white);
		color: var(--teal-700);
		font-weight: 700;
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow);
	}

	.skip-link:focus {
		top: 1rem;
	}

	main:focus {
		outline: none;
	}
</style>
