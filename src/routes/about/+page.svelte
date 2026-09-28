<script lang="ts">
	import logo from '$lib/assets/logo-badge.webp';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import SupportBand from '$lib/components/SupportBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { site } from '$lib/data/site';
	import type { IconName } from '$lib/components/icons';

	const challenges: { title: string; icon: IconName; text: string }[] = [
		{
			title: 'Displacement',
			icon: 'home',
			text: 'The Anglophone crisis has displaced thousands of people in Buea and across the South West Region. Many internally displaced people (IDPs) live without shelter, food or legal protection.'
		},
		{
			title: 'Children out of school',
			icon: 'book',
			text: 'A lack of money has forced many children out of school, from primary right through to higher education, leaving young people without a path forward.'
		},
		{
			title: 'Widowed families',
			icon: 'heart',
			text: 'The crisis has taken the lives of many men. Their widows have lost their livelihoods and find it very hard to provide for their families.'
		},
		{
			title: 'Drug abuse among youth',
			icon: 'sprout',
			text: 'Since the crisis began, more of our young people have turned to drugs and struggle to pursue their dreams.'
		}
	];

	const values: { title: string; icon: IconName; text: string }[] = [
		{
			title: 'We Speak',
			icon: 'scale',
			text: 'We are a voice for the voiceless, advocating for human rights, justice and peace.'
		},
		{
			title: 'We Support',
			icon: 'hands',
			text: 'We bring relief to people in crisis: shelter, food, care and psychosocial support.'
		},
		{
			title: 'We Empower',
			icon: 'sprout',
			text: 'We invest in education and livelihoods so people can stand on their own again.'
		}
	];
</script>

<Seo
	title="About us"
	description="Laila's Foundation is a community-based non-profit in Buea restoring dignity and hope to people affected by the Anglophone crisis through education, humanitarian aid and legal advocacy."
/>

<PageHero eyebrow="About us" title="A voice for the voiceless, strength for the weak">
	<p>
		{site.name} is a community-based non-profit organization advocating for the less privileged in
		the conflict-affected South West Region of Cameroon.
	</p>
</PageHero>

<section class="section" aria-labelledby="who-title">
	<div class="container split">
		<div>
			<SectionHeading id="who-title" eyebrow="Who we are" title="Restoring dignity and hope" />
			<div class="prose">
				<p class="lead">
					Our mission is to restore dignity and hope through education, humanitarian aid and legal
					advocacy.
				</p>
				<p>
					We focus on the most vulnerable: internally displaced people, widows, orphans and
					out-of-school children. We also work with young people struggling with drug abuse, helping
					them recover and rebuild their lives.
				</p>
				<p>
					We are a non-profit organization committed to making sure human rights are respected and
					justice is served. Our work starts in Buea, but our goal is to reach hearts across the
					Anglophone regions affected by the conflict.
				</p>
			</div>
		</div>
		<figure class="mark">
			<img src={logo} alt="{site.name} logo: two hands holding a heart" width="512" height="512" loading="lazy" />
			<figcaption>{site.motto}</figcaption>
		</figure>
	</div>
</section>

<section class="section section--tint" aria-labelledby="challenge-title">
	<div class="container">
		<SectionHeading id="challenge-title" eyebrow="The challenge" title="Why our work matters">
			<p>
				There is a huge gap in grassroots support for the people hit hardest by the crisis. These are
				the needs we see every day.
			</p>
		</SectionHeading>
		<div class="grid grid--2">
			{#each challenges as item (item.title)}
				<IconCard icon={item.icon} title={item.title}>
					<p>{item.text}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section class="section" aria-labelledby="values-title">
	<div class="container">
		<SectionHeading id="values-title" eyebrow="What guides us" title="We speak. We support. We empower." align="center" />
		<div class="grid grid--3">
			{#each values as value (value.title)}
				<IconCard icon={value.icon} title={value.title}>
					<p>{value.text}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section class="section section--teal" aria-labelledby="founder-title">
	<div class="container split">
		<div>
			<SectionHeading id="founder-title" eyebrow="Leadership" title="Meet our founder" tone="dark" />
			<p class="founder-name">{site.founder}</p>
			<p class="founder-role">{site.founderTitle}, {site.name}</p>
			<p class="founder-text">
				{site.founder} founded {site.name} to give hope to the less privileged in Buea and to stand up
				for people whose rights are too often ignored.
			</p>
		</div>
		<dl class="facts">
			<div>
				<dt><Icon name="pin" size={20} /> Where we are</dt>
				<dd>{site.location.full}</dd>
			</div>
			<div>
				<dt><Icon name="users" size={20} /> Who we serve</dt>
				<dd>IDP families in Buea, Tole, Muea and Bokwaongo, plus widows, orphans, children and young people</dd>
			</div>
			<div>
				<dt><Icon name="mail" size={20} /> Get in touch</dt>
				<dd>
					<a href={site.contact.emailHref}>{site.contact.email}</a><br />
					<a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
				</dd>
			</div>
		</dl>
	</div>
</section>

<SupportBand />

<style>
	.split {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	@media (min-width: 52rem) {
		.split {
			grid-template-columns: 1.5fr 1fr;
		}
	}

	.mark {
		margin: 0;
		text-align: center;
	}

	.mark img {
		width: min(100%, 18rem);
		margin-inline: auto;
		border-radius: 50%;
		box-shadow:
			0 0 0 10px var(--cream-200),
			var(--shadow);
	}

	.mark figcaption {
		margin-top: 1.5rem;
		font-family: var(--font-serif);
		font-style: italic;
		font-size: 1.25rem;
		color: var(--teal-500);
	}

	.founder-name {
		font-family: var(--font-serif);
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		color: var(--cream);
		margin-bottom: 0.1em;
	}

	.founder-role {
		color: var(--amber-400);
		font-weight: 600;
		margin-bottom: 1.25rem;
	}

	.founder-text {
		max-width: 36rem;
		color: rgb(250 243 233 / 90%);
	}

	.facts {
		margin: 0;
		display: grid;
		gap: 1.25rem;
		padding: clamp(1.25rem, 3vw, 2rem);
		border: 1px solid rgb(227 168 87 / 40%);
		border-radius: var(--radius);
	}

	.facts dt {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		color: var(--amber-400);
		margin-bottom: 0.25rem;
	}

	.facts dd {
		margin: 0;
		color: var(--cream);
	}

	.facts a {
		color: var(--cream);
	}
</style>
