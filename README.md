# Mawaa — Full Stack Portfolio

This is the production-ready static version of the Mawaa portfolio, structured similarly to the `balantang-jaya-global` repository:

```text
mawaa-portfolio/
├── index.html
├── .htaccess
├── CNAME.example
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── aditya-logo.png
    ├── profile.jpg
    └── Muhammad_Aditya_CV.pdf
```

## GitHub Pages

Push the files to the portfolio repository:

```bash
git add .
git commit -m "Organize portfolio for GitHub Pages and Rumahweb"
git push origin main
```

## Rumahweb / cPanel

For normal Rumahweb shared hosting:

1. Open **File Manager**.
2. Open the website document root, normally `public_html/`.
3. Upload the **contents** of this project into `public_html/`.
4. `index.html` must be directly inside `public_html/`.

Target:

```text
public_html/
├── index.html
├── .htaccess
├── css/
├── js/
└── assets/
```

5. Point your domain/DNS to the Rumahweb hosting account.
6. Enable SSL/HTTPS in Rumahweb/cPanel.

### Important

`CNAME.example` is only a template. It is **not** required for normal Rumahweb hosting.

If you use GitHub Pages with a custom domain, rename it to `CNAME` and put only your real domain inside it.

## Updating

- HTML/content: `index.html`
- Styling: `css/style.css`
- JavaScript/interactions: `js/main.js`
- Profile photo: `assets/profile.jpg`
- Logo: `assets/aditya-logo.png`
- CV: `assets/Muhammad_Aditya_CV.pdf`

The portfolio keeps the `mawaa.` navbar brand, teal dot, logo, Full Stack skills, Download CV, and WhatsApp contact behavior.

The existing profile photo is kept unchanged.


## Custom domain: aditmawaa.site

The active GitHub Pages custom-domain file is:

```text
CNAME
```

with:

```text
aditmawaa.site
```

If using GitHub Pages, add the custom domain in:

```text
GitHub repository
→ Settings
→ Pages
→ Custom domain
→ aditmawaa.site
```

For Rumahweb DNS, point the domain to GitHub Pages using the DNS records recommended by GitHub/Rumahweb. Rumahweb's current guide documents the four GitHub Pages A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

and a `www` CNAME pointing to your GitHub Pages hostname.

If you instead use Rumahweb shared hosting to serve the files directly, do not point the domain at GitHub Pages; upload the website to `public_html` and keep the DNS pointing to the Rumahweb hosting server.
