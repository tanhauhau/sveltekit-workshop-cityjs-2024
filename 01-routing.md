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
  - data should be serialisable
- Server-side rendering (SSR) + Hydration
  - Universal loaders
  - Server only loaders

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

- Example:
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

- TODO: example
- parallel loading
  - when you navigate, SvelteKit calls all the `load()` functions concurrently
  - Calls all `load()` functions at the same time
  - This reduces waterfalls
  - Be careful not to reintroduce waterfalls.

## Exercise

TODO:


## Exercise

- Build album
  - what are the apis
  - where to get the apis

