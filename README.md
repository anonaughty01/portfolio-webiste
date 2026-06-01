# 3D Parallax Portfolio Website

A modern, interactive portfolio website featuring 3D scroll-based animations and parallax effects. Built with HTML, CSS, and vanilla JavaScript.

## ✨ Features

- **3D Parallax Scrolling**: Elements move at different speeds creating a depth effect
- **Smooth Scroll Animations**: Fade-in animations as you scroll through sections
- **3D Tilt Effect**: Project cards tilt based on mouse position
- **Mouse Tracking**: Background spheres follow cursor movement
- **Animated Cursor**: Custom cursor with smooth tracking
- **Responsive Design**: Fully mobile-optimized with reduced parallax on smaller screens
- **Performance Optimized**: RequestAnimationFrame for smooth 60fps animations
- **Interactive Elements**: Buttons, cards, and links with hover effects

## 🎯 Sections

1. **Hero Section** - Eye-catching welcome screen with animated spheres
2. **About Section** - Professional background and skill cards
3. **Projects Section** - Showcase of work with 3D tilt effects
4. **Contact Section** - Call-to-action with social links

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6+ support
- No external dependencies required (vanilla JavaScript)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/anonaughty01/portfolio-webiste.git
   ```

2. Navigate to the directory
   ```bash
   cd portfolio-webiste
   ```

3. Open `index.html` in your web browser

That's it! No build process needed.

## 📁 Project Structure

```
portfolio-webiste/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;      /* Indigo */
    --secondary: #ec4899;    /* Pink */
    --dark: #0f172a;         /* Dark blue */
    --light: #f1f5f9;        /* Light gray */
    --gray: #64748b;         /* Medium gray */
}
```

### Parallax Speed
Adjust parallax speed using the `data-parallax` attribute (values 1-10):
```html
<div data-parallax="5">Faster parallax</div>
```

### Content
Replace placeholder content in `index.html`:
- Update hero title and subtitle
- Replace skill items in skill cards
- Update project information
- Change email and social links

## 🎬 Animations

### Built-in Animations
- `slideInDown` - Hero title entrance
- `slideInUp` - Subtitle entrance
- `bounce` - Scroll indicator bounce
- `float` - Background sphere floating
- `twinkle` - Star twinkling effect
- `fadeInUp` - Content fade in on scroll

### JavaScript Features
- **Parallax Effect**: Scroll-triggered element transforms
- **Intersection Observer**: Visibility-based animations
- **Mouse Tracking**: Cursor-following effects
- **Smooth Scroll**: Anchor link navigation

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Checklist

- [ ] Update contact email in Contact section
- [ ] Replace project descriptions and images
- [ ] Update skill items in skill cards
- [ ] Change color scheme in CSS variables
- [ ] Update social media links
- [ ] Add your content and branding
- [ ] Test on mobile devices
- [ ] Optimize images for web

---

**Happy Building! 🚀**

Made with ❤️ using vanilla HTML, CSS, and JavaScript