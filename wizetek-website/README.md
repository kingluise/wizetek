# Wizetek IT Solutions website

Static, frontend-only corporate website built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — Home
- `services.html` — Services
- `about.html` — About Us
- `portfolio.html` — Portfolio (illustrative placeholders are clearly marked)
- `contact.html` — Contact Us
- `privacy-policy.html` — starter policy template
- `terms.html` — starter terms template
- `404.html` — not found page
- `css/style.css` — all styling
- `js/main.js` — mobile navigation, portfolio filtering, reveal effects, and mailto contact form

## Run locally
Open `index.html` in a browser. For best testing, use any simple static file server or a local editor preview. No Node.js or build step is required.

## Before publishing
1. Replace all contact placeholders in `contact.html` and update the `data-contact-email` value on the contact form.
2. Replace illustrative portfolio cards with real, verified work or remove them.
3. Review and update Privacy Policy and Terms and Conditions for your actual business practices.
4. Add a real domain to canonical/SEO metadata if desired.
5. Confirm all company claims and services are accurate.
6. Test on desktop and mobile.

## Contact form behavior
This is intentionally frontend-only. The form validates input and prepares an email using `mailto:`. It does not send or store messages on its own. The visitor must send the prepared email from their email application.
