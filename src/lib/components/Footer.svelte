<script lang="ts">
	import logo from '$lib/assets/logo-badge.webp';
	import { nav, site } from '$lib/data/site';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container cols">
		<div class="about">
			<div class="brand">
				<img src={logo} alt="" width="56" height="56" loading="lazy" />
				<div>
					<p class="name">{site.name}</p>
					<p class="motto">{site.motto}</p>
				</div>
			</div>
			<p class="blurb">
				A community-based non-profit empowering communities in Buea and across the South West Region of
				Cameroon.
			</p>
		</div>

		<nav aria-label="Footer">
			<h2 class="heading">Explore</h2>
			<ul>
				{#each nav as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div>
			<h2 class="heading">Contact</h2>
			<ul class="contact">
				<li>
					<Icon name="phone" size={18} />
					<a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
				</li>
				<li>
					<Icon name="mail" size={18} />
					<a href={site.contact.emailHref}>{site.contact.email}</a>
				</li>
				<li>
					<Icon name="pin" size={18} />
					<span>{site.location.full}</span>
				</li>
			</ul>
		</div>
	</div>

	<div class="container legal">
		<p>© {year} {site.name}. All rights reserved.</p>
		<p class="taglines">{site.taglines.join(' • ')}</p>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--teal-700);
		color: var(--cream);
		padding-top: clamp(3rem, 6vw, 4.5rem);
		font-size: 0.975rem;
	}

	.cols {
		display: grid;
		gap: 2.5rem;
	}

	@media (min-width: 48rem) {
		.cols {
			grid-template-columns: 1.5fr 1fr 1.5fr;
		}
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin-bottom: 1rem;
	}

	.brand p {
		margin: 0;
	}

	.name {
		font-family: var(--font-serif);
		font-size: 1.3rem;
		font-weight: 700;
	}

	.motto {
		color: var(--amber-400);
		font-style: italic;
	}

	.blurb {
		max-width: 22rem;
		color: rgb(250 243 233 / 85%);
	}

	.heading {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--amber-400);
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}

	a {
		color: var(--cream);
		text-decoration: none;
	}

	a:hover {
		color: var(--amber-400);
		text-decoration: underline;
	}

	.contact li {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
	}

	.contact :global(svg) {
		flex-shrink: 0;
		margin-top: 0.2rem;
		color: var(--amber-400);
	}

	.contact a {
		overflow-wrap: anywhere;
	}

	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
		margin-top: 3rem;
		padding-block: 1.5rem;
		border-top: 1px solid rgb(227 168 87 / 25%);
		font-size: 0.875rem;
		color: rgb(250 243 233 / 80%);
	}

	.legal p {
		margin: 0;
	}

	.taglines {
		color: var(--amber-400);
	}
</style>
