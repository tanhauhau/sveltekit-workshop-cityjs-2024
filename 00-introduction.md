# Introduction

## Outline

1. Self Introduction
2. Svelte & SvelteKit (30mins)
3. Routing (1hr)
4. More Routing (1hr)
5. Server-side Svelte (1hr)
6. Forms (1hr)
7. Deployment & Adapters (30mins)

## Svelte & SvelteKit

- What SvelteKit is to Svelte:
  - Next.js is to React
  - Nuxt is to Vue
  - SolidStart is to Solid

- SvelteKit offers many features out of the box:
  - Different rendering modes:
    - client-side rendering, server-side Rendering, pre-rendering
  - Routing
    - Layouts
    - Loading data
    - Forms actions to update data
  - Deployment
- SvelteKit saves you time and hassle to set up a production-ready Svelte application
  - Batteries included:
    - TypeScript
    - Eslint
    - Prettier
    - Vitest
    - Playwright
- SvelteKit provides **flexibility** and **control**
  - From server rendered single-page application (SPA)
  - Or static multi-page application (MPA)
  - Or any mix in between
  - You can configure per page

## Svelte Recap

- Svelte syntax
- Reactive declaration
- Logic blocks
  - `{#if}`
  - `{#each}`
  - `{#await}` 
- Components
- Stores
- Actions
- Transitions

## Setting up SvelteKit

```sh
pnpm create svelte@latest
```

- Folder structure walkthrough
  - src/lib
  - src/routes
  - src/app.html
  - static/
  - .sveltekit/
  - config files

## Svelte Inspector

[Svelte inspector](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md) is a great way to inspect elements in the browser and jump straight to editor.

To enable it, add this to `svelte.config.ts`:

```js
// svelte.config.ts
export default {
  vitePlugin: {
    inspector: {}
  }
};
```

Hit `meta+shift` (mac) or `ctrl+shift` (others) in browser to turn on inspector mode.