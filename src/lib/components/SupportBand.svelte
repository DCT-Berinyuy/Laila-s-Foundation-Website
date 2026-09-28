<script lang="ts">
	import { site } from '$lib/data/site';
	import Icon from './Icon.svelte';

	type Props = {
		title?: string;
		text?: string;
	};

	let {
		title = 'Support us today',
		text = 'Every contribution, big or small, transforms a life. Call us or send an email to donate, partner with us or volunteer.'
	}: Props = $props();
</script>

<section class="support" aria-labelledby="support-band-title">
	<div class="container inner">
		<div>
			<h2 id="support-band-title">{title}</h2>
			<p>{text}</p>
		</div>
		<div class="btn-row">
			<a class="btn btn--light" href={site.contact.phoneHref}>
				<Icon name="phone" size={20} />
				{site.contact.phoneDisplay}
			</a>
			<a class="btn btn--light" href={site.contact.emailHref}>
				<Icon name="mail" size={20} />
				Email us
			</a>
		</div>
	</div>
</section>

<style>
	.support {
		background: var(--terracotta-500);
		color: var(--white);
		padding-block: clamp(2.5rem, 6vw, 3.5rem);
	}

	.inner {
		display: grid;
		gap: 1.5rem;
		align-items: center;
	}

	@media (min-width: 52rem) {
		.inner {
			grid-template-columns: 1fr auto;
			gap: 3rem;
		}
	}

	h2 {
		color: var(--white);
		margin-bottom: 0.35em;
	}

	p {
		margin: 0;
		max-width: 38rem;
		font-size: 1.1rem;
	}

	.support :global(.btn--light) {
		border-color: var(--white);
		color: var(--white);
	}

	.support :global(.btn--light:hover) {
		background: var(--white);
		color: var(--terracotta-700);
	}
</style>
