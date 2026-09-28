import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const DEFAULT_SITE_URL = 'http://localhost:4173';

// On Vercel, fall back to the deployment's own URL so previews work without extra config.
function vercelUrl(): string | undefined {
	const { VERCEL_ENV, VERCEL_PROJECT_PRODUCTION_URL, VERCEL_URL } = process.env;
	const host =
		VERCEL_ENV === 'production' ? (VERCEL_PROJECT_PRODUCTION_URL ?? VERCEL_URL) : VERCEL_URL;
	return host ? `https://${host}` : undefined;
}

const configuredUrl = process.env.SITE_URL || vercelUrl();
const siteUrl = (configuredUrl ?? DEFAULT_SITE_URL).replace(/\/+$/, '');

if (process.env.npm_lifecycle_event === 'build' && !configuredUrl) {
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
			// Explicit options keep output in build/ on every host (Vercel serves it via vercel.json),
			// so adapter-static's "Detected Vercel ... zero-config" warning there is expected.
			adapter: adapter({ fallback: '404.html', strict: true }),
			prerender: {
				// Used as page.url.origin while prerendering, so canonical/OG URLs are absolute.
				origin: siteUrl,
				entries: ['*', '/sitemap.xml', '/robots.txt']
			}
		})
	]
});
