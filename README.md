<div align="center">

# 🚀 Kasireddi Yeswanth - Futuristic Portfolio

<img src="assets/profile.png" alt="Profile" width="150" style="border-radius: 50%"/>

### A Premium, World-Class Portfolio Website with Cutting-Edge Design

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-00d4ff?style=for-the-badge)](https://yeswanthkasi.github.io/portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Design Philosophy](#-design-philosophy)
- [Technical Architecture](#-technical-architecture)
- [File Structure](#-file-structure)
- [Customization Guide](#-customization-guide)
- [Performance Optimizations](#-performance-optimizations)
- [Browser Support](#-browser-support)
- [Accessibility](#-accessibility)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

This portfolio website showcases my work as a **Systems Engineer** at Infosys with previous experience as an **Android Developer** at Ecorvi Pvt. Ltd. The design features a modern, futuristic aesthetic with world-class animations, glassmorphism effects, and a fully responsive layout optimized for all devices.

### 👤 About Me
- **Name:** Kasireddi Yeswanth
- **Role:** Systems Engineer @ Infosys, Mysore
- **Background:** ECE Graduate | Android Developer | Cloud Enthusiast
- **Focus Areas:** Android Development, AI/ML, Electronics, Cloud Technologies

---

## ✨ Features

### 🎨 Visual Design
| Feature | Description |
|---------|-------------|
| **Glassmorphism UI** | Modern frosted glass effects with blur and transparency |
| **Neon Glow Effects** | Cyan, purple, and pink neon accents throughout the design |
| **Animated Gradients** | Dynamic gradient backgrounds that float and pulse |
| **Dark Theme** | Eye-friendly dark color scheme with high contrast |
| **Custom Typography** | Premium fonts (Inter, Space Grotesk, JetBrains Mono) |

### 🎬 Animations & Interactions
| Feature | Description |
|---------|-------------|
| **Loading Screen** | Animated loader with spinning rings and pulsing logo |
| **Custom Cursor** | Glowing cursor dot with smooth outline follower |
| **Scroll Animations** | Elements animate in as you scroll down the page |
| **Parallax Effects** | Hero section with depth-based parallax scrolling |
| **Tilt Effects** | 3D card tilting on mouse movement |
| **Magnetic Buttons** | Social links and buttons follow cursor movement |
| **Ripple Effects** | Material Design-inspired click feedback |
| **Particle System** | Floating animated particles in the background |

### 📱 Responsive Design
- **Mobile-First Approach:** Optimized for all screen sizes
- **Touch Optimizations:** Proper touch targets and gestures
- **Adaptive Navigation:** Hamburger menu on mobile devices
- **Fluid Typography:** Text scales smoothly across breakpoints
- **Flexible Layouts:** CSS Grid and Flexbox for layout management

### ♿ Accessibility
- **Reduced Motion Support:** Respects `prefers-reduced-motion`
- **High Contrast Mode:** Enhanced visibility for accessibility needs
- **Keyboard Navigation:** Full keyboard accessibility
- **Semantic HTML:** Proper heading hierarchy and landmarks
- **ARIA Labels:** Descriptive labels for interactive elements

---

## 🎨 Design Philosophy

### Color Palette

```css
/* Primary Colors */
--primary-color: #00d4ff;    /* Cyan - Main accent */
--secondary-color: #7c3aed;  /* Purple - Secondary accent */
--accent-color: #10b981;     /* Green - Success/highlight */
--accent-pink: #ec4899;      /* Pink - Emphasis */
--accent-orange: #f97316;    /* Orange - Warmth */

/* Background Colors */
--background-color: #0a0a0f; /* Deep dark blue-black */
--background-secondary: #111118;
--surface-color: rgba(17, 17, 24, 0.8);

/* Text Colors */
--text-primary: #ffffff;
--text-secondary: #94a3b8;
--text-muted: #64748b;
```

### Typography

| Font | Usage |
|------|-------|
| **Inter** | Body text, paragraphs |
| **Space Grotesk** | Headings, titles |
| **JetBrains Mono** | Code snippets, technical tags |

### Design Tokens

```css
/* Glassmorphism */
--glass-background: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

/* Neon Glow Effects */
--glow-primary: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
--glow-secondary: 0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.3);

/* Animation Timings */
--spring-timing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--smooth-timing: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🏗️ Technical Architecture

### Technologies Used

| Category | Technology |
|----------|------------|
| **Structure** | HTML5, Semantic Elements |
| **Styling** | CSS3, CSS Variables, Flexbox, Grid |
| **Animations** | CSS Animations, JavaScript |
| **Icons** | Font Awesome 6.5, Devicons |
| **Fonts** | Google Fonts API |

### Key CSS Features
- CSS Custom Properties (Variables)
- CSS Grid & Flexbox Layouts
- CSS Animations & Keyframes
- Backdrop Filter (Glassmorphism)
- CSS Clamp for Fluid Typography
- Media Queries for Responsiveness
- :has(), :is(), :where() Pseudo-selectors

### JavaScript Features
- Intersection Observer API (Scroll Animations)
- RequestAnimationFrame (Smooth Animations)
- Event Delegation
- DOM Manipulation
- Smooth Scrolling

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles (3000+ lines)
├── script.js           # JavaScript interactions
├── favicon.png         # Site favicon
├── favicon.svg         # Vector favicon
├── README.md           # This documentation
├── assets/
│   ├── profile.png     # Profile photo
│   ├── Schlmng_*.png   # School Management App screenshots
│   └── Tracking_*.png  # Bus Tracker App screenshots
└── .github/
    └── workflows/      # GitHub Actions
```

---

## 🔧 Customization Guide

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #00d4ff;    /* Change main accent color */
    --secondary-color: #7c3aed;  /* Change secondary color */
    --background-color: #0a0a0f; /* Change background */
}
```

### Updating Personal Information

Edit `index.html`:

```html
<!-- Profile Section -->
<h2 class="profile-name">Your Name</h2>
<p class="profile-title">Your Title</p>
<p class="profile-subtitle">@ Your Company, Location</p>

<!-- Contact Email -->
<a href="mailto:your.email@example.com" class="email-link">
```

### Adding New Projects

Add a new project card in the projects section:

```html
<div class="project-card fade-up">
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-screenshots">
            <div class="screenshots-scroll">
                <img src="assets/screenshot.png" alt="Screenshot" class="screenshot-img">
            </div>
        </div>
        <ul class="project-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
        <div class="tech-stack">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-actions">
            <div class="button-wrapper">
                <a href="#" class="btn go-live">
                    <i class="fas fa-external-link-alt"></i>
                    Go Live
                </a>
                <a href="#" class="btn github">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</div>
```

### Adding New Skills

Add to the tech cloud in the skills section:

```html
<div class="tech-bubble">
    <i class="fab fa-icon-name"></i>
    <span>Skill Name</span>
</div>
```

---

## ⚡ Performance Optimizations

### Implemented Optimizations

| Optimization | Description |
|--------------|-------------|
| **Font Preconnect** | Preconnect to Google Fonts for faster loading |
| **CSS Containment** | Isolation of paint and layout operations |
| **Hardware Acceleration** | `transform: translateZ(0)` for GPU acceleration |
| **Will-change** | Hints for browser optimization |
| **Lazy Animations** | Intersection Observer for on-demand animations |
| **Debounced Events** | Optimized scroll and resize handlers |
| **Reduced Motion** | Respects user preferences for animations |

### Performance Tips

1. **Images:** Compress all images before adding
2. **Fonts:** Use `font-display: swap` for better loading
3. **CSS:** Minify for production
4. **JavaScript:** Use async/defer for script loading

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |
| Mobile Chrome | Latest | ✅ Full |
| Mobile Safari | Latest | ✅ Full |

### Required Features
- CSS Custom Properties
- CSS Grid & Flexbox
- Backdrop Filter (with fallback)
- Intersection Observer API
- CSS Animations

---

## ♿ Accessibility

### WCAG 2.1 Compliance

- **Level A:** Fully compliant
- **Level AA:** Mostly compliant

### Features
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios (4.5:1 minimum)
- Reduced motion support
- Screen reader friendly

---

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages:

🔗 **Live URL:** [https://yeswanthkasi.github.io/portfolio/](https://yeswanthkasi.github.io/portfolio/)

### Manual Deployment

1. Fork/clone this repository
2. Update personal information in `index.html`
3. Customize colors in `style.css`
4. Enable GitHub Pages in repository settings
5. Select branch: `main` and folder: `/ (root)`

### Alternative Hosting

The site can be deployed to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 📞 Contact

**Kasireddi Yeswanth**

- 📧 Email: [kasireddiyeswanth29@gmail.com](mailto:kasireddiyeswanth29@gmail.com)
- 💼 LinkedIn: [yeswanth-kasireddi](https://www.linkedin.com/in/yeswanth-kasireddi-93a695221/)
- 🐙 GitHub: [YeswanthKasi](https://github.com/YeswanthKasi)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by [Kasireddi Yeswanth](https://github.com/YeswanthKasi)

</div>
