# 🌐 Responsive Web Application Development — Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

A fully responsive, interactive personal portfolio website built from scratch using pure HTML, CSS, and JavaScript — no frameworks, no libraries. Themed around **Responsive Web Application Development** as a subject area, showcasing skills, projects, and research work.

---

## 🔗 Live Demo

**[View Live Site →](https://yourusername.github.io/portfolio-website)**

> Replace the link above with your actual GitHub Pages URL after publishing.

---

## 📸 Preview

| Section | Description |
|---|---|
| Hero | Animated typing effect + particles background |
| About | Photo, bio, stats, and contact card |
| Skills | Animated progress bars across 4 skill categories |
| Timeline | Education & experience in alternating layout |
| Projects | Filterable project cards with tilt effect |
| Contact | Working form with toast notifications |

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html        ← All page content & structure
├── style.css         ← Complete styling, themes & responsive rules
├── script.js         ← All JavaScript features & interactions
├── README.md         ← Project documentation (this file)
│
└── images/
    └── profile.jpg   ← Your profile photo (add your own)
```

---

## ✨ Features

### UI & Navigation
- ✅ Fixed navbar with scroll shadow effect
- ✅ Active nav link highlight while scrolling
- ✅ Hamburger menu for mobile with slide-in panel
- ✅ Smooth scroll for all anchor links
- ✅ Dark mode toggle (saves preference in localStorage)
- ✅ Scroll progress bar at top of page
- ✅ Back to top button (appears after scrolling)

### Visual Effects
- ✅ Loading screen with animated progress bar
- ✅ Particles background in hero (canvas-based)
- ✅ Typewriter / typing effect cycling through words
- ✅ Scroll reveal animations on all sections
- ✅ 3D tilt effect on project cards (mouse tracking)
- ✅ Hover effects across all interactive elements

### Content Sections
- ✅ Hero with badges and call-to-action buttons
- ✅ Stats strip (dark background, key numbers)
- ✅ About Me with photo placeholder and contact card
- ✅ Skills with animated fill progress bars
- ✅ Timeline — alternating left/right layout
- ✅ Projects with filter buttons (All / UX / Frontend / Tools)
- ✅ Contact form with validation and toast notification
- ✅ Footer with social links

### Responsive Design
- ✅ Works on all screen sizes (mobile, tablet, desktop)
- ✅ CSS Grid and Flexbox layouts
- ✅ Media queries at 600px, 900px, and 1024px breakpoints
- ✅ Mobile menu replaces nav links on small screens

---

## 🛠 Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, CSS variables, Grid, Flexbox |
| JavaScript (ES6+) | Interactivity, animations, DOM manipulation |
| Google Fonts | Playfair Display + Karla typography |
| Canvas API | Particles background in hero section |
| IntersectionObserver API | Scroll reveal and skill bar animations |
| localStorage API | Remembers dark/light mode preference |
| GitHub Pages | Free static site hosting |

---

## 🎨 Design System

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--cream` | `#faf8f3` | Page background |
| `--white` | `#ffffff` | Card backgrounds |
| `--ink` | `#111008` | Primary text |
| `--ink2` | `#3a3830` | Secondary text |
| `--muted` | `#8c8880` | Placeholder / labels |
| `--border` | `#dedad2` | Dividers and borders |
| `--accent` | `#c84b2f` | Primary accent (terracotta red) |
| `--accent2` | `#2a6b4f` | Secondary accent (forest green) |
| `--light` | `#f0ede5` | Section backgrounds |

### Typography

| Font | Use |
|---|---|
| **Playfair Display** | All headings, logo, large display text |
| **Karla** | Body text, labels, buttons, nav links |

---

## 🚀 Getting Started

### Prerequisites
- A code editor (VS Code recommended)
- Git installed on your computer
- A GitHub account (free)
- Live Server extension for VS Code

### Run Locally

1. **Clone or download the repository:**
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. **Open the folder in VS Code:**
```bash
cd portfolio-website
code .
```

3. **Run with Live Server:**
   - Right-click `index.html` in the Explorer panel
   - Click **"Open with Live Server"**
   - Your browser opens at `http://127.0.0.1:5500`

---

## 📝 Customization Guide

### 1. Change Your Name
In `index.html`, find the hero title and replace:
```html
<em>Your Name</em>
```

### 2. Update Your Details
In `index.html`, update the about section contact card:
```html
<span class="about-contact-val">Your City, India</span>
<span class="about-contact-val">you@email.com</span>
```

### 3. Add Your Photo
- Copy your photo to the `images/` folder as `profile.jpg`
- In `index.html`, uncomment this line:
```html
<img src="images/profile.jpg" alt="Your Name" class="about-photo" />
```
- Delete the placeholder div below it

### 4. Update Project Details
Find each `.project-card` in `index.html` and update:
- `project-title` — your project name
- `project-desc` — your description
- `project-techs` — your actual tech stack
- `project-link` href — link to your live project or GitHub repo

### 5. Update Timeline
Find the `.timeline` section and replace:
- Dates, titles, organization names
- Descriptions for each role/degree

### 6. Change Accent Color
In `style.css`, update the root variable:
```css
:root {
  --accent: #c84b2f;  /* change to any color */
}
```

### 7. Update Social Links
In `index.html` footer:
```html
<a href="https://linkedin.com/in/yourprofile" ...>in</a>
<a href="https://github.com/yourusername" ...>gh</a>
```

---

## 🌍 Deployment (GitHub Pages)

### First Time Setup

```bash
# 1. Initialize git in your project folder
git init

# 2. Add all files
git add .

# 3. Commit with a message
git commit -m "Initial portfolio upload"

# 4. Connect to your GitHub repository
git remote add origin https://github.com/yourusername/portfolio-website.git

# 5. Push to GitHub
git push -u origin main
```

Then go to your GitHub repository → **Settings** → **Pages** → set branch to `main` → **Save**.

Your site will be live at:
```
https://yourusername.github.io/portfolio-website
```

### Updating the Live Site

Every time you make changes, run:
```bash
git add .
git commit -m "Describe what you changed"
git push
```

The live site updates within 60 seconds.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target | Changes |
|---|---|---|
| `max-width: 1024px` | Tablet | About grid collapses, skills go 2-column |
| `max-width: 900px` | Mobile landscape | Hero stacks, hamburger appears, nav links hide |
| `max-width: 600px` | Mobile portrait | Single column everywhere, footer stacks |

---

## 🔧 JavaScript Features Reference

| Feature | Function / Listener |
|---|---|
| Loading screen | `loadInterval` with progress fill |
| Scroll progress | `scroll` event → width % |
| Back to top | `scroll` event → toggle `.visible` |
| Scroll reveal | `IntersectionObserver` → `.visible` |
| Skill bars | `IntersectionObserver` → `data-width` |
| Typing effect | Recursive `setTimeout` loop |
| Particles | `Canvas API` + `requestAnimationFrame` |
| Tilt effect | `mousemove` → `perspective rotateX/Y` |
| Project filters | `click` → toggle `.hidden` |
| Dark mode | `classList.toggle` + `localStorage` |
| Hamburger menu | `classList.toggle` open/close |
| Contact form | `submit` event + validation |
| Toast notification | Dynamic DOM element creation |
| Active nav link | `scroll` → match section id |
| Smooth scroll | `scrollIntoView({ behavior: 'smooth' })` |

---

## 📚 Learning Resources

These resources were used while building this project:

- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks — Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Google Fonts](https://fonts.google.com/)
- [GitHub Pages Docs](https://pages.github.com/)

---

## 📄 Academic Reference

This portfolio is themed around the research paper:

> *Journal of Web Development and Web Designing* — focusing on user-centered design, responsive web application development, usability testing, accessibility (WCAG), performance optimization, and A/B testing methodologies.

Key topics covered in the project content:
- Responsive Web Application Development
- User-Centered Design (UCD)
- Usability Testing & A/B Testing
- Accessibility — WCAG Standards
- Performance Optimization
- Cross-Browser Compatibility

---

## 🙋 Author

Names: karthik, Mani deepika, Shivani, Sai prajay
- GitHub: https://github.com/24a31a05fc
- Email:karthik5201891@gmail.com
- Live Portfolio: http://127.0.0.1:5500/index.html

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

You are free to use this as a template for your own portfolio. If you do, a credit or star ⭐ on the repository is appreciated!

---
