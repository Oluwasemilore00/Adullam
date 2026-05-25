# Nexus Meridian Group — Corporate Website

A professional, production-ready React corporate website with five pages, fully responsive and styled with a refined navy & gold aesthetic.

## Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats bar, about strip, services preview, clients, CTA |
| About | `/about` | Mission, stats, core values, timeline history, CTA |
| Services | `/services` | Interactive 6-service panel with approach steps |
| Team | `/team` | 8-person grid with clickable bio modals |
| Contact | `/contact` | Enquiry form, offices, social media links |

## Technology

- **React 18** with React Router v6
- **CSS Custom Properties** (no external UI libraries needed)
- **Google Fonts** — Cormorant Garamond + Jost
- Fully **responsive** (mobile, tablet, desktop)
- **No backend required** — form is front-end only (wire up to your own API or service such as Formspree/EmailJS)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

## Customisation

### Company Name & Branding
- Global find & replace `Nexus Meridian Group` with your company name
- Update `NMG` initials in `Navbar.jsx` and `Footer.jsx`
- Adjust colour palette in `src/styles/global.css` (CSS variables in `:root`)

### Content
- **Team** — edit the `team` array in `src/pages/Team.jsx`
- **Services** — edit the `services` array in `src/pages/Services.jsx`
- **Offices** — edit the `offices` array in `src/pages/Contact.jsx`
- **Social Links** — update URLs in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Contact Form
The form currently shows a success message on submit. To connect it to a real endpoint:
```js
// In Contact.jsx, replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  });
  setSent(true);
};
```

## Social Media Handles (Update These)
| Platform | Current Handle | File |
|----------|---------------|------|
| LinkedIn | /company/nexusmeridiangroup | Footer.jsx, Contact.jsx |
| Twitter/X | @NexusMeridanGrp | Footer.jsx, Contact.jsx |
| Facebook | NexusMeridianGroup | Footer.jsx, Contact.jsx |
| Instagram | @nexusmeridiangroup | Footer.jsx, Contact.jsx |
| YouTube | @NexusMeridianGroup | Footer.jsx, Contact.jsx |

## Folder Structure
```
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
```
