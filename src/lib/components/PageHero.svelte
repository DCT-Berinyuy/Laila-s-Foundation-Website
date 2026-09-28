<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		eyebrow: string;
		title: string;
		children?: Snippet;
	};

	let { eyebrow, title, children }: Props = $props();
</script>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">{eyebrow}</p>
		<h1>{title}</h1>
		{#if children}
			<div class="lede">{@render children()}</div>
		{/if}
	</div>
	<svg class="corner corner--tl" viewBox="0 0 80 80" aria-hidden="true">
		<path d="M2 78V2h76M12 78V12h66M22 44V22h22" />
	</svg>
	<svg class="corner corner--br" viewBox="0 0 80 80" aria-hidden="true">
		<path d="M2 78V2h76M12 78V12h66M22 44V22h22" />
	</svg>
</section>

<style>
	.page-hero {
		position: relative;
		overflow: hidden;
		background: var(--teal-500);
		color: var(--cream);
		padding-block: clamp(3.5rem, 9vw, 6rem);
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--amber-400);
		margin-bottom: 0.75rem;
	}

	h1 {
		color: var(--cream);
		max-width: 20ch;
	}

	.lede {
		max-width: 42rem;
		font-size: clamp(1.1rem, 2vw, 1.25rem);
		color: rgb(250 243 233 / 90%);
	}

	.lede :global(p:last-child) {
		margin-bottom: 0;
	}

	.corner {
		position: absolute;
		width: clamp(56px, 10vw, 96px);
		height: auto;
		fill: none;
		stroke: var(--amber-400);
		stroke-width: 1.25;
		opacity: 0.55;
	}

	.corner--tl {
		top: 14px;
		left: 14px;
	}

	.corner--br {
		bottom: 14px;
		right: 14px;
		transform: rotate(180deg);
	}
</style>
