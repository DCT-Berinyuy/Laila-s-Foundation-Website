<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		eyebrow?: string;
		title: string;
		id?: string;
		align?: 'start' | 'center';
		tone?: 'light' | 'dark';
		level?: 1 | 2;
		children?: Snippet;
	};

	let { eyebrow, title, id, align = 'start', tone = 'light', level = 2, children }: Props = $props();
</script>

<div class="heading {align} {tone}">
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<svelte:element this={level === 1 ? 'h1' : 'h2'} {id}>{title}</svelte:element>
	<span class="rule" aria-hidden="true">
		<span></span>
		<svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 2l3 10-3 10-3-10z" /></svg>
		<span></span>
	</span>
	{#if children}
		<div class="intro">{@render children()}</div>
	{/if}
</div>

<style>
	.heading {
		margin-bottom: clamp(2rem, 4vw, 3rem);
	}

	.center {
		text-align: center;
	}

	.center .rule,
	.center .intro {
		margin-inline: auto;
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--terracotta-600);
		margin-bottom: 0.5rem;
	}

	.heading :global(:is(h1, h2)) {
		margin-bottom: 0.4em;
	}

	.rule {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 8rem;
		color: var(--terracotta-500);
	}

	.rule span {
		flex: 1;
		height: 1px;
		background: currentColor;
	}

	.rule svg {
		fill: currentColor;
	}

	.intro {
		margin-top: 1.25rem;
		max-width: 44rem;
		font-size: clamp(1.075rem, 1.8vw, 1.2rem);
		color: var(--charcoal-soft);
	}

	.intro :global(p:last-child) {
		margin-bottom: 0;
	}

	.dark .eyebrow,
	.dark .rule {
		color: var(--amber-400);
	}

	.dark :global(:is(h1, h2)) {
		color: var(--cream);
	}

	.dark .intro {
		color: rgb(250 243 233 / 88%);
	}
</style>
