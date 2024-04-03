# More Routing

## Route Parameters
- parameters
  - `params` in `load()`
  - `$page.params`
- basic
  - `/item/[id]/+page.svelte`
  - 1 path section
- rest parameters:
  - `/[org]/[repo]/tree/[branch]/[...file]`
  - 0-n number of path section
- optional parameters
  - `/[[lang]]/home`
  - 0-1 number of path section

## Breaking out of layouts
  - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+page.svelte`
  - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+page@[category_id].svelte`
    - skips:
      - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+layout.svelte`
      - `/(app)/dashboard/[category_id]/[dashboard_id]/+layout.svelte`
  - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+page@.svelte`
    - skips
      - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+layout.svelte`
      - `/(app)/dashboard/[category_id]/[dashboard_id]/+layout.svelte`
      - `/(app)/dashboard/[category_id]/+layout.svelte`
      - `/(app)/dashboard/+layout.svelte`
      - `/(app)/+layout.svelte`
    - uses only the `/+layout.svelte`
  - `/(app)/dashboard/[category_id]/[dashboard_id]/+layout@dashboard.svelte`
    - Skips `/(app)/dashboard/[category_id]/+layout.svelte`
    - uses:
      - `/+layout.svelte`
      - `/(app)/+layout.svelte`
      - `/(app)/dashboard/+layout.svelte`
      - `/(app)/dashboard/[category_id]/[dashboard_id]/+layout.svelte`
      - `/(app)/dashboard/[category_id]/[dashboard_id]/preview/+layout.svelte`

## Matchers
- To define matcher:
  - Create a file `src/params/number.ts`
  - Define `match` function `export function match(param: string): boolean`
- To use matcher:
  - `/item/[id=number]/+page.svelte`

## Route Priority

`/foo-bar` will match:
- `/src/routes/[...rest]/+page.svelte`
- `/src/routes/[[optional]]/+page.svelte`
- `/src/routes/[a]/+page.svelte`
- `/src/routes/[b=matcher_1]/+page.svelte`
- `/src/routes/[c=matcher_2]/+page.svelte`
- `/src/routes/foo-[suffix]/+page.svelte`
- `/src/routes/foo-bar/+page.svelte`

- More specifics routes have higher priority
- Parameters with matchers `[a=integer]` have higher priortiy than those without `[a]`
- `[[optional]]` and `[...rest]` parameters are ignored unless they are the final part of the route, in which case they are treated with lowest priority. In other words `x/[[y]]/z` is treated equivalently to `x/z` for the purposes of sorting
- ties are resolved alphabetically

## Shallow Routing
- Taking back control on routing
  - `pushState(url, state)` from `$app/navigation`;
    - updates URL
    - add history entry
  - `$page.state`
  - `preloadData(url)` to get data from `load()` function

## Exercise

TODO: