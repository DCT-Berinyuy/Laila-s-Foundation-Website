<script lang="ts">
	import logo from '$lib/assets/logo-badge.webp';
	import Seo from '$lib/components/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import SupportBand from '$lib/components/SupportBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { site } from '$lib/data/site';
	import { pillars, programs, gallery, yearlyGoals } from '$lib/data/content';
</script>

<Seo description={site.description} />

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="taglines">
				{#each site.taglines as tagline, i (tagline)}
					{#if i > 0}<span aria-hidden="true">·</span>{/if}
					<span>{tagline}</span>
				{/each}
			</p>
			<h1>{site.name}</h1>
			<p class="motto">{site.motto}</p>
			<p class="mission">
				{site.mission} in {site.location.short}, restoring dignity to families affected by the Anglophone
				crisis.
			</p>
			<div class="btn-row">
				<a class="btn btn--primary" href="/get-involved#support">
					Support our work
					<Icon name="arrow" size={18} />
				</a>
				<a class="btn btn--light" href="/programs">See what we do</a>
			</div>
		</div>
		<div class="hero-mark">
			<img src={logo} alt="" width="512" height="512" fetchpriority="high" />
		</div>
	</div>
</section>

<section class="section" aria-labelledby="pillars-title">
	<div class="container">
		<SectionHeading id="pillars-title" eyebrow="Our appeal" title={site.callToAction}>
			<p>
				Years of conflict in the South West Region have forced thousands from their homes, taken
				parents from children and pushed many young people out of school. We work on the ground in
				Buea to meet urgent needs and help people rebuild.
			</p>
		</SectionHeading>
		<div class="grid grid--3">
			{#each pillars as pillar (pillar.title)}
				<IconCard icon={pillar.icon} title={pillar.title}>
					<ul>
						{#each pillar.points as point (point)}
							<li>{point}</li>
						{/each}
					</ul>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section class="section section--tint" aria-labelledby="programs-title">
	<div class="container">
		<SectionHeading id="programs-title" eyebrow="Our programs" title="Four ways we help" />
		<ul class="program-list">
			{#each programs as program (program.slug)}
				<li>
					<a href="/programs#{program.slug}">
						<span class="program-icon"><Icon name={program.icon} size={24} /></span>
						<span class="program-text">
							<strong>{program.title}</strong>
							<span>{program.includes.join(' · ')}</span>
						</span>
						<Icon name="arrow" size={18} class="program-arrow" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section section--teal" aria-labelledby="goals-title">
	<div class="container">
		<SectionHeading id="goals-title" eyebrow="Our goals for the year" title="What your support makes possible" tone="dark">
			<p>These are the targets we are working towards over the next twelve months.</p>
		</SectionHeading>
		<div class="grid grid--stats">
			{#each yearlyGoals as stat (stat.label)}
				<StatCounter {stat} />
			{/each}
		</div>
		<p class="goals-link">
			<a href="/impact">How we will measure our impact <Icon name="arrow" size={16} /></a>
		</p>
	</div>
</section>

<section class="section" aria-labelledby="team-title">
	<div class="container">
		<SectionHeading id="team-title" eyebrow="On the ground" title="Our team in action">
			<p>
				Our volunteers deliver relief supplies, visit families and stand beside the people we serve
				across Buea.
			</p>
		</SectionHeading>
		<Gallery images={gallery} />
	</div>
</section>

<SupportBand />

<style>
	.hero {
		background:
			radial-gradient(circle at 85% 30%, rgb(227 168 87 / 16%), transparent 55%),
			var(--teal-500);
		color: var(--cream);
		padding-block: clamp(3rem, 8vw, 6rem);
	}

	.hero-grid {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	@media (min-width: 52rem) {
		.hero-grid {
			grid-template-columns: 1.4fr 1fr;
		}
	}

	.taglines {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--amber-400);
		margin-bottom: 1rem;
	}

	h1 {
		color: var(--cream);
		font-size: clamp(2.5rem, 7vw, 4.5rem);
		margin-bottom: 0.2em;
	}

	.motto {
		font-family: var(--font-serif);
		font-style: italic;
		font-size: clamp(1.25rem, 3vw, 1.6rem);
		color: var(--amber-400);
		margin-bottom: 1.25rem;
	}

	.mission {
		font-size: clamp(1.1rem, 2vw, 1.25rem);
		max-width: 36rem;
		color: rgb(250 243 233 / 90%);
		margin-bottom: 2rem;
	}

	.hero-mark {
		display: flex;
		justify-content: center;
		order: -1;
	}

	@media (min-width: 52rem) {
		.hero-mark {
			order: 0;
		}
	}

	.hero-mark img {
		width: clamp(9rem, 38vw, 22rem);
		aspect-ratio: 1;
		border-radius: 50%;
		box-shadow:
			0 0 0 10px rgb(227 168 87 / 18%),
			0 0 0 22px rgb(227 168 87 / 8%),
			var(--shadow);
	}

	.program-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 48rem) {
		.program-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.program-list a {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 100%;
		padding: 1.25rem;
		background: var(--white);
		border: 1px solid var(--cream-200);
		border-radius: var(--radius);
		color: var(--charcoal);
		text-decoration: none;
		transition:
			box-shadow 0.2s ease,
			transform 0.2s ease;
	}

	.program-list a:hover {
		box-shadow: var(--shadow);
	}

	@media (prefers-reduced-motion: no-preference) {
		.program-list a:hover {
			transform: translateY(-2px);
		}
	}

	.program-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: var(--teal-500);
		color: var(--amber-400);
	}

	.program-text {
		display: grid;
		gap: 0.15rem;
		flex: 1;
	}

	.program-text strong {
		font-family: var(--font-serif);
		font-size: 1.2rem;
		color: var(--teal-500);
	}

	.program-text span {
		font-size: 0.95rem;
		color: var(--charcoal-soft);
	}

	.program-list :global(.program-arrow) {
		color: var(--terracotta-600);
		flex-shrink: 0;
	}

	.goals-link {
		margin: 2rem 0 0;
		text-align: center;
	}

	.goals-link a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--amber-400);
		font-weight: 600;
	}
</style>
