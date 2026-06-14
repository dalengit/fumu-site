# FUMU SEO Implementation Tracker

Last updated: 2026-06-12

## Goal
Improve discoverability, click-through rate, and local relevance for FUMU while keeping the site fully static-export compatible with Next.js 16.

## Current Findings (From Initial SEO Review)
1. Metadata is minimal and does not fully represent brand, product intent, or local geography.
2. Open Graph and Twitter metadata are not fully populated for strong social snippets.
3. Canonical and robots directives are not yet explicit in page metadata.
4. Structured data (JSON-LD) is missing for Organization/LocalBusiness and ProductList signals.
5. Some CTAs are buttons that should be semantic links for crawlable internal navigation.
6. Placeholder links exist in contact/footer and should be replaced with real destinations.
7. Image alt text can be more descriptive and intent-aware for brand and product context.
8. Local SEO signals for Manchester, UK can be stronger in visible copy and entity data.
9. Static sitemap/robots strategy needs explicit verification for static hosting.

## Priority Plan

### P0 - Metadata and Search Snippet Foundation
Files:
- src/app/layout.tsx

Changes:
- Add title template + default title.
- Improve description with brand + product + local context.
- Add metadataBase.
- Add canonical URL.
- Add complete Open Graph metadata.
- Add complete Twitter card metadata.
- Add explicit robots metadata.

SEO impact:
- Better relevance for brand and product-intent terms.
- Better click-through from stronger SERP and social previews.
- Reduced duplicate-content ambiguity.

Status: [x] Completed 2026-06-12

### P0 - Semantic Structure and Internal Linking
Files:
- src/app/components/hero-section.tsx
- src/app/components/site-header.tsx
- src/app/components/about-section.tsx
- src/app/components/products-section.tsx
- src/app/components/contact-section.tsx
- src/app/components/site-footer.tsx

Changes:
- Keep one H1, ensure clear H2/H3 hierarchy across sections.
- Convert hero CTA buttons to semantic links where appropriate.
- Add descriptive aria-labels to nav and key links.
- Replace placeholder hash links with valid destinations.

SEO impact:
- Stronger crawl path and anchor relevance.
- Better accessibility and quality signals.
- More complete content understanding by search engines.

Status: [x] Completed 2026-06-12

### P1 - Structured Data (JSON-LD)
Files:
- src/app/layout.tsx
- src/app/page.tsx
- src/app/data/products.ts

Changes:
- Add Organization or LocalBusiness JSON-LD for FUMU (Manchester, UK).
- Add ProductList or ItemList JSON-LD built from product data.

SEO impact:
- Clear entity understanding for brand and location.
- Better eligibility for rich results and stronger topical mapping.

Status: [x] Completed 2026-06-12

### P1 - Image SEO and Performance Signals
Files:
- src/app/components/hero-section.tsx
- src/app/components/site-header.tsx

Changes:
- Improve alt text clarity and intent.
- Ensure above-the-fold imagery has appropriate loading/priority behavior.

SEO impact:
- Better media context for search engines.
- Better Core Web Vitals profile for key rendering path.

Status: [x] Completed 2026-06-12

### P1 - Local SEO Copy Refinement
Files:
- src/app/components/hero-section.tsx
- src/app/components/about-section.tsx
- src/app/components/contact-section.tsx

Changes:
- Naturally include local-commercial phrases in visible copy.
- Reinforce Manchester, UK relevance without keyword stuffing.

Target phrases to use naturally:
- FUMU chilli oil
- handmade chilli oil Manchester
- small-batch chilli oil UK
- artisan chilli oil Manchester
- Asian condiments Manchester
- FUMU Manchester

SEO impact:
- Better intent match for local and non-brand queries.
- Stronger local authority and brand association.

Status: [x] Completed 2026-06-12

### P2 - Crawlability and Static Export Validation
Files:
- next.config.ts
- src/app (metadata-related files)
- public (sitemap/robots if needed)

Changes:
- Verify static export-safe SEO implementation.
- Confirm canonical and metadata paths are valid under basePath/assetPrefix.
- Add robots and sitemap handling suitable for static hosting.

SEO impact:
- Cleaner indexation and crawl efficiency.
- Fewer hosting-related SEO regressions.

Status: [x] Completed 2026-06-12

## Implementation Sequence
1. Metadata foundation in layout.
2. Semantic headings and internal links.
3. Structured data.
4. Local copy polish.
5. Image SEO/performance tuning.
6. Static export crawlability validation.

## Progress Checklist
- [x] P0 metadata completed
- [x] P0 semantic/internal linking completed
- [x] P1 JSON-LD completed
- [x] P1 image SEO completed
- [x] P1 local SEO copy completed
- [x] P2 static export validation completed
- [x] Final QA pass (Lighthouse + manual snippet review)

## QA Criteria
1. One clear H1 on the page; section H2/H3 hierarchy is valid.
2. Metadata title/description/canonical/OG/Twitter present and correct.
3. JSON-LD validates with no critical errors.
4. Internal anchor links are crawlable and descriptive.
5. No placeholder links remain in production-facing nav/footer/contact areas.
6. Images have meaningful alt text and appropriate loading behavior.
7. Site remains static-export compatible.

## Notes Log
- 2026-06-12: Initial SEO findings and phased implementation plan documented.
- 2026-06-12: Completed P0 metadata (title template, canonical, OG, Twitter, robots, keywords) and P0 semantic/internal linking updates (CTA links, aria labels, placeholder link replacement).
- 2026-06-12: Completed P1 structured data by adding LocalBusiness JSON-LD and ItemList/Product JSON-LD.
- 2026-06-12: Completed P1 local SEO copy refinement across hero/about/contact with Manchester-focused phrasing.
- 2026-06-12: Completed P2 crawlability updates with static metadata routes for robots and sitemap.
- 2026-06-12: Final QA pass completed: lint/build green, metadata snippet quality reviewed, and robots host normalized to canonical domain.
- 2026-06-12: Added environment-aware site config so canonical, JSON-LD, robots, and sitemap default to GitHub Pages domain/path during Actions builds unless NEXT_PUBLIC_SITE_URL override is provided.
