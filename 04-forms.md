# Forms

## Web Standards
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- `application/x-www-form-urlencoded`

## Form Actions
- `export const actions = {}`
- Form validation
  - `fail()` from `@sveltejs/kit`
  - `export let form`
    - only defined when form submission failed
- Named action
  - `throw redirect(303, '/')`
- `enhance` from `$app/forms`
- demo6

## Exercise
- For Photo detail page,
  - add upvote / downvote feature
    - https://sveltekit-workshop-cityjs-2024-api.vercel.app/image/3/downvote
    - https://sveltekit-workshop-cityjs-2024-api.vercel.app/image/3/upvote
  - add comment feature
    - https://sveltekit-workshop-cityjs-2024-api.vercel.app/image/3/comments
  - use `use:enhance`
  - all features work without JavaScript