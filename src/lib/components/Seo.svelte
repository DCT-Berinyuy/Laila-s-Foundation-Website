<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	type Props = {
		title?: string;
		description?: string;
	};

	let { title, description = site.description }: Props = $props();

	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} | ${site.motto}`);
	const canonical = $derived(new URL(page.url.pathname, page.url.origin).href);
	const image = $derived(new URL('/og-image.png', page.url.origin).href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{site.name} logo: two hands holding a heart, with the motto {site.motto}" />
	<meta property="og:locale" content="en_GB" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
