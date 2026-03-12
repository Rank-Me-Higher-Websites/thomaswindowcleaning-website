

## SEO Infrastructure Overhaul

### Current State
- **robots.txt**: Basic, no sitemap reference, no AI bot rules
- **sitemap.xml**: Does not exist
- **Meta tags**: Static in `index.html`, same for every page. OG tags still say "Lovable App"
- **Structured data**: None
- **Per-page SEO**: Not implemented (no react-helmet or equivalent)

### Plan

#### 1. Install `react-helmet-async` for per-page meta
- Add `HelmetProvider` in `App.tsx`
- Create a reusable `<SEOHead>` component that accepts title, description, canonical URL, OG image, and schema JSON-LD
- Add unique `<SEOHead>` to every page:
  - **Home**: "Thomas Window Cleaning | Professional Window, Gutter & Power Washing in Chicago"
  - **Window Cleaning**: "Professional Window Cleaning Services | Thomas Window Cleaning"
  - **Gutter Cleaning**: "Gutter Cleaning Services | Thomas Window Cleaning"
  - **Power Washing**: "Power Washing Services | Thomas Window Cleaning"
  - **Area Service Pages**: Dynamic — "{Service} in {Area}, IL | Thomas Window Cleaning"
  - **Blog / Blog Posts**: Dynamic titles from post data
  - **Prices, Offers, Contact, Terms, Privacy**: Unique titles/descriptions each

#### 2. Fix `index.html` OG tags
- Update `og:title`, `og:description`, `twitter:site` to Thomas Window Cleaning branding
- Replace Lovable OG image with company logo or a proper OG image

#### 3. Create `public/sitemap.xml`
- Static sitemap listing all main pages + all 36 area service pages + all blog post URLs
- Include `<lastmod>`, `<changefreq>`, and `<priority>` attributes

#### 4. Update `public/robots.txt`
- Add sitemap reference: `Sitemap: https://thomaswindow.lovable.app/sitemap.xml`
- Add AI crawler rules (GPTBot, ClaudeBot, CCBot, Google-Extended, etc.) with `Allow: /`

#### 5. Add JSON-LD structured data schemas
Via the `<SEOHead>` component, inject page-specific schemas:
- **All pages**: `LocalBusiness` schema (company name, address, phone, logo, service area)
- **Service pages**: `Service` schema (name, description, provider, area served)
- **Area pages**: `Service` + `BreadcrumbList` schemas
- **Blog posts**: `Article` schema (headline, author, datePublished, image)
- **Prices page**: `Service` with `Offer` schema (price ranges)
- **FAQ sections**: `FAQPage` schema on pages with accordion Q&As (Window Cleaning, etc.)

#### Files to create/modify
- **Install**: `react-helmet-async`
- **Create**: `src/components/SEOHead.tsx`, `public/sitemap.xml`
- **Modify**: `src/App.tsx` (HelmetProvider), `index.html` (fix OG), `public/robots.txt`, and every page component (add `<SEOHead>`)

