# Deployment & Adapters

## Page Options

- [Docs](https://kit.svelte.dev/docs/page-options)
- You can control via:
  - `+page.ts`
  - `+page.server.ts`
  - `+layout.ts`
  - `+layout.server.ts`
- [`prerender`](https://kit.svelte.dev/docs/page-options#prerender)
  - `export prerender = true;`
  - `export prerender = 'auto';`
- [`ssr`](https://kit.svelte.dev/docs/page-options#ssr)
- [`csr`](https://kit.svelte.dev/docs/page-options#csr)
- [`trailingSlash`](https://kit.svelte.dev/docs/page-options#trailingslash)
  - `never` (default), `always`, `ignore`

## Assets / Images
- if importing images directly, SvelteKit delegates that to vite
  - hash added for long-term caching

## Adapters
- plugins that take built app as input and generate output for deployment
- decouples authoring from deployment
- SvelteKit official adapters:
  - `@sveltejs/adapter-node` for deploying to a Node.js server
  - `@sveltejs/adapter-static` for prerendered pages and full client-side SPAs
  - `@sveltejs/adapter-netlify` for Netlify
  - `@sveltejs/adapter-vercel` for Vercel
  - `@sveltejs/adapter-cloudflare-workers` for Cloudflare Workers
  - `@sveltejs/adapter-cloudflare` for Cloudflare Pages
  - ...[community adapters](https://www.sveltesociety.dev/packages?category=sveltekit-adapters)

## Exercise
- Deploy
