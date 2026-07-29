# Mind of Najah

Marketing website for Mind of Najah, a curriculum and education consultancy.

## Local development

1. Copy `.env.example` to `.env.local` and set `CONTACT_ENDPOINT` when inquiry delivery is available.
2. Run `pnpm install` and `pnpm dev`.
3. Open `http://localhost:3000`.

## Docker

```sh
docker build -t mind-of-najah .
docker run --rm -p 3000:3000 -e CONTACT_ENDPOINT=https://your-endpoint.example mind-of-najah
```

Without `CONTACT_ENDPOINT`, the form returns a safe development response locally and a configuration error in production.
