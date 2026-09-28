# Muhammad Aditya — Personal Portfolio

A responsive, single-page personal portfolio for **Muhammad Aditya Wiryawan Azizi Aswad**, positioned around **Backend Development, Data, and Operations Engineering**.

The website is intentionally lightweight: it uses **HTML, CSS, and vanilla JavaScript only**, so it can be hosted easily on GitHub Pages, Netlify, or any static web host.

> **Current featured real-world project:** Balantang Jaya Global — Company Profile Website  
> Live site: https://balantangjaya.com/

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Design Direction](#design-direction)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [How the Website Works](#how-the-website-works)
7. [HTML Structure](#html-structure)
8. [CSS Architecture](#css-architecture)
9. [JavaScript Behavior](#javascript-behavior)
10. [Responsive Design](#responsive-design)
11. [Featured Project Integration](#featured-project-integration)
12. [How to Run Locally](#how-to-run-locally)
13. [How to Edit the Portfolio](#how-to-edit-the-portfolio)
14. [Git Workflow](#git-workflow)
15. [Deploying with GitHub Pages](#deploying-with-github-pages)
16. [Connecting a Custom Domain](#connecting-a-custom-domain)
17. [Updating the Live Website](#updating-the-live-website)
18. [Troubleshooting](#troubleshooting)
19. [Recommended Next Improvements](#recommended-next-improvements)
20. [Content Accuracy Notes](#content-accuracy-notes)

---

## Project Overview

The goal of this portfolio is to create a clean professional website that communicates three parts of my profile:

- **Software / backend development**
- **Data and reporting**
- **Real-world operations experience**

Instead of presenting the portfolio as a generic developer template, the content connects technical skills with professional experience in procurement, inventory, operational excellence, production reporting, SAP, and industrial/mining operations.

The current portfolio contains five main sections:

```text
Home
│
├── About
├── Experience
├── Selected Work
├── Skills
└── Contact
```

The website uses a minimal editorial layout with large typography, whitespace, thin separators, restrained colors, and project-focused content.

---

## Design Direction

The redesign was inspired by the visual direction of modern minimalist developer portfolios such as **herlano.dev**.

The goal was not to copy the source website line-for-line. Instead, the portfolio adopts similar high-level design principles:

- Large editorial typography
- Strong visual hierarchy
- Minimal use of cards
- Generous whitespace
- Neutral background
- One restrained accent color
- Project-first presentation
- Simple navigation
- Subtle animation
- Mobile-friendly layout

The portfolio uses the following CSS color variables:

```css
:root {
  --bg: #f5f4ef;
  --ink: #11120f;
  --muted: #686b63;
  --line: #d9d9d1;
  --card: #eeeee8;
  --accent: #174b35;
  --white: #fff;
  --max: 1180px;
}
```

Using CSS variables makes it easy to change the entire visual identity later.

For example, changing:

```css
--accent: #174b35;
```

changes the main green accent throughout the website.

---

## Features

### Current features

- Responsive single-page layout
- Sticky navigation bar
- Desktop and mobile navigation
- Hero section with profile image
- About/profile section
- Professional experience timeline
- Selected projects
- External live-project links
- Skills/technology section
- Contact section
- Smooth scrolling
- Scroll reveal animation
- Responsive typography
- Mobile navigation menu
- SEO description meta tag
- External Google Fonts
- No JavaScript framework required

### Performance philosophy

The portfolio intentionally avoids large frameworks for the current version.

There is no:

```text
React
Next.js
Vue
Angular
Bootstrap
Tailwind
jQuery
```

The website can therefore be served directly as static files.

---

## Technology Stack

### Frontend

```text
HTML5
CSS3
Vanilla JavaScript
```

### Fonts

The site loads:

- DM Sans
- Space Grotesk

from Google Fonts.

### Hosting

The website can be deployed using:

```text
GitHub Pages
Netlify
Cloudflare Pages
Vercel
Traditional web hosting
```

GitHub Pages is a good fit for the current version because the website contains only static assets.

---

## Project Structure

The project is deliberately simple:

```text
aditya-portfolio/
│
├── index.html
│
├── README.md
│
└── assets/
    └── profile.jpg
```

### `index.html`

Contains the entire application:

- HTML structure
- CSS styles
- JavaScript interactions

This was kept in one file to make the first version easy to deploy and maintain.

### `assets/profile.jpg`

Profile image displayed in the hero section.

### `README.md`

Technical and deployment documentation for the repository.

---

# How the Website Works

When a visitor opens the website, the browser loads:

```text
index.html
```

The page then loads the external fonts and local profile image.

Conceptually:

```text
Browser
   │
   ▼
index.html
   │
   ├── HTML → content and structure
   │
   ├── CSS → layout and visual design
   │
   ├── JavaScript → interactions/animation
   │
   └── assets/profile.jpg → profile photograph
   │
   ▼
Rendered Portfolio
```

Because everything is static, no application server or database is required.

---

# HTML Structure

The document begins with:

```html
<!doctype html>
<html lang="en">
```

The `<head>` contains metadata, the page title, fonts, and CSS.

Example:

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<meta
  name="description"
  content="Muhammad Aditya Wiryawan Azizi Aswad — Backend Developer, Data & Operations Engineering"
>

<title>Aditya — Backend Developer & Data</title>
```

The viewport declaration is important for responsive behavior on phones and tablets.

---

## Navigation

The navigation contains the personal brand and anchor links:

```html
<a class="brand" href="#home">Aditya<span>.</span></a>
```

The navigation links point to section IDs:

```html
<a href="#about">About</a>
<a href="#work">Experience</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
```

For example:

```html
<a href="#projects">Projects</a>
```

scrolls to:

```html
<section id="projects">
```

This is why the portfolio does not require separate HTML pages for each section.

---

# Hero Section

The hero introduces the professional positioning.

Current eyebrow text:

```html
<div class="eyebrow">
  Backend Developer · Data · Operations
</div>
```

Main headline:

```html
<h1>
  I build digital systems for
  <em>real-world problems.</em>
</h1>
```

The `<em>` element is styled with the accent color rather than traditional italic styling.

The hero contains two primary actions:

```html
<a class="btn primary" href="#projects">
  View selected work ↗
</a>

<a class="btn" href="mailto:aditmawaa@gmail.com">
  Get in touch
</a>
```

The profile image is loaded from:

```html
<img
  src="assets/profile.jpg"
  alt="Muhammad Aditya Wiryawan Azizi Aswad"
>
```

If the image is replaced, the new file can keep the same filename to avoid changing the HTML.

---

# About Section

The About section communicates the connection between technology and operational experience.

The layout is divided into:

```text
Introduction
        +
Professional facts
```

The fact blocks currently show:

```text
5+   Years professional experience
B.IT Brawijaya University
SAP  ECC / S4HANA exposure
Data Excel · Power BI · SQL
```

These blocks are generated directly in HTML rather than dynamically.

---

# Experience Section

Each role uses the `.work-row` structure.

Example:

```html
<div class="work-row">

  <time>2022 — 2024</time>

  <div>
    <h3>Coordinator Operational Excellence</h3>

    <div class="company">
      PT Vale Indonesia Tbk.
    </div>

    <p>
      Supported operational improvement, KPI monitoring,
      data analysis, standardized processes,
      and SAP-based reporting.
    </p>
  </div>

  <div class="type">
    Process · Analytics
  </div>

</div>
```

The desktop layout uses three columns:

```text
Date | Position / Company / Description | Category
```

On smaller screens, CSS collapses the layout.

---

# Projects Section

Projects use a repeatable structure:

```html
<article class="project">

  <div class="num">
    01
  </div>

  <div>
    <h3>Project Name</h3>
    <p>Project description...</p>
  </div>

  <div class="project-link">
    Project link / status
  </div>

</article>
```

This means adding another project does not require new CSS.

Simply duplicate an existing `<article class="project">` block and update its content.

---

# Featured Project Integration

## Balantang Jaya Global — Company Profile Website

The most recent real-world project is placed first in **Selected Work**.

Current implementation:

```html
<article class="project reveal">

  <div class="num">01</div>

  <div>
    <h3>
      Balantang Jaya Global — Company Profile Website
    </h3>

    <p>
      Designed and built a company profile website for
      Balantang Jaya Global, a drilling & construction company.
      The site presents company information, services,
      project experience, equipment fleet, HSE approach,
      gallery, and contact information in a responsive
      web experience.
    </p>
  </div>

  <div class="project-link">

    <a
      href="https://balantangjaya.com/"
      target="_blank"
      rel="noreferrer"
    >
      Visit live site ↗
    </a>

    <span>
      Company Website · 2026
    </span>

  </div>

</article>
```

### Why `target="_blank"`?

It opens the external company website in a new browser tab.

### Why `rel="noreferrer"`?

It provides safer behavior when opening an external page in a new tab and avoids sending referrer information.

---

# Planned Portfolio Case Studies

The current portfolio also includes concepts for:

### Spare Part Inventory API

A planned backend case study around:

```text
Spare Parts
Inventory
Stock Movements
Suppliers
Purchase Requests
Reorder Thresholds
Operational Reporting
```

### Procurement Analytics Platform

A planned data/operations project covering:

```text
Purchase Orders
Supplier Performance
Spending
Lead Time
Procurement Trends
```

### Spare Part Demand Forecasting

A planned machine-learning project using historical spare-part consumption to support inventory planning.

These are intentionally described as concepts/case studies until their implementations are complete.

---

# CSS Architecture

All CSS currently lives inside:

```html
<style>
...
</style>
```

inside `index.html`.

This makes deployment simple because there is no build process.

---

## Global variables

The `:root` selector stores reusable design tokens:

```css
:root {
  --bg: #f5f4ef;
  --ink: #11120f;
  --muted: #686b63;
  --line: #d9d9d1;
  --card: #eeeee8;
  --accent: #174b35;
  --white: #fff;
  --max: 1180px;
}
```

Instead of repeatedly writing:

```css
color: #174b35;
```

the code uses:

```css
color: var(--accent);
```

This makes future redesigns much easier.

---

## Main wrapper

```css
.wrap {
  width: min(var(--max), 90%);
  margin: auto;
}
```

The container can never exceed `1180px`, but on smaller screens it occupies approximately 90% of the viewport.

---

## Sticky navigation

```css
nav {
  position: sticky;
  top: 0;
  z-index: 20;
}
```

`position: sticky` keeps the navigation at the top while scrolling.

The translucent background and blur use:

```css
background: rgba(245,244,239,.9);
backdrop-filter: blur(14px);
```

---

## Hero grid

Desktop layout:

```css
.hero {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
}
```

This allocates more space to the text than the portrait.

The headline uses responsive sizing:

```css
font: 700 clamp(54px,8vw,104px)/.94 "Space Grotesk";
```

`clamp()` allows the font to grow with the viewport while maintaining minimum and maximum sizes.

---

## Project layout

Each project uses:

```css
.project {
  display: grid;
  grid-template-columns: 100px 1fr 190px;
}
```

The columns represent:

```text
Number | Project content | Link/status
```

---

# JavaScript Behavior

The JavaScript is intentionally small.

Current script:

```javascript
const nav = document.getElementById('nav');

const io = new IntersectionObserver(
  es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
    }
  }),
  { threshold: .08 }
);

document
  .querySelectorAll('.reveal')
  .forEach(e => io.observe(e));

document
  .querySelectorAll('.links a')
  .forEach(a =>
    a.addEventListener('click', () =>
      nav.classList.remove('navopen')
    )
  );
```

There is also a mobile menu button:

```html
<button
  class="menu"
  aria-label="Open menu"
  onclick="nav.classList.toggle('navopen')"
>
  ☰
</button>
```

---

## Scroll reveal animation

Elements that should animate receive:

```html
class="reveal"
```

Their initial state is:

```css
.reveal {
  opacity: 0;
  transform: translateY(18px);
}
```

When JavaScript detects that the element has entered the viewport, it adds:

```text
show
```

The final state is:

```css
.reveal.show {
  opacity: 1;
  transform: none;
}
```

So the logic is:

```text
Element below viewport
        ↓
IntersectionObserver watches it
        ↓
Element enters viewport
        ↓
JavaScript adds .show
        ↓
CSS transition runs
        ↓
Element fades/slides into view
```

---

# Responsive Design

Two primary breakpoints are currently used.

## Tablet / small laptop

```css
@media(max-width:850px)
```

At this width:

- Hero becomes one column
- Portrait moves above text
- About becomes one column
- CTA becomes one column
- Desktop navigation links are hidden
- Mobile menu button appears
- Experience and project grids become simpler

---

## Mobile

```css
@media(max-width:560px)
```

At this width:

- Hero headline becomes smaller
- Fact grid becomes one column
- Skills become one column
- Experience becomes one column
- Projects become one column
- Footer stacks vertically

This keeps the site readable without maintaining a separate mobile website.

---

# How to Run Locally

Because this is a static website, there are several options.

## Option 1 — Open directly

Double-click:

```text
index.html
```

Your default browser will open it.

This is enough for most visual edits.

---

## Option 2 — VS Code Live Server

Open the folder in VS Code.

Install the **Live Server** extension.

Then right-click:

```text
index.html
```

and choose:

```text
Open with Live Server
```

A local address similar to this will open:

```text
http://127.0.0.1:5500/
```

When you save the HTML file, the browser can refresh automatically.

---

## Option 3 — Python local server

If Python is installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# How to Edit the Portfolio

## Change the hero headline

Find:

```html
<h1>
  I build digital systems for
  <em>real-world problems.</em>
</h1>
```

Change the text and save.

---

## Change the introduction

Find the hero `<p>` directly below the `<h1>`.

---

## Change profile photo

Replace:

```text
assets/profile.jpg
```

with a new image using the same filename.

Recommended:

```text
Portrait orientation
Approximately 4:5 ratio
Compressed JPG/WebP
```

If the filename changes, update:

```html
src="assets/profile.jpg"
```

---

## Add a new project

Copy:

```html
<article class="project reveal">
...
</article>
```

Paste it underneath the previous project and update:

- Project number
- Project name
- Description
- Link
- Year/type

Example:

```html
<article class="project reveal">

  <div class="num">05</div>

  <div>
    <h3>My New Project</h3>

    <p>
      Short explanation of the problem,
      solution, and contribution.
    </p>
  </div>

  <div class="project-link">

    <a
      href="https://example.com"
      target="_blank"
      rel="noreferrer"
    >
      Visit project ↗
    </a>

    <span>
      Backend · 2026
    </span>

  </div>

</article>
```

---

## Change email

Search for:

```text
aditmawaa@gmail.com
```

Update both the visible text and:

```html
href="mailto:..."
```

---

## Change LinkedIn

Search for:

```text
https://linkedin.com/in/aditmawaa
```

Replace it with the new profile address if necessary.

---

## Change GitHub

The current source contains a placeholder:

```html
href="https://github.com/"
```

Replace it with the actual GitHub profile, for example:

```html
href="https://github.com/YOUR_USERNAME"
```

---

# Git Workflow

Once the project is connected to GitHub, a normal update flow is:

```bash
git status
git add .
git commit -m "Update portfolio content"
git push origin main
```

### What each command does

`git status`

Shows modified/untracked files.

`git add .`

Stages all current changes.

`git commit`

Creates a local version/history entry.

`git push`

Uploads the commit to GitHub.

A more descriptive commit is better than:

```bash
git commit -m "update"
```

Examples:

```bash
git commit -m "Add Balantang Jaya project"
```

```bash
git commit -m "Redesign portfolio project section"
```

```bash
git commit -m "Update professional experience"
```

---

# Deploying with GitHub Pages

## 1. Create or open the portfolio repository

The repository should contain:

```text
index.html
README.md
assets/
```

Make sure `index.html` is at the publishing root.

---

## 2. Push the files

If starting locally:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Replace:

```text
YOUR_REPOSITORY_URL
```

with the repository URL from GitHub.

---

## 3. Enable GitHub Pages

In the repository:

```text
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Deploy from a branch
```

Choose:

```text
Branch: main
Folder: / (root)
```

Save the settings.

GitHub will then publish the static site.

---

# Connecting a Custom Domain

A custom domain can be connected after GitHub Pages is working.

Typical flow:

```text
Domain Registrar
       │
       ▼
DNS records
       │
       ▼
GitHub Pages
       │
       ▼
Custom Domain
```

In GitHub:

```text
Repository
→ Settings
→ Pages
→ Custom domain
```

Enter the domain or subdomain you want to use.

The exact DNS records depend on whether you are using:

```text
example.com
```

or:

```text
www.example.com
```

Follow GitHub's current Pages custom-domain documentation and the DNS controls provided by your registrar.

Do not remove the working GitHub Pages address until the custom domain is verified and DNS propagation is complete.

---

# Updating the Live Website

Once GitHub Pages is connected to the `main` branch:

```text
Edit locally
    ↓
Save
    ↓
git add .
    ↓
git commit
    ↓
git push
    ↓
GitHub Pages rebuilds
    ↓
Live site updates
```

Changes may not appear instantaneously.

If GitHub shows the new source but the browser still displays the old version:

### Hard refresh

Windows:

```text
Ctrl + Shift + R
```

or:

```text
Ctrl + F5
```

You can also test in a private/incognito browser window.

---

# Troubleshooting

## I edited `index.html`, but the live site did not change

Check:

1. Was the file saved?
2. Was the change committed?
3. Was the commit pushed to GitHub?
4. Is GitHub Pages deploying from the correct branch?
5. Is Pages deploying from `/ (root)`?
6. Has the deployment completed?
7. Is the browser showing a cached version?

Try:

```text
Ctrl + Shift + R
```

---

## Profile image is broken

Check that this file exists:

```text
assets/profile.jpg
```

Remember that GitHub/Linux hosting is case-sensitive.

These can be treated as different filenames:

```text
profile.jpg
Profile.jpg
PROFILE.JPG
```

---

## Navigation link does not work

If a link says:

```html
<a href="#projects">
```

the page needs an element with:

```html
id="projects"
```

---

## External link does not work

Verify that the anchor contains a complete URL:

```html
href="https://example.com/"
```

not:

```html
href="example.com"
```

---

## Mobile menu does not open

Check that:

```html
<nav id="nav">
```

still exists.

The JavaScript uses:

```javascript
document.getElementById('nav')
```

to access that element.

---

## Scroll animations stopped working

Check that animated elements still use:

```html
class="reveal"
```

and that the JavaScript at the bottom of `index.html` has not been removed.

---

# Recommended Next Improvements

The current portfolio is intentionally simple. Future versions can separate the code into:

```text
aditya-portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── projects/
│   └── balantang-jaya.html
│
└── README.md
```

Recommended improvements:

### 1. Balantang Jaya case-study page

Create a dedicated page explaining:

```text
Overview
Challenge
Role
Design/process
Implementation
Responsive approach
Result
Screenshots
Live website
```

### 2. Open Graph metadata

Add social preview metadata so sharing the portfolio on WhatsApp, LinkedIn, and other platforms produces a professional preview.

### 3. Favicon

Add a personal favicon/logo.

### 4. Real GitHub project links

Once backend projects are implemented, replace project concept labels with links to their repositories and documentation.

### 5. Split CSS and JavaScript

As the site grows, move CSS and JS into separate files for maintainability.

### 6. Project screenshots

Add optimized screenshots for real projects while keeping page performance reasonable.

### 7. Accessibility review

Improve keyboard navigation, focus states, semantic structure, and contrast where needed.

### 8. SEO improvements

Add structured metadata and more specific page descriptions.

### 9. Analytics

Optionally add privacy-conscious traffic analytics to understand portfolio visits.

---

# Content Accuracy Notes

The portfolio combines verified professional experience with planned technical portfolio work.

The Balantang Jaya Global company profile website is presented as a completed/live project.

The following are currently presented as **concepts/case studies**, not falsely as completed production applications:

- Spare Part Inventory API
- Procurement Analytics Platform
- Spare Part Demand Forecasting

As these projects are actually implemented, their descriptions should be updated with:

```text
Repository
Technology stack
Architecture
Screenshots
API documentation
Tests
Deployment
Live demo
```

Likewise, only list technologies under **Skills** that you are comfortable discussing during an interview.

---

# Development Philosophy

The portfolio is intended to communicate a progression from real operational experience toward software engineering:

```text
Real Operational Problem
          ↓
Understand the Process
          ↓
Structure the Data
          ↓
Design the System
          ↓
Build the Application
          ↓
Measure the Result
          ↓
Improve the Workflow
```

This reflects the broader professional positioning of:

> **Backend Developer · Data · Operations**

---

## Author

**Muhammad Aditya Wiryawan Azizi Aswad**

Portfolio focus:

```text
Backend Development
Data & Analytics
Operations Engineering
Procurement / Inventory Systems
```

LinkedIn: https://linkedin.com/in/aditmawaa  
Email: aditmawaa@gmail.com

---

## License / Usage

This repository is a personal portfolio. The source may be adapted for personal development and learning, but personal information, photographs, company/project branding, and project-specific content should not be reused as another person's identity or work.
