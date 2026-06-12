# FUMU Website Expansion Development Plan

Last updated: 2026-06-12

## Purpose
This plan consolidates all approved website expansion ideas into an implementation-ready roadmap for design, content, and engineering.

Scope assumptions:
- Product photography will be supplied later.
- Site remains static-export compatible.
- Existing SEO foundations remain in place and should be extended.

## Delivery Principles
- Build in small, shippable phases.
- Prioritize sections with the highest impact on trust, local SEO, and conversion.
- Keep all additions mobile-first and accessible.
- Use reusable components so future updates are low-friction.

## Stage Completion Tracker

Use this checklist to track overall stage completion during delivery.

### Workstream Stages
- [x] Stage 1 complete: Product Photography Enhancements
- [ ] Stage 2 complete: How to Use FUMU
- [ ] Stage 3 complete: Where to Find Us
- [ ] Stage 4 complete: Expanded Brand Story
- [ ] Stage 5 complete: Social Proof
- [ ] Stage 6 complete: Meet the Maker
- [ ] Stage 7 complete: Heat Scale Visual
- [ ] Stage 8 complete: Email Signup
- [ ] Stage 9 complete: Expanded Footer
- [ ] Stage 10 complete: FUMU in the Wild Gallery

### QA and Release Stages
- [ ] Stage 11 complete: Accessibility and mobile QA
- [ ] Stage 12 complete: SEO/schema verification
- [ ] Stage 13 complete: Lint and build validation
- [ ] Stage 14 complete: Content sign-off and publish

### Sprint Stage Tracking
- [ ] Sprint 1 complete: Product hero photos, Where to Find Us, How to Use FUMU
- [ ] Sprint 2 complete: Expanded brand story, testimonials, Meet the Maker
- [ ] Sprint 3 complete: Heat scale, email signup, expanded footer, gallery

## Workstream 1: Product Photography Enhancements
### 1.1 Product Hero Shots
Tasks:
- Add large jar photo module in hero or mid-page product spotlight.
- Support at least one primary image and optional secondary angle image.
- Ensure responsive image handling and meaningful alt text.

Deliverables:
- Product hero image component.
- Updated homepage layout placement.

Acceptance criteria:
- Hero photo is visible and crisp on mobile and desktop.
- Layout shift is controlled.
- Alt text describes product clearly.

### 1.2 Lifestyle Food Photography
Tasks:
- Add a usage photo strip/grid showing FUMU on: noodles, dumplings, eggs, rice bowls, stir-fries.
- Add short caption per image for context.

Deliverables:
- Lifestyle gallery component.

Acceptance criteria:
- At least 5 usage photos are displayed.
- Captions are readable and concise.
- Performance remains acceptable.

### 1.3 Ingredient Close-Ups
Tasks:
- Add ingredient detail block for chillies, garlic, aromatics, and oil texture.
- Pair each image with one quality-focused line.

Deliverables:
- Ingredient close-up section.

Acceptance criteria:
- Ingredient quality message is clear.
- Section visually differentiates from lifestyle gallery.

## Workstream 2: How to Use FUMU
### 2.1 Serving Ideas
Tasks:
- Add a dedicated "How to Use FUMU" section.
- Include serving bullets: drizzle on noodles, mix into dips, add to marinades, top on eggs, stir into soups.

### 2.2 Quick Recipes
Tasks:
- Add recipe cards for:
  - 5-minute noodle bowl
  - FUMU fried rice
  - Spicy mayo
  - Dumpling dipping sauce

### 2.3 Pairing Suggestions
Tasks:
- Add pairing chips/list for eggs, rice, dumplings, stir-fries, grilled meats.

Deliverables:
- Reusable usage + recipe card components.

Acceptance criteria:
- Section includes all serving ideas and all 4 quick recipes.
- Content is scan-friendly and mobile readable.

## Workstream 3: Local Presence (Where to Find Us)
### 3.1 Market Locations
Tasks:
- Add Manchester market presence and Bolton origin context.
- Add event schedule module.

### 3.2 Local Identity Messaging
Tasks:
- Include both exact phrases:
  - Crafted in Bolton, near Manchester
  - Handmade chilli oil Manchester

### 3.3 Upcoming Events
Tasks:
- Add list/table for pop-ups, market dates, and tastings.

Deliverables:
- Where to Find Us section.

Acceptance criteria:
- Local location details are clearly visible.
- Event entries can be updated without code refactor.

## Workstream 4: Expanded Brand Story
### 4.1 Origin Story
Tasks:
- Add narrative content: why FUMU exists, flavour inspiration, founder journey.

### 4.2 Meaning of FUMU
Tasks:
- Add short explanation of cultural/personal significance and brand philosophy.

### 4.3 Craft Process
Tasks:
- Add process breakdown: small-batch production, sourcing, heat-flavour balance.

Deliverables:
- Brand story section with 3 sub-blocks.

Acceptance criteria:
- Story reads clearly in under ~2 minutes.
- Tone stays authentic and brand-consistent.

## Workstream 5: Social Proof
### 5.1 Customer Quotes
Tasks:
- Add testimonials from market reactions, early testers, friends/family.

### 5.2 Instagram Reactions
Tasks:
- Add curated positive comments/replies/reposts.

### 5.3 Ratings (Optional)
Tasks:
- Add simple internal 5-star visual if desired.

Deliverables:
- Testimonials/reviews section.

Acceptance criteria:
- Minimum 3 testimonials published.
- Consent and attribution handled for quoted content.

## Workstream 6: Meet the Maker
### 6.1 Founder Photo
Tasks:
- Add founder portrait, market stall image, or behind-the-scenes image.

### 6.2 Short Bio
Tasks:
- Add short founder bio with mission and motivation.

Deliverables:
- Meet the Maker section.

Acceptance criteria:
- Section includes one photo and one bio block.
- Bio is concise and personal.

## Workstream 7: Heat Scale Visual
### 7.1 Heat Levels
Tasks:
- Add visual scale with levels: Mild, Medium, Hot, FUMU.

### 7.2 Placement
Tasks:
- Place inside product section or as standalone module.

Deliverables:
- Heat scale component.

Acceptance criteria:
- Heat levels are instantly understandable.
- Works on small screens without clipping.

## Workstream 8: Email Signup
### 8.1 Signup Purpose
Tasks:
- Position as updates for markets, launches, and new flavours.

### 8.2 Minimal Form
Tasks:
- Implement email-only form.
- Keep static-friendly integration path (form endpoint or provider).

Deliverables:
- Email signup section.

Acceptance criteria:
- Email capture works in production.
- Success/failure states are visible to users.

## Workstream 9: Expanded Footer
### 9.1 Useful Links
Tasks:
- Add links for Instagram, email, market schedule, privacy policy, and terms.

### 9.2 Branding
Tasks:
- Add small logo and short tagline.

Deliverables:
- Extended footer component.

Acceptance criteria:
- All footer links are valid.
- Footer provides clear secondary navigation.

## Workstream 10: FUMU in the Wild Gallery
### 10.1 User Photos
Tasks:
- Add customer/IG repost images.

### 10.2 Market Stall Photos
Tasks:
- Add booth setup and interaction photos.

### 10.3 Behind-the-Scenes
Tasks:
- Add cooking, bottling, and prep images.

Deliverables:
- FUMU in the Wild gallery section.

Acceptance criteria:
- At least one image per category is included.
- Gallery supports future content additions.

## Recommended Implementation Order
1. Add jar photos and product hero section.
2. Add Where to Find Us (local SEO and trust).
3. Add How to Use FUMU (long-tail utility content).
4. Expand brand story.
5. Add testimonials/social proof.
6. Add heat scale visual.
7. Add email signup.
8. Expand footer links and branding.
9. Add FUMU in the Wild gallery.

## Suggested Sprint Plan
### Sprint 1 (High Impact Foundations)
- Product hero photos
- Where to Find Us
- How to Use FUMU

### Sprint 2 (Trust + Brand Depth)
- Expanded brand story
- Testimonials
- Meet the Maker

### Sprint 3 (Retention + Completeness)
- Heat scale
- Email signup
- Expanded footer
- FUMU in the Wild gallery

## SEO Impact Summary
- Product photos: improves trust and click-through potential.
- Local sections: improves Manchester/Bolton relevance.
- Usage and recipe content: expands long-tail query coverage.
- Testimonials and gallery: improves credibility and engagement.
- Email signup: improves retention for repeat visits and launches.

## Agent Execution Checklist
- Confirm required content assets exist before each workstream starts.
- Implement section as reusable component.
- Add/verify metadata and schema where relevant.
- Validate mobile layout and accessibility.
- Run lint/build checks.
- Update tracker and changelog note after each merged phase.

## Agent-Executable Task Breakdown

This section turns each workstream into concrete actions that can be implemented directly in this codebase.

### Global Setup Tasks (Do First)
1. Create data-first content model files so components stay presentational.
2. Add image metadata (alt, width, height, caption, priority) for every new asset.
3. Keep all new assets under public/assets with consistent naming.

Files to create or update:
- src/app/data/site-content.ts
- src/app/types/content.ts
- src/app/page.tsx
- src/app/globals.css

Verification:
- npm run lint
- npm run build

### Workstream 1 Implementation: Product Photography Enhancements
Actionable tasks:
1. Add a ProductPhotoSpotlight component for hero jar imagery.
2. Add a LifestyleGallery component with fixed aspect-ratio cards.
3. Add an IngredientCloseups component with image-plus-copy blocks.
4. Add responsive image loading strategy:
- first fold image priority true
- below fold images lazy

Files to create:
- src/app/components/product-photo-spotlight.tsx
- src/app/components/lifestyle-gallery.tsx
- src/app/components/ingredient-closeups.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- Hero, lifestyle, and ingredients sections render with fallback-safe placeholders.
- All images have meaningful alt text.
- Mobile layout has no overflow.

### Workstream 2 Implementation: How to Use FUMU
Actionable tasks:
1. Create a HowToUseSection component with three blocks: serving ideas, quick recipes, pairings.
2. Build reusable RecipeCard and PairingChip subcomponents.
3. Add semantic headings and anchor id for nav linking.

Files to create:
- src/app/components/how-to-use-section.tsx
- src/app/components/recipe-card.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- Includes all serving ideas and all 4 recipes.
- Section is readable in one-screen chunks on mobile.

### Workstream 3 Implementation: Where to Find Us
Actionable tasks:
1. Add a WhereToFindUsSection component with market cards and event list.
2. Include both exact local identity phrases in visible copy.
3. Add schema support by extending LocalBusiness JSON-LD if event data exists.

Files to create:
- src/app/components/where-to-find-us-section.tsx

Files to update:
- src/app/page.tsx
- src/app/layout.tsx
- src/app/data/site-content.ts

Definition of done:
- Manchester and Bolton positioning is explicit.
- Event content can be edited via data file only.

### Workstream 4 Implementation: Expanded Brand Story
Actionable tasks:
1. Add a BrandStorySection component with three sub-panels: origin, meaning, process.
2. Keep panel copy lengths constrained to avoid wall-of-text.
3. Use consistent typography hierarchy with existing design system.

Files to create:
- src/app/components/brand-story-section.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- Story section reads clearly in under two minutes.
- Copy can be updated from one data source.

### Workstream 5 Implementation: Social Proof
Actionable tasks:
1. Add a TestimonialsSection with quote cards.
2. Support source labels like Market, Instagram, Early Tester.
3. Add optional star display toggled by data flag.

Files to create:
- src/app/components/testimonials-section.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- At least 3 testimonials are displayed.
- Layout supports long and short quotes gracefully.

### Workstream 6 Implementation: Meet the Maker
Actionable tasks:
1. Add a MeetTheMakerSection with image and bio content.
2. Reuse existing motion/scroll reveal patterns for visual consistency.

Files to create:
- src/app/components/meet-the-maker-section.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- One founder image and one concise bio are shown.
- Section has clear heading and anchor target.

### Workstream 7 Implementation: Heat Scale Visual
Actionable tasks:
1. Add a HeatScale component with 4 levels: Mild, Medium, Hot, FUMU.
2. Add visual state indicators and text labels for accessibility.
3. Link each product to a heat level in product data.

Files to create:
- src/app/components/heat-scale.tsx

Files to update:
- src/app/components/products-section.tsx
- src/app/data/products.ts

Definition of done:
- Heat mapping is visible and understandable at a glance.
- Color is not the only signal (text/shape included).

### Workstream 8 Implementation: Email Signup
Actionable tasks:
1. Add an EmailSignupSection with email-only form.
2. Add provider-agnostic submit handler path (Formspree or custom endpoint).
3. Add client-side validation and success/error messages.

Files to create:
- src/app/components/email-signup-section.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- Email submissions work in production path.
- Errors are shown without breaking layout.

### Workstream 9 Implementation: Expanded Footer
Actionable tasks:
1. Extend footer with required links and small brand lockup.
2. Add market schedule link target.
3. Add legal placeholders only if valid routes exist; otherwise keep external links.

Files to update:
- src/app/components/site-footer.tsx
- src/app/data/site-content.ts

Definition of done:
- All links resolve to valid destinations.
- Footer works on narrow screens without wrapping issues.

### Workstream 10 Implementation: FUMU in the Wild Gallery
Actionable tasks:
1. Add FumuInTheWildSection with category groups: users, market stall, behind-the-scenes.
2. Support caption and optional attribution per image.
3. Keep grid responsive and consistent with existing spacing scale.

Files to create:
- src/app/components/fumu-in-the-wild-section.tsx

Files to update:
- src/app/page.tsx
- src/app/data/site-content.ts

Definition of done:
- At least one image appears in each category.
- Captions and attribution are readable on mobile.

## Delivery Sequence (Agent Runbook)
1. Build content models and data files first.
2. Implement Workstreams 1 to 3.
3. Run lint/build and mobile sanity check.
4. Implement Workstreams 4 to 6.
5. Run lint/build and accessibility check.
6. Implement Workstreams 7 to 10.
7. Run final lint/build and SEO metadata review.
8. Update SEO and expansion trackers with completion notes.

## Reusable Command Checklist
1. npm run lint
2. npm run build

## Risks and Mitigations
Risk:
- Missing photography assets can block visual sections.
Mitigation:
- Use typed placeholder content and swap assets later without component rewrites.

Risk:
- Large images can hurt performance.
Mitigation:
- Use optimized sizing, proper dimensions, and lazy loading below the fold.

Risk:
- Static hosting constraints for dynamic features.
Mitigation:
- Keep forms and event content static-friendly and provider-backed.
