<script lang="ts">
	import type { Stat } from '$lib/data/content';

	type Props = { stat: Stat; duration?: number; tone?: 'dark' | 'light' };

	let { stat, duration = 1400, tone = 'dark' }: Props = $props();

	// Rendered at full value for no-JS and prerendered HTML; animated from 0 once visible.
	let shown = $state<number | null>(null);
	const display = $derived(shown ?? stat.value);

	function countUp(node: HTMLElement) {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		shown = 0;
		let frame = 0;

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries.some((e) => e.isIntersecting)) return;
				observer.disconnect();
				const start = performance.now();
				const tick = (now: number) => {
					const t = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - t, 3);
					shown = Math.round(eased * stat.value);
					if (t < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);
		observer.observe(node);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	}
</script>

<div class="stat {tone}" {@attach countUp}>
	<p class="value" aria-hidden="true">{display}</p>
	<p class="label"><span class="visually-hidden">{stat.value} </span>{stat.label}</p>
</div>

<style>
	.stat {
		text-align: center;
		padding: 1.5rem 1rem;
		border: 1px solid rgb(227 168 87 / 40%);
		border-radius: var(--radius);
		background: rgb(255 255 255 / 4%);
	}

	.value {
		font-family: var(--font-serif);
		font-size: clamp(2.75rem, 7vw, 3.75rem);
		font-weight: 700;
		line-height: 1;
		color: var(--amber-400);
		margin: 0 0 0.5rem;
		font-variant-numeric: tabular-nums;
	}

	.label {
		margin: 0;
		color: var(--cream);
		font-size: 1rem;
	}

	.light {
		background: var(--white);
		border-color: var(--cream-200);
		box-shadow: var(--shadow-sm);
	}

	.light .value {
		color: var(--terracotta-600);
	}

	.light .label {
		color: var(--charcoal);
	}
</style>
