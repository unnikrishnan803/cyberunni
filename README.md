# CYBER SPACE 2026 — Official Event Website

**One-Day Inter-College Cyber Security & Ethical Hacking Event**  
Presented by **IEEE Computer Society** & **College of Engineering Cherthala**  
**Date:** 19 September 2026 &middot; Saturday  

---

## 🌐 Overview & Live Access

This website is built with vanilla **HTML5**, **CSS3**, and **Vanilla JavaScript** with zero external framework dependencies (no React, Next.js, Vue, Angular, Bootstrap, Tailwind, or jQuery).

Simply open **[`index.html`](./index.html)** in any modern web browser to view and interact with the complete live event website.

---

## 🎨 Design System & Aesthetics

- **Style:** Clean, Premium, Minimal, Technology-Focused (IEEE Technology Conference &times; Modern Cybersecurity Summit).
- **Dual-Theme Support:** Default **White Theme** (crisp white `#ffffff`, slate `#0f172a`, and tech blue/cyan `#0284c7`) + seamless **Dark Theme** toggle with persistence in `localStorage`.
- **Micro-Animations:** Interactive cyber network canvas, floating ambient background orbs, glowing animated CTA buttons, hover card lift (`translateY(-6px)`), and smooth reveal transitions.
- **Typography:** Google Fonts — *Space Grotesk* (headings, brand architecture), *Inter* (editorial body typography), and *JetBrains Mono* (dates, technical metrics, tags, badges).
- **Visuals:** Abstract cyber network canvas with subtle interactive nodes, clean thin borders, generous whitespace, and zero cheesy hacker stereotypes (no matrix rain, skulls, or neon clutter).

---

## 📂 Project Structure

```
cyberspace-2026/
├── index.html            # Complete semantic HTML5 structure with SEO & ARIA
├── style.css             # Premium CSS3 design system, fluid type, and responsive breakpoints
├── script.js             # Central configuration, real countdown, accordion, and canvas
├── README.md             # Documentation & customization guide
└── assets/
    ├── favicon.svg       # Cybersecurity shield vector icon
    ├── logos/
    │   ├── cyberspace-logo.png  # Primary event logo (placeholder included)
    │   ├── ieee-cs-logo.png     # IEEE Computer Society logo (placeholder included)
    │   └── college-logo.png     # College of Engineering Cherthala logo (placeholder included)
    └── speakers/
        └── manu-francis.jpg     # Professional portrait of keynote speaker & educator
```

---

## ⚙️ Central Configuration (`script.js`)

All event metadata, URLs, and social links are managed centrally in `script.js`:

```javascript
const eventData = {
    name: "CYBER SPACE 2026",
    date: "19 September 2026",
    day: "Saturday",
    organizer: "IEEE Computer Society",
    institution: "College of Engineering Cherthala",
    registrationUrl: "https://forms.gle/u4UEDsYb3QibjnyV8",
    linkedin: "https://www.linkedin.com/in/phogerman/",
    safeonnet: "https://www.youtube.com/@Safeonnet",
    edwhere: "https://www.edwhere.com",
    courses: "https://learn.edwhere.com",
    mapUrl: "https://maps.google.com/?q=College+of+Engineering+Cherthala+Pallippuram+Alappuzha",
    instagram: "https://www.instagram.com/ieee.cs.cectl/",
    whatsapp: "https://chat.whatsapp.com/LUTXtoMu7qyJvQGpSaWtW8",
    eventDateISO: "2026-09-19T09:00:00+05:30"
};
```

### Adding Safeonnet Videos

Easily add or update Safeonnet videos by modifying `safeonnetVideos` in `script.js`:

```javascript
const safeonnetVideos = [
    {
        title: "Cybersecurity Basics in Malayalam",
        description: "Core fundamentals and concepts explained.",
        youtubeUrl: "https://www.youtube.com/watch?v=...",
        thumbnail: "https://img.youtube.com/vi/.../maxresdefault.jpg"
    }
];
```

---

## 🎯 Key Features

1. **Header & Navigation:** Sticky glassmorphism header, active scroll highlight, mobile drawer with hamburger toggle, and direct registration CTA.
2. **Hero Section:** Abstract cyber network canvas, exact event metadata, real countdown timer to 19 September 2026, and bottom metrics bar.
3. **01 / About:** Explanatory lead box with the three core pillars (Learn, Explore, Start).
4. **02 / Experience:** 5 large numbered curriculum cards (no schedule/CTF/labs as strictly specified).
5. **03 / Resource Person:** Comprehensive profile of **Manu Francis**, credentials grid, career timeline (Edwhere Learning, Kerala Police Cyberdome, Technovalley), academic qualifications, recognitions, LinkedIn button, and responsive featured YouTube roadmap video.
6. **04 / Learn More:** Dedicated showcase for **Safeonnet** YouTube channel, dynamic video grid, and **Edwhere** continuous education.
7. **05 / Ethical Hacking Journey:** Structured 5-stage roadmap (horizontal on desktop, vertical on mobile).
8. **06 / Dark Web:** Comparison matrix (Surface Web, Deep Web, Dark Web), curriculum explorer, and educational safety badge.
9. **Audience & Why Attend:** Inclusive beginner-friendly statement and 6 core value cards.
10. **07 / Venue:** College of Engineering Cherthala details, directions, and direct Google Maps link.
11. **Social Media & FAQ:** Official channels and 9-item accessible accordion.
12. **Mobile Quick Register Bar:** Persistent fixed bottom registration bar formatted specifically for mobile viewports without obscuring content.

---

## ♿ Accessibility & Performance

- Semantic HTML5 with proper heading hierarchy (`h1` through `h5`).
- Complete keyboard accessibility (Tab, Enter, Space, Escape).
- ARIA states (`aria-expanded`, `aria-controls`, `aria-hidden`).
- Respects `prefers-reduced-motion: reduce`.
- Zero render-blocking heavy dependencies; lightweight and lightning-fast.
