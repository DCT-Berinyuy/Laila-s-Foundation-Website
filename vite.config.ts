import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const DEFAULT_SITE_URL = 'http://localhost:4173';
const siteUrl = (process.env.SITE_URL ?? DEFAULT_SITE_URL).replace(/\/+$/, '');

if (process.env.npm_lifecycle_event === 'build' && !process.env.SITE_URL) {
	console.warn(
		`\n[laila] SITE_URL is not set — canonical and Open Graph URLs will use ${DEFAULT_SITE_URL}.\n` +
			'        Set it for production builds, e.g. SITE_URL=https://your-domain.org npm run build\n'
	);
}

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: '404.html', strict: true }),
			prerender: {
				// Used as page.url.origin while prerendering, so canonical/OG URLs are absolute.
				origin: siteUrl,
				entries: ['*', '/sitemap.xml', '/robots.txt']
			}
		})
	]
});
