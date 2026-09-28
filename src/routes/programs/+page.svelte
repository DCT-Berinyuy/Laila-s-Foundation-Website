<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import SupportBand from '$lib/components/SupportBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { programs, additionalCommitments } from '$lib/data/content';
</script>

<Seo
	title="Our programs"
	description="Education support, care for widows and orphans, aid for internally displaced families and free legal assistance in Buea, Cameroon."
/>

<PageHero eyebrow="Our programs" title="Practical help where it is needed most">
	<p>
		Four core programs bring education, relief and legal support to the people hit hardest by the
		crisis in and around Buea.
	</p>
</PageHero>

<nav class="jump" aria-label="Programs on this page">
	<div class="container">
		<ul>
			{#each programs as program (program.slug)}
				<li><a href="#{program.slug}">{program.title}</a></li>
			{/each}
		</ul>
	</div>
</nav>

{#each programs as program, i (program.slug)}
	<section
		id={program.slug}
		class="section program"
		class:section--tint={i % 2 === 1}
		aria-labelledby="{program.slug}-title"
	>
		<div class="container program-grid">
			<div class="program-head">
				<span class="program-icon"><Icon name={program.icon} size={32} /></span>
				<p class="program-num">Program {i + 1} of {programs.length}</p>
				<h2 id="{program.slug}-title">{program.title}</h2>
				<p class="lead">{program.summary}</p>
			</div>
			<div class="program-detail">
				<div class="card">
					<h3>What we provide</h3>
					<ul>
						{#each program.includes as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div class="goal">
					<p class="goal-label">Our goal this year</p>
					<p class="goal-text">{program.goal}</p>
				</div>
			</div>
		</div>
	</section>
{/each}

<section class="section section--teal" aria-labelledby="more-title">
	<div class="container">
		<SectionHeading id="more-title" eyebrow="Beyond our programs" title="Our wider commitments" tone="dark" />
		<div class="grid grid--2 commitments">
			{#each additionalCommitments as item (item.title)}
				<IconCard icon={item.icon} title={item.title}>
					<p>{item.text}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<SupportBand
	title="Help us reach more families"
	text="Your gift, partnership or material support keeps these programs running. Get in touch to find out how you can help."
/>

<style>
	.jump {
		background: var(--white);
		border-bottom: 1px solid var(--cream-200);
	}

	.jump ul {
		list-style: none;
		margin: 0;
		padding: 0.75rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.jump a {
		display: inline-block;
		padding: 0.45rem 1rem;
		border-radius: 999px;
		border: 1px solid var(--cream-200);
		color: var(--teal-500);
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
	}

	.jump a:hover {
		background: var(--cream-200);
	}

	.program-grid {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: start;
	}

	@media (min-width: 52rem) {
		.program-grid {
			grid-template-columns: 1.3fr 1fr;
		}
	}

	.program-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: var(--teal-500);
		color: var(--amber-400);
		margin-bottom: 1rem;
	}

	.program-num {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--terracotta-600);
		margin-bottom: 0.4rem;
	}

	.program-detail {
		display: grid;
		gap: 1rem;
	}

	.goal {
		padding: 1.25rem 1.5rem;
		border-radius: var(--radius);
		background: var(--teal-500);
		color: var(--cream);
	}

	.goal-label {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--amber-400);
		margin-bottom: 0.35rem;
	}

	.goal-text {
		margin: 0;
		font-family: var(--font-serif);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	.commitments :global(.card) {
		background: var(--teal-600);
		border-color: rgb(227 168 87 / 30%);
		color: var(--cream);
		box-shadow: none;
	}

	.commitments :global(.badge) {
		background: var(--amber-400);
		color: var(--teal-700);
	}
</style>
