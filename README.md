# Secret Web Projects

A tiny collection of static sites for special moments. Everything is lightweight, local first, and deployable with simple hosting.

## Local Preview

From the repo root, pick a project folder and run one of the following:

```sh
cd projects/2026_02_11_valentines
python3 -m http.server 8000
```

Or:

```sh
cd projects/2026_02_11_valentines
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deploy With GitHub Pages

You can use either a `docs` folder strategy or a `gh-pages` branch strategy.

### Option A: docs folder

1. Create a `docs/` folder at the repo root.
2. Copy your chosen project into `docs/` so it contains `docs/index.html`, `docs/styles.css`, and `docs/script.js`.
3. Commit and push to GitHub.
4. In the GitHub repo settings, set Pages source to `main` branch and `/docs` folder.
5. Your site will appear at `https://<username>.github.io/<repo>` after the build completes.

### Option B: gh pages branch

1. Copy your chosen project into a temporary folder.
2. Create a `gh-pages` branch.
3. Put the project files at the root of that branch.
4. Push the `gh-pages` branch to GitHub.
5. In the GitHub repo settings, set Pages source to `gh-pages` branch.

## Deploy With Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project from that repo.
3. Set build command to empty and output folder to the chosen project folder, for example `projects/2026_02_11_valentines`.
4. Deploy. Cloudflare will give you a shareable URL.

## Custom Domain Later

Both GitHub Pages and Cloudflare Pages allow custom domains. You will need to own a domain from a registrar and add DNS records as instructed by the host.

## Project List

- `projects/2026_02_11_valentines`

## Tools

- `tools/new_project.js` scaffolds a new project from the template.
