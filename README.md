# ResearchHive Analytics - Static Website

Plain HTML, CSS and JavaScript. No R, Shiny or server needed. Live at:
https://daniellaojekere.github.io/Researchhive/

## Files
- `index.html` - home
- `about.html` - profile, mission, values, the ResearchHive advantage and engagement models
- `services.html` - service catalogue and ResearchHive Academy (institutional training, masterclasses, graduate support)
- `solutions.html` - ResearchHive OS, BreedVantage, GENOTwin and ClimaGene
- `projects.html` - project areas and methodology notes
- `contact.html` - project enquiry form and contact details
- `css/style.css` - styling and responsive layout
- `js/main.js` - mobile navigation, form prefill and enquiry handling
- `sitemap.xml` - page list for Google Search Console
- `assets/images/` - logo, favicon, social-share card and product screenshots

## Logo and product screenshots
- `logo-mark.png` (header), `favicon.png`, `apple-touch-icon.png` and `og-card.png`
  (the preview image shown when the site is shared on LinkedIn or WhatsApp).
- Product screenshots, shown at 16:9 and cropped from the top left:
  `researchhive-os.jpg`, `climagene.jpg` (included), `genotwin.jpg` and
  `breedvantage.jpg` (still to add). Until a file exists, a styled placeholder shows.

## How enquiries are routed
- The form on `contact.html` opens the visitor's email app with a pre-filled
  message to researchhivesanalytics@gmail.com, subject
  "Project enquiry: <service> - <organisation>".
- Visitors without an email app are pointed to the online enquiry form at
  https://zekldj-daniella-ojekere.shinyapps.io/ResearchHive/ (the Shiny app,
  which saves to the Google Sheet).
- Links such as `contact.html?service=...` and `contact.html?engagement=...`
  pre-select the matching dropdown.
- Never put Google credentials, keys or tokens in browser JavaScript.

## Publish on GitHub Pages
1. Push to the existing repository `daniellaojekere/Researchhive`, keeping that
   exact capitalisation so the live URL and canonical tags stay aligned.
2. Upload the contents of this folder to the repository root, not the folder itself.
3. Remove any old homepage file such as `index.md`, so it does not compete with `index.html`.
4. In Settings > Pages, deploy from branch `main`, folder `/ (root)`.

## Google indexing
1. Keep the `google-site-verification` meta tag in every page head; it keeps
   Search Console verification working.
2. In Search Console, open the `https://daniellaojekere.github.io/Researchhive/` property,
   submit `sitemap.xml` under Sitemaps, then use URL Inspection > Request indexing
   on the homepage.
3. Each page declares its own canonical URL. If you move to a custom domain later,
   update the canonical, og:url and JSON-LD URLs and the sitemap.
