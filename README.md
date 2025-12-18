# OneTribe - Static Website

A clean, modern static website recreated from Framer design using HTML, CSS, and vanilla JavaScript.

## 🎨 Design Features

- **Distinctive Typography**: Outfit for headlines, Manrope for body text
- **Rich Purple Palette**: Vibrant gradients and cohesive color system
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Smooth Animations**: Fade-in effects, hover states, and scroll animations
- **Production-Grade**: Clean, semantic HTML with modular CSS

## 📁 Project Structure

```
onetribe/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Complete stylesheet with design system
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── images/            # Image assets
│   └── logos/             # Logo files
└── README.md              # This file
```

## 🚀 Features

### Sections Included:
- ✅ Sticky Header with Navigation
- ✅ Hero Section with CTAs
- ✅ Partner Logos Grid
- ✅ Features Section
- ✅ Pricing Plans (4 tiers)
- ✅ Client Testimonials (6 cards)
- ✅ Case Studies (3 featured)
- ✅ Partnership Section
- ✅ FAQ Accordion
- ✅ Final CTA
- ✅ Footer with Links

### Interactive Elements:
- Mobile navigation toggle
- FAQ accordion functionality
- Smooth scroll navigation
- Scroll-triggered animations
- Hover effects on cards
- Sticky header with scroll effect

## 🎯 Design System

### Colors
- Primary: `#8B5CF6` (Purple)
- Primary Dark: `#7C3AED`
- Primary Light: `#A78BFA`
- Secondary: `#EC4899` (Pink)
- Accent: `#06B6D4` (Cyan)

### Typography
- Display Font: Outfit (Google Fonts)
- Body Font: Manrope (Google Fonts)
- Scale: 12px - 60px with fluid sizing

### Spacing
- Consistent spacing scale from 0.5rem to 6rem
- Responsive containers with max-width: 1280px

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🔧 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript**: Vanilla JS (no frameworks)
- **Fonts**: Google Fonts (Outfit, Manrope)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Usage

Simply open `index.html` in a web browser to view the website. No build process or dependencies required.

For local development with live reload, you can use any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

## 🎨 Customization

### Changing Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
    --color-primary: #8B5CF6;
    /* ... other colors */
}
```

### Modifying Content
Edit the HTML content directly in `index.html`. All sections are clearly labeled with comments.

### Adding Images
Place images in `assets/images/` and reference them in HTML:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## 📄 License

All rights reserved © 2025 OneTribe

## 🤝 Credits

Design recreated from original Framer website: https://www.onetribe.sk/

Built with the frontend-design skill for Claude Code, emphasizing distinctive aesthetics and production-grade code quality.
