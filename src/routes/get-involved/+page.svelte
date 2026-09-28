<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { site } from '$lib/data/site';
	import { objectives, beneficiaries } from '$lib/data/content';
	import type { IconName } from '$lib/components/icons';

	const ways: { title: string; icon: IconName; text: string; action: string }[] = [
		{
			title: 'Donate',
			icon: 'heart',
			text: 'Give money or materials such as school supplies, food, clothing or shelter items. Every contribution, big or small, transforms a life.',
			action: 'Call or email us to arrange your gift.'
		},
		{
			title: 'Partner with us',
			icon: 'hands',
			text: 'Organizations, businesses, churches and community groups can work with us to reach more families and grow our programs.',
			action: 'Email us to start a conversation.'
		},
		{
			title: 'Volunteer',
			icon: 'users',
			text: 'Join our volunteer network in Buea. Help distribute relief, support community campaigns or share your professional skills.',
			action: 'Call us to find out where you can help.'
		}
	];

	const emailSubject = encodeURIComponent("Supporting Laila's Foundation");
</script>

<Seo
	title="Get involved"
	description="Donate, partner or volunteer with Laila's Foundation to support displaced families, widows, orphans and vulnerable children in Buea, Cameroon."
/>

<PageHero eyebrow="Get involved" title="Be the hope. Save lives. Build a better Buea.">
	<p>
		We humbly appeal for funding, partnership and material support to give hope to the less
		privileged in Buea.
	</p>
</PageHero>

<section class="section" aria-labelledby="ways-title">
	<div class="container">
		<SectionHeading id="ways-title" eyebrow="How you can help" title="Three ways to make a difference" />
		<div class="grid grid--3">
			{#each ways as way (way.title)}
				<IconCard icon={way.icon} title={way.title}>
					<p>{way.text}</p>
					<p class="action">{way.action}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section id="support" class="section section--teal" aria-labelledby="support-title">
	<div class="container contact">
		<SectionHeading id="support-title" eyebrow="Contact us" title="Ready to help? Get in touch." tone="dark">
			<p>
				Reach our founder, {site.founder}, directly. We will gladly explain how your support will be
				used.
			</p>
		</SectionHeading>
		<div class="contact-cards">
			<a class="contact-card" href={site.contact.phoneHref}>
				<span class="contact-icon"><Icon name="phone" size={28} /></span>
				<span class="contact-label">Call us</span>
				<span class="contact-value">{site.contact.phoneDisplay}</span>
			</a>
			<a class="contact-card" href="{site.contact.emailHref}?subject={emailSubject}">
				<span class="contact-icon"><Icon name="mail" size={28} /></span>
				<span class="contact-label">Email us</span>
				<span class="contact-value">{site.contact.email}</span>
			</a>
			<div class="contact-card">
				<span class="contact-icon"><Icon name="pin" size={28} /></span>
				<span class="contact-label">Visit us</span>
				<span class="contact-value">{site.location.full}</span>
			</div>
		</div>
	</div>
</section>

<section class="section" aria-labelledby="who-title">
	<div class="container">
		<SectionHeading id="who-title" eyebrow="Who you help" title="The people your support reaches" />
		<div class="grid grid--4">
			{#each beneficiaries as item (item.title)}
				<IconCard icon={item.icon} title={item.title}>
					<p>{item.text}</p>
				</IconCard>
			{/each}
		</div>
	</div>
</section>

<section class="section section--tint" aria-labelledby="objectives-title">
	<div class="container">
		<SectionHeading id="objectives-title" eyebrow="Our objectives" title="What your support helps us do">
			<p>Every gift goes towards these commitments.</p>
		</SectionHeading>
		<ol class="objectives">
			{#each objectives as objective (objective)}
				<li>{objective}</li>
			{/each}
		</ol>
		<p class="more">
			<a class="btn btn--outline" href="/impact">See our goals and plan <Icon name="arrow" size={18} /></a>
		</p>
	</div>
</section>

<style>
	.action {
		margin-top: auto;
		padding-top: 0.75rem;
		font-weight: 600;
		color: var(--terracotta-600);
	}

	.contact-cards {
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 52rem) {
		.contact-cards {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.contact-card {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding: clamp(1.25rem, 3vw, 1.75rem);
		border-radius: var(--radius);
		background: var(--teal-600);
		border: 1px solid rgb(227 168 87 / 35%);
		color: var(--cream);
		text-decoration: none;
		transition: background-color 0.2s ease;
	}

	a.contact-card:hover {
		background: var(--teal-700);
		color: var(--cream);
	}

	.contact-icon {
		color: var(--amber-400);
		margin-bottom: 0.5rem;
	}

	.contact-label {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--amber-400);
	}

	.contact-value {
		font-size: 1.15rem;
		font-weight: 600;
		overflow-wrap: anywhere;
	}

	.objectives {
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: objective;
		display: grid;
		gap: 0.75rem;
	}

	@media (min-width: 48rem) {
		.objectives {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.objectives li {
		counter-increment: objective;
		display: flex;
		gap: 1rem;
		align-items: baseline;
		padding: 1rem 1.25rem;
		background: var(--white);
		border: 1px solid var(--cream-200);
		border-radius: var(--radius);
	}

	.objectives li::before {
		content: counter(objective, decimal-leading-zero);
		font-family: var(--font-serif);
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--terracotta-600);
	}

	.more {
		margin: 2rem 0 0;
	}
</style>
