# Routing

- File-based routing
  - +page
  - +layout
  - +error
  - +server

## +page

- +page.svelte
- +page.ts
  - loading data with `load()`
  - demo1
- Server-side rendering (SSR) + Hydration
  - Universal loaders
  - Server only loaders

## Navigating

- the `<a>` element
- [link options](https://kit.svelte.dev/docs/link-options)

## +layout & +error

- +layout.svelte
  - ```svelte
    <Layout> <!-- /+layout.svelte -->
     <Layout> <!-- /a/+layout.svelte -->
      <Layout> <!-- /a/b/+layout.svelte -->
       <Page /> <!-- /a/b/+page.svelte -->
      </Layout>
     </Layout>
    </Layout>
    ```

- +error.svelte
  - errors in load function
    - +layout > +error / +page
    - ```svelte
      <Layout>
        {#if error}
          <Error />
        {:else}
          <Page />
        {/if}
      </Layout>
      ```
  - page store
    - $page.status
    - $page.error
    - `error` from `@sveltejs/kit`

## Nesting and Grouping

- Nesting and Grouping
- Example (demo2):
```
src/routes/
  (admin)/
  - admin/
  - settings/
  - +layout.svelte
  (app)/
  - dashboard/
  - item/
  - +layout.svelte
  (website)/
  - about/
  - pricing/
  - +layout.svelte
```

- Parallel Loading (demo3)
  - when you navigate, SvelteKit calls all the `load()` functions concurrently
  - Calls all `load()` functions at the same time
  - This reduces waterfalls
  - Use `await parent()` to get parent data, however this will introduce waterfalls
  - Be careful not to reintroduce waterfalls unnecessarily.

## Exercise

- Build a photo album with 3 routes:
  - Home Page - `/`
    - Share 3 features:
      1. Memories at Your Fingertips
      2. Creative Expression
      3. Share the Love
  - About Page - `/about`
    - the technology behind the photo album: SvelteKit
  - Photos Page - `/photos`
    - load images from this api:
      - https://sveltekit-workshop-cityjs-2024-api.vercel.app/images
- The Home Page and About Page shares the same header and footer, 
  - header contains 2 links: home and photos
  - footer contains 1 link: about
