<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import SupportBand from '$lib/components/SupportBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import {
		yearlyGoals,
		expectedImpact,
		timeline,
		sustainability,
		fundingGoal
	} from '$lib/data/content';
</script>

<Seo
	title="Our impact"
	description="Our goals for the year: 100 children back in school, 50 widows supported towards self-reliance, 100 IDP families supported and 50 young people in drug rehabilitation."
/>

<PageHero eyebrow="Our impact" title="Clear goals, measured in lives changed">
	<p>
		We set concrete targets for each year. Here is what we are working towards and how we plan to
		get there.
	</p>
</PageHero>

<section class="section" aria-labelledby="goals-title">
	<div class="container">
		<SectionHeading id="goals-title" eyebrow="Our goals for the year" title="What we aim to achieve">
			<p>These are targets for the next twelve months, not results already achieved.</p>
		</SectionHeading>
		<div class="grid grid--stats">
			{#each yearlyGoals as stat (stat.label)}
				<StatCounter {stat} tone="light" />
			{/each}
		</div>
	</div>
</section>

<section class="section section--tint" aria-labelledby="impact-title">
	<div class="container split">
		<div>
			<SectionHeading id="impact-title" eyebrow="Expected impact" title="The change we want to see" />
			<p class="lead">
				When families have shelter, children are in school and people know their rights, whole
				communities grow stronger.
			</p>
		</div>
		<ul class="checklist">
			{#each expectedImpact as item (item)}
				<li>
					<span class="check"><Icon name="heart" size={18} /></span>
					{item}
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section" aria-labelledby="timeline-title">
	<div class="container">
		<SectionHeading id="timeline-title" eyebrow="Our plan" title="Twelve months, step by step" />
		<ol class="timeline">
			{#each timeline as phase, i (phase.months)}
				<li>
					<span class="step" aria-hidden="true">{i + 1}</span>
					<div>
						<p class="months">{phase.months}</p>
						<p class="activity">{phase.activity}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section section--tint" aria-labelledby="sustain-title">
	<div class="container">
		<SectionHeading id="sustain-title" eyebrow="Sustainability" title="Built to last">
			<p>We are building support that keeps going long after a single donation.</p>
		</SectionHeading>
		<div class="grid grid--4">
			{#each sustainability as item (item.title)}
				<IconCard icon={item.icon} title={item.title}>
					<p>{item.text}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section class="section" aria-labelledby="funding-title">
	<div class="container funding">
		<SectionHeading id="funding-title" eyebrow="Funding goal" title="What it takes for one year" align="center">
			<p>
				Education, relief for widows and orphans, aid for displaced families and legal support for a
				full year of work.
			</p>
		</SectionHeading>
		<p class="amount">{fundingGoal.fcfa}</p>
		<p class="amount-alt">({fundingGoal.usd})</p>
		<div class="btn-row center">
			<a class="btn btn--primary" href="/get-involved#support">
				Help us reach our goal
				<Icon name="arrow" size={18} />
			</a>
		</div>
	</div>
</section>

<SupportBand />

<style>
	.split {
		display: grid;
		gap: clamp(1.5rem, 4vw, 4rem);
		align-items: center;
	}

	@media (min-width: 52rem) {
		.split {
			grid-template-columns: 1fr 1fr;
		}
	}

	.checklist {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.75rem;
	}

	.checklist li {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		padding: 1rem 1.25rem;
		background: var(--white);
		border: 1px solid var(--cream-200);
		border-radius: var(--radius);
		font-weight: 500;
	}

	.check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		background: var(--terracotta-500);
		color: var(--white);
	}

	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 56rem) {
		.timeline {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.timeline li {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	@media (min-width: 56rem) {
		.timeline li {
			flex-direction: column;
		}
	}

	.step {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		background: var(--teal-500);
		color: var(--cream);
		font-family: var(--font-serif);
		font-weight: 700;
		font-size: 1.2rem;
	}

	.months {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--terracotta-600);
		margin-bottom: 0.25rem;
	}

	.activity {
		margin: 0;
		font-weight: 500;
	}

	.funding {
		text-align: center;
	}

	.amount {
		font-family: var(--font-serif);
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		font-weight: 700;
		line-height: 1.1;
		color: var(--terracotta-600);
		margin: 0;
	}

	.amount-alt {
		font-size: 1.15rem;
		color: var(--charcoal-soft);
		margin-bottom: 2rem;
	}

	.center {
		justify-content: center;
	}
</style>
