<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { IconName } from './icons';
	import Icon from './Icon.svelte';

	type Props = {
		icon: IconName;
		title: string;
		headingLevel?: 2 | 3;
		children: Snippet;
	};

	let { icon, title, headingLevel = 3, children }: Props = $props();
</script>

<article class="card icon-card">
	<span class="badge"><Icon name={icon} size={26} /></span>
	<svelte:element this={headingLevel === 2 ? 'h2' : 'h3'} class="title">{title}</svelte:element>
	{@render children()}
</article>

<style>
	.icon-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3.25rem;
		height: 3.25rem;
		border-radius: 50%;
		background: var(--teal-500);
		color: var(--amber-400);
		margin-bottom: 1rem;
		flex-shrink: 0;
	}

	.icon-card :global(.title) {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		margin-bottom: 0.5em;
	}

	.icon-card :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
