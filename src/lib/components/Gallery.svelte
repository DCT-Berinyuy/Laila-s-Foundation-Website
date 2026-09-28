<script lang="ts">
	import type { GalleryImage } from '$lib/data/content';

	type Props = { images: readonly GalleryImage[] };

	let { images }: Props = $props();
</script>

<ul class="gallery">
	{#each images as image (image.src)}
		<li>
			<img src={image.src} alt={image.alt} width="366" height="236" loading="lazy" decoding="async" />
		</li>
	{/each}
</ul>

<style>
	.gallery {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(0.75rem, 2vw, 1.25rem);
	}

	@media (min-width: 48rem) {
		.gallery {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	li {
		overflow: hidden;
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
		background: var(--cream-200);
	}

	img {
		width: 100%;
		aspect-ratio: 366 / 236;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	@media (prefers-reduced-motion: no-preference) {
		li:hover img {
			transform: scale(1.04);
		}
	}
</style>
