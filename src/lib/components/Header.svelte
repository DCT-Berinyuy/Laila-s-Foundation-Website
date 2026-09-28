<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import logo from '$lib/assets/logo-badge.webp';
	import { nav, site } from '$lib/data/site';
	import Icon from './Icon.svelte';

	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});

	function isCurrent(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) open = false;
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/" aria-label="{site.name} — home">
			<img src={logo} alt="" width="48" height="48" />
			<span class="brand-text">
				<span class="brand-name">{site.name}</span>
				<span class="brand-motto">{site.motto}</span>
			</span>
		</a>

		<button
			class="menu-toggle"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<Icon name={open ? 'close' : 'menu'} size={26} />
			<span class="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
		</button>

		<nav id="site-nav" class="nav" class:open aria-label="Main">
			<ul>
				{#each nav as item (item.href)}
					<li>
						<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<a class="btn btn--primary nav-cta" href="/get-involved#support">Support Us</a>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--teal-500);
		color: var(--cream);
		border-bottom: 1px solid rgb(227 168 87 / 35%);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: var(--header-h);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--cream);
		text-decoration: none;
	}

	.brand img {
		width: 48px;
		height: 48px;
		flex-shrink: 0;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.15;
	}

	.brand-name {
		font-family: var(--font-serif);
		font-size: 1.2rem;
		font-weight: 700;
	}

	.brand-motto {
		font-size: 0.8rem;
		color: var(--amber-400);
		letter-spacing: 0.02em;
	}

	.menu-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.875rem;
		height: 2.875rem;
		border: 1px solid rgb(250 243 233 / 35%);
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--cream);
		cursor: pointer;
	}

	.nav {
		display: none;
	}

	.nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav a:not(.btn) {
		display: block;
		color: var(--cream);
		text-decoration: none;
		font-weight: 500;
		padding: 0.75rem 0;
	}

	.nav a:not(.btn):hover {
		color: var(--amber-400);
	}

	.nav a[aria-current='page'] {
		color: var(--amber-400);
	}

	.nav.open {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: absolute;
		inset: var(--header-h) 0 auto;
		padding: 0.5rem var(--gutter) 1.5rem;
		background: var(--teal-500);
		border-bottom: 1px solid rgb(227 168 87 / 35%);
		box-shadow: var(--shadow);
	}

	.nav.open li + li {
		border-top: 1px solid rgb(250 243 233 / 12%);
	}

	.nav-cta {
		align-self: flex-start;
	}

	@media (min-width: 60rem) {
		.menu-toggle {
			display: none;
		}

		.nav,
		.nav.open {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.75rem;
			position: static;
			padding: 0;
			box-shadow: none;
			border: 0;
			background: none;
		}

		.nav ul {
			display: flex;
			gap: 1.5rem;
		}

		.nav.open li + li {
			border: 0;
		}

		.nav a:not(.btn) {
			padding: 0.5rem 0;
			position: relative;
		}

		.nav a[aria-current='page']::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0.1rem;
			height: 2px;
			background: var(--amber-400);
		}
	}

	@media (max-width: 24rem) {
		.brand-motto {
			display: none;
		}
	}
</style>
