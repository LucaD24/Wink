# Valentines for Tara

A playful one page Valentine experience with branching scenes, all driven by `content.json`.

## Update The Slideshow

1. Add your images to `assets/images/`.
2. Edit the `slideshow.slides` array in `content.json` to update filenames and captions.
3. Keep captions short so they sit nicely over the image.

## Update The Yes Scene Images

1. Put images in `assets/images/`.
2. Update `sceneC.images` in `content.json` with the new filenames and alt text.

## Adjust Timings And Text

- All visible copy lives in `content.json`.
- Slideshow timing lives in `slideshow.intervalMs` and `slideshow.transitionMs`.


## Easter egg

Type tara on the page and a small heart message appears with the text from `easterEgg.message` in `content.json`. To disable it, set `easterEgg.trigger` to an empty string or clear the message.

## Publish And Share

### GitHub Pages

1. Copy this project folder into a `docs/` folder at the repo root.
2. Push to GitHub.
3. In repo settings, set Pages source to `main` branch and `/docs` folder.
4. Share the resulting URL.

### Cloudflare Pages

1. Push this repo to GitHub.
2. Create a Cloudflare Pages project from the repo.
3. Set output folder to `projects/2026_02_11_valentines`.
4. Deploy and share the URL.
