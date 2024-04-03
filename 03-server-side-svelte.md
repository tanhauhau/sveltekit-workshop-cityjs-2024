# Server-side Svelte

- Your server may be:
  - Node.js server
  - Cloudflare workers
  - Deno server
  - Netlify / Vercel functions

## Server only

- Restrict to server only:
  - `+page.server.ts`
  - `+layout.server.ts`
  - `*.server.ts`
  - `$lib/server/secret.ts`
- Server only modules can only be imported by other server-only modules
- Server only `load()` return value must be serialisable

## Environment Variable

- `$env` module
  - private / public
    - public must be prefixed with `PUBLIC_`
    - private can only imported from server only module
  - static / dynamic
    - static
      - available only at build time
      - statically replaced in code
      - provided in `.env` / `.env.local` files at the project root
    - dynamic
      - available during runtime
      - provided by the platform it is running on
  - import
    - `$env/static/public`
      - `import { PUBLIC_XXX } from '$env/static/public';`
    - `$env/static/private`
      - `import { XXX } from '$env/static/private';`
    - `$env/dynamic/public`
      - `import { env } from '$env/dynamic/public';`
    - `$env/dynamic/private`
      - `import { env } from '$env/dynamic/private';`

## Cookies
- In server-only load functions
- Methods
  - `cookies.get(name, opts)`
  - `cookies.set(name, value, opts)`
  - `cookies.delete(name, opts)`
  - `cookies.serialize(name, value, opts)`
- always want to set `{path:'/'}` options, default is based on current path
- `httpOnly`, `secure` value defaults to `true`

## Headers

- `setHeaders()` method
  - cache control
  - custom headers
  - CORS

## Server Fetch
- `fetch()` method
  - inherits `cookie` and `authorization` headers from page request
  - make relative requests on the server

## API Endpoints
- `+server.ts`
- export named functions
  - GET
  - POST
  - PATCH
  - PUT
  - DELETE

### Content negotiation
- `PUT`/`PATCH`/`DELETE` always handled by `+server.ts`
- `GET`/`POST` requests are page request if the `accept` header has `text/html` as priority

## Hooks
- app wide functions that can be used to modify the behavior of the app
- Server hooks
  - `src/hooks.server.ts`
  - `handle()`
    - hook into server requests
    - `({ event, resolve }) => resolve(event)`
    - static asset do not go through `handle()`
    - useful for handling auth
    - `sequence()` helper function to pipe handlers
    - eg:
      ```ts
      return resolve(event, {
        transformPageChunk: ({ html, done }) => html.replace('old', 'new'),
        filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
        preload: ({ type, path }) => type === 'js' || path.includes('important'),
      });
      ```
    - eg: set `event.locals.user`
  - `handleFetch()`
    - modify server `fetch()` in `load()`
    - `({ fetch, request }) => fetch(request)`
  - `handleError()`
    - called if an unexpected error is thrown during `load()` or server-side rendering
    - `({ error, event }) => ({ message })`
- Client hooks
  - `src/hooks.client.ts`

## Exercise

Add a new login page `/login`
- takes in email and password
- set locals.username based on email address