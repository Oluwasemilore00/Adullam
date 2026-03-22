# ADULLAM CONSULTING LTD — Corporate Website

A professional, production-ready React corporate website with five pages, fully responsive and styled with a refined navy & gold aesthetic.

## Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats bar, about strip, services preview, clients, CTA |
| About | `/about` | Mission, stats, core values, timeline history, CTA |
| Services | `/services` | Interactive 5-service panel with approach steps |
| Team | `/team` | 8-person grid with clickable bio modals |
| Contact | `/contact` | Enquiry form, offices, social media links |

## Technology

- **React 18** with React Router v6
- **CSS Custom Properties** (no external UI libraries needed)
- **Google Fonts** — Cormorant Garamond + Jost
- Fully **responsive** (mobile, tablet, desktop)


## Quick Start

bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build






## Folder Structure

corporate-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── Services.jsx / Services.css
│   │   ├── Team.jsx / Team.css
│   │   └── Contact.jsx / Contact.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.js
└── package.json
