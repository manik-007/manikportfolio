

# Manik's Portfolio Website

## Design Direction
Following the editorial, minimal aesthetic of thecommunityman.com: serif typography (Playfair Display + Inter), warm off-white background (#fcfbf8), generous whitespace, smooth scroll, clean section dividers.

## Structure (Single-page, scroll-based)

### 1. Hero Section
- Large serif heading: "Manik"
- Tagline: "I build for impact and bring people together."
- Multi-hyphenate labels: Builder. Creator. Educator. Podcaster. Public Speaker. Leader. Writer. Traveller.
- Profile photo (uploaded image) with subtle styling
- Social icons row (YouTube, Instagram, X, LinkedIn, GitHub)

### 2. Articles Section
- Section title in serif
- 3 article cards with title + "Read on Medium" link
- Clean, minimal card layout with hover effects

### 3. Podcasts Section
- 2 podcast entries with episode name, guest name, guest LinkedIn link, YouTube link
- Editorial card layout

### 4. Meetups & Events Section
- EmpowerHer 2025 card with description
- Previously uploaded event image (Empower_Her_2.0_3.jpg)

### 5. Wall of Love (Testimonials)
- 2 testimonial quotes with attribution
- Large quotation marks, italic serif text

### 6. Connect Section
- Email link + social links
- Clean, centered layout

### 7. Sticky Navigation
- Minimal top nav with section links (smooth scroll)
- Name on the left, nav links on the right

## Technical Plan

### Files to create/modify:
1. **src/index.css** - Add custom CSS variables for warm palette, import Google Fonts (Playfair Display + Inter)
2. **src/pages/Index.tsx** - Full single-page portfolio with all sections
3. **Copy assets** - Profile photo + event image to src/assets/
4. **tailwind.config.ts** - Add font families

### Data approach:
- All content hardcoded in Index.tsx (no backend needed)
- External links open in new tabs

