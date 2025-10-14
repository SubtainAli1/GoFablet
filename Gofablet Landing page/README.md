
# Landing Page — README

## What is included
- `index.html` — main landing page
- `thanks.html` — simple thank-you page
- `assets/css/style.css` — styles (responsive)
- `assets/js/main.js` — small JS utilities
- `assets/img/` — placeholder images (replace with your images)

## Google Tag Manager
Paste the following in the `<head>` (replace `GTM-XXXXXXX` with your container ID):

```html
<!-- Google Tag Manager -->
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>
<!-- End Google Tag Manager -->
```

Also paste the following immediately after `<body>` opens (replace `GTM-XXXXXXX`):

```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## Zoho form replacement
Two places in the markup are prepared for a Zoho embed:

- `#form-zoho` (hero section)
- `#form-zoho-final` (final contact section)

If you paste your Zoho embed code into one of these `div`s, the script will automatically hide the default local HTML form and show the Zoho form. No CSS changes should be necessary for responsiveness.

## Form behavior
- The default forms use JS to validate required fields and then redirect to `thanks.html` on success.
- When replacing with a 3rd-party form, ensure the provider redirects to `thanks.html` or manually configure the redirect in their settings.

## Click events (for analytics)
- `Call` buttons: `tel:` links. They have a small analytics push (`clickCall`) if GTM/dataLayer exists.
- `WhatsApp` button: you can add a link `https://wa.me/50212345678` where needed and it will behave like any external link.
- `Form submit`: dataLayer `formSubmit` is pushed on success.

## How to swap placeholders
- Replace `assets/img/*.jpg` and `assets/img/*.png` with your real images. Keep the filenames or update `index.html` accordingly.
- Replace phone number placeholders (`+50212345678`) with the real `tel:` value.
- Replace `GTM-XXXXXXX` with your GTM container id.

## Deploy to S3 + CloudFront
1. Upload all files to an S3 bucket configured for static website hosting.
2. Use CloudFront to point to the S3 bucket for CDN.
3. Set `index.html` as the root document and `thanks.html` as a reachable page.
