# Aditya Portfolio — V4 Live Project Preview

Personal portfolio for Muhammad Aditya Wiryawan Azizi Aswad.

## What changed in V4

- Added a prominent browser-style preview of the **actual Balantang Jaya Global website**.
- Added direct project visuals from `balantangjaya.com`.
- Changed project images from lazy loading to eager loading so the visuals appear immediately when the Projects section is reached.
- Added a live `<iframe>` preview with a direct-image fallback/link.
- Updated the Projects section to clearly identify Balantang Jaya as the most recent deployed project.
- Updated the GitHub contact link to `https://github.com/aditmawaa`.
- Kept the site framework-free: HTML + CSS + vanilla JavaScript.

## Important browser/security note

The browser preview embeds:

```html
<iframe src="https://balantangjaya.com/"></iframe>
```

A website can prevent iframe embedding with security headers such as `X-Frame-Options` or Content Security Policy.

If Balantang Jaya blocks iframe embedding, the project still includes direct image URLs and a visible **Open live website** fallback link.

For a completely self-contained GitHub Pages version, the next improvement is to store an actual screenshot captured from the live Balantang Jaya website inside:

```text
assets/projects/
```

and use that local screenshot as the browser mockup image. The screenshot should be captured from the real website, not AI-generated.

## Project structure

```text
aditya-portfolio/
├── index.html
├── README.md
└── assets/
    └── profile.jpg
```

## Run locally

Open `index.html` directly, or use VS Code Live Server.

Alternatively:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

```bash
git add .
git commit -m "Add live Balantang Jaya project preview"
git push origin main
```

After GitHub Pages deploys, hard-refresh the browser:

```text
Ctrl + Shift + R
```

## Featured project

**Balantang Jaya Global — Company Profile Website**

Live website:

https://balantangjaya.com/

The portfolio presents this as the latest completed/deployed project.

The following remain technical case studies until actually implemented:

- Spare Part Inventory API
- Procurement Analytics Platform
- Spare Part Demand Forecasting

## Contact

- Email: aditmawaa@gmail.com
- LinkedIn: https://linkedin.com/in/aditmawaa
- GitHub: https://github.com/aditmawaa

## Visual style update — dark editorial palette

The V4 visual system was adjusted to follow the darker, high-contrast direction of the referenced `herlano.dev` portfolio while keeping the layout and content original to Aditya. The palette uses a near-black canvas, off-white typography, muted gray supporting text, thin dark borders, and a restrained lime-green accent.

```css
:root {
  --bg: #0b0d0c;
  --ink: #f3f5ef;
  --muted: #9aa19b;
  --line: #292e2a;
  --card: #121614;
  --accent: #b7ff3c;
}
```

The accent is intentionally used for small highlights, links, section labels, and the primary CTA rather than filling the whole interface. This keeps the portfolio visually close to a minimalist developer/editorial aesthetic.


## CV Download

The portfolio includes the current CV as:

```text
assets/Muhammad_Aditya_CV.pdf
```

The hero/contact area links to the local PDF using:

```html
<a href="assets/Muhammad_Aditya_CV.pdf" download>
  Download CV
</a>
```

Because the CV is stored inside the repository, GitHub Pages serves it directly with the portfolio. The `download` attribute asks the browser to download the PDF rather than navigate to it.

When the CV is updated, replace the PDF in `assets/` using the same filename and commit/push the change:

```bash
git add assets/Muhammad_Aditya_CV.pdf
git commit -m "Update CV"
git push origin main
```

If you want visitors to open the CV in a browser instead of downloading it, remove the `download` attribute.
