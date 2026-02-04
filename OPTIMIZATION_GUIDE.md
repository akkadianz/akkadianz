# AKKADIANZ'26 WEBSITE — OPTIMIZATION QUICK GUIDE

## Pre-Deployment Optimization (Optional but Recommended)

### 1. IMAGE COMPRESSION (15-20 minutes)
Compress these 4 images to reduce load times:
- `assets/logo.png`
- `assets/bg.png`
- `assets/workshopbg.png`
- `assets/aboutbg.png`

**Tools:**
- **Online:** TinyPNG (tinypng.com) - Free, drag & drop
- **Command Line:** ImageMagick: `convert input.png -quality 85 output.png`
- **Modern Format:** Convert to WebP with PNG fallback (CSS background-image)

**Expected Impact:**
- Current: Unknown file sizes
- After compression: Typically 40-60% reduction
- Target: < 100KB each

### 2. ADD SEO META TAGS (5 minutes)
Add to `<head>` of each page:

```html
<!-- Homepage (index.html) -->
<meta name="description" content="AKKADIANZ'26 - A National Level Technical Symposium. Two-Day Hands-On Workshop on Embedded Systems & IoT. Feb 19-20, 2026.">
<meta name="keywords" content="symposium, embedded systems, IoT, workshop, technical event">
<meta name="theme-color" content="#0a0e1f">
<meta property="og:title" content="AKKADIANZ'26 - Technical Symposium">
<meta property="og:description" content="Join AKKADIANZ'26 workshop on Embedded Systems & IoT">
<meta property="og:image" content="https://yourdomain.com/assets/logo.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Workshop Page (workshop.html) -->
<meta name="description" content="Two-Day Hands-On Workshop on Embedded Systems & IoT. Registration ₹500. Feb 19-20, 2026 at SBM College Dindigul.">

<!-- About Page (about.html) -->
<meta name="description" content="Learn about AKKADIANZ'26 Technical Symposium organized by ECE Department, SBM College.">

<!-- Contact Page (contact.html) -->
<meta name="description" content="Contact AKKADIANZ'26 symposium team. Email: akkadianz.ece.sbmcet@gmail.com">
```

### 3. ANALYTICS SETUP (10 minutes, Optional)
Add Google Analytics to `<head>` of index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
(Replace `G-XXXXXXXXXX` with your Google Analytics ID)

### 4. SITEMAP & ROBOTS.TXT (Optional, 10 minutes)
Create `sitemap.xml` in root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/workshop.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Create `robots.txt` in root:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Deployment Checklist (Final)

### Pre-Deploy Verification (5 minutes)
- [ ] Run `npm run dev` locally and test all pages in Chrome
- [ ] Test on mobile device or Chrome DevTools mobile view
- [ ] Test navbar scroll-hide behavior
- [ ] Test registration form opens correctly
- [ ] Test email link works (click sends to mail client)
- [ ] Test Instagram link opens in new tab

### Choose Hosting & Deploy
- [ ] **Netlify** (Easiest): Drag & drop folder in Netlify.com
- [ ] **Vercel**: `npm i -g vercel` then `vercel`
- [ ] **GitHub Pages**: Push to GitHub, enable in settings
- [ ] **Traditional Hosting**: Upload files via SFTP

### Post-Deploy Testing (10 minutes)
- [ ] Visit live URL and test all pages
- [ ] Test on mobile device
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check no console errors (F12)
- [ ] Verify forms work end-to-end
- [ ] Share link with team and get feedback

---

## Performance Targets

### Lighthouse Scores (Expected)
- **Performance:** 90+ (static site advantage)
- **Accessibility:** 95+ (proper ARIA, semantic HTML)
- **Best Practices:** 95+ (HTTPS, no deprecated APIs)
- **SEO:** 90+ (meta tags, mobile responsive)

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Current Status (Expected)
✅ All metrics likely in green zone due to:
- No JavaScript frameworks
- RAF throttling on scroll
- Font-display: swap strategy
- CSS Grid/Flexbox (no jank)
- Minimal render-blocking resources

---

## Directory Structure After Optimization

```
akkadianz-website/
├── index.html                    ← Homepage
├── workshop.html                 ← Workshop details
├── about.html                    ← About AKKADIANZ
├── contact.html                  ← Contact info
├── fonts.css                     ← Typography system
├── index.css                     ← Homepage + navbar
├── workshop.css                  ← Workshop page
├── about.css, contact.css        ← Page-specific styles
├── index.js, nav.js, workshop.js ← Interactive features
├── navbar-scroll.js              ← Scroll behavior
├── scroll-animations.js          ← Reveal animations
├── package.json                  ← Project metadata
├── sitemap.xml                   ← (Optional, after step 4)
├── robots.txt                    ← (Optional, after step 4)
├── assets/
│   ├── logo.png                  ← (Optimize: compress)
│   ├── bg.png                    ← (Optimize: compress)
│   ├── workshopbg.png            ← (Optimize: compress)
│   ├── aboutbg.png               ← (Optimize: compress)
│   └── *.ttf, *.otf              ← 14 font files
└── DEPLOYMENT_ANALYSIS.md        ← This deployment report
```

---

## Time Estimate

| Task | Time | Effort | Benefit |
|------|------|--------|---------|
| Image compression | 15-20 min | Low | High (faster loads) |
| SEO meta tags | 5 min | Very Low | Medium (better SEO) |
| Analytics | 10 min | Low | Medium (tracking) |
| Sitemap/robots | 10 min | Low | Low (nice to have) |
| **Total Optimization** | **40-45 min** | **Very Low** | **Good** |
| **Deploy as-is (no optimization)** | **< 5 min** | **None** | **Still production-ready** |

**Recommendation:** Deploy now, optimize after launch if you want quick feedback.

---

## Quick Deploy Command (Choose One)

### Netlify (Fastest, Recommended)
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login to Netlify (opens browser)
netlify login

# 3. Deploy (drag-drop alternative available)
netlify deploy --prod
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages
```bash
git init
git add .
git commit -m "Deploy AKKADIANZ website"
git remote add origin https://github.com/YOUR_USERNAME/akkadianz-website.git
git push -u origin main
# Enable GitHub Pages in repo settings
```

---

## Support & Troubleshooting

### Issue: Fonts not loading
- Check `assets/` folder has all .ttf and .otf files
- Check `fonts.css` paths point to `./assets/`
- Verify CORS headers set correctly (usually automatic on modern hosts)

### Issue: Mobile nav doesn't work
- Check `nav.js` is included in HTML
- Check nav IDs match aria-controls attributes
- Test in incognito window (no cache issues)

### Issue: Images not loading
- Check paths in CSS are relative: `url('assets/image.png')`
- Verify image files exist in assets/
- Check HTTPS is enabled (images won't load if mixed HTTP/HTTPS)

### Issue: Animations not smooth
- Check scroll performance in DevTools Lighthouse
- Ensure RAF throttling in navbar-scroll.js (it is)
- Disable heavy extensions (ad blockers can slow animations)

---

## Final Checklist Before Going Live

```
BEFORE DEPLOYMENT:
☐ All pages tested locally
☐ Mobile tested (iPhone + Android)
☐ Navbar scroll-hide works
☐ Forms tested
☐ Links tested (email, Instagram, Tally)
☐ (Optional) Images compressed
☐ (Optional) SEO meta tags added
☐ (Optional) Analytics configured
☐ HTTPS enabled on host

AFTER DEPLOYMENT:
☐ Live URL works
☐ All pages load
☐ Mobile responsive
☐ Run Lighthouse audit
☐ Share with team
☐ Monitor for errors
```

---

## Success! 🎉

Your AKKADIANZ'26 website is ready to launch!

**Status:** ✅ Production-ready
**Estimated time to live:** < 15 minutes
**Performance expectation:** Excellent (90+/100 Lighthouse)
**Ready to optimize:** Yes, after launch

**Questions?** Refer to DEPLOYMENT_ANALYSIS.md for comprehensive details.

