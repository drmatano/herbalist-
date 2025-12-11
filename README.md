# Dr Matano — The Herbalist (Static Website Template)

This is a simple, responsive static website template for "Dr Matano — The Herbalist". It includes accessible and SEO-friendly markup, a small CSS framework, and lightweight JavaScript for progressive enhancement.

What's included
- index.html — Homepage with hero, services preview and blog highlights
- about.html, services.html, blog.html, contact.html — Content pages
- css/styles.css — Styles with responsive layout and variables
- js/main.js — Small enhancements (mobile nav, footer year)
- images/ — Placeholder image recommendations and a simple logo.svg
- site.webmanifest — Basic PWA manifest
- LICENSE (MIT)

Quick start (no build system required)
1. Clone or copy files to a folder.
2. Replace images in `images/` with your own hero, post images and logos.
3. Open `index.html` in a browser.

Optional: run a local static server
- Python 3:
  - python -m http.server 8000
  - open http://localhost:8000
- Node (serve):
  - npm install -g serve
  - serve .

Contact form
- The contact form in `contact.html` posts to Formspree by default. Replace `action="https://formspree.io/f/your-form-id"` with your own endpoint (Formspree, Netlify Forms, or a custom server).

Accessibility & SEO notes
- Uses semantic HTML elements and ARIA attributes for the nav toggle.
- Includes structured data (JSON-LD) in `index.html`.
- Add `lang` and accurate meta descriptions and Open Graph images for better sharing.

Deployment suggestions
- Deploy as a static site on GitHub Pages, Netlify, Vercel or your preferred host.
- For GitHub Pages: push to a repository and enable Pages in repo settings.
- For Netlify: drag-and-drop the folder or connect the repo for CI deploys.

Customization ideas
- Add a blog generator (11ty, Hugo, Jekyll) if you want templating and collections.
- Integrate an e-commerce or shop if you sell herbal formulas.
- Add server-side booking or integrate Calendly/Bookafy for appointments.

License
This template is released under the MIT License. See LICENSE for details.
