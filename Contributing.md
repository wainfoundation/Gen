# Contributing to Gen Landing Page

Thank you for your interest in contributing to the **Gen Landing Page**!  
Gen is a modern, responsive landing page for an AI-powered personal assistant designed to boost productivity. We welcome contributions from the community to enhance its features, design, and functionality.

This guide outlines how to contribute, coding standards, and best practices. By contributing, you help make Gen better for everyone.

---

## 📚 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Getting Started](#getting-started)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Reporting Issues](#reporting-issues)
- [Community Guidelines](#community-guidelines)
- [Contact](#contact)

---

## 🚀 How to Contribute

We welcome contributions in the following areas:

- **Bug Fixes**: Address functionality, responsiveness, or browser compatibility issues.
- **Feature Enhancements**: Add new sections, animations, or interactivity.
- **Design Improvements**: Enhance UI/UX, styling, and accessibility.
- **Documentation**: Improve this file, the README, or inline code comments.
- **Performance**: Optimize CSS, JS, and loading behavior.
- **Accessibility**: Improve color contrast, ARIA labels, or keyboard support.

👉 Check the [Issues](../../issues) tab for tasks or suggest a new feature/bug fix.

---

## ⚙️ Getting Started

### 1. Fork the Repository

Click the **Fork** button on the main repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/gen-landing-page.git
cd gen-landing-page
````

### 3. Create a Branch

Use descriptive names:

```bash
git checkout -b feature/add-newsletter-form
```

Examples: `fix/hero-animation`, `feature/add-dark-mode`

### 4. Set Up the Project

* Gen uses **pure HTML, CSS, and JavaScript**
* No build tools or frameworks required
* Open `index.html` in a browser OR run:

```bash
npm install -g live-server
live-server
```

> Ensure an internet connection to load Google Fonts.

---

## 📤 Submitting Changes

### 1. Make Changes

* Work in your feature branch
* Follow [Coding Standards](#coding-standards)
* Test on Chrome, Firefox, Safari, and mobile

### 2. Commit Changes

```bash
git add .
git commit -m "Add: newsletter signup form to CTA section"
```

Use clear, present-tense commit messages (e.g., `Fix: nav alignment`).

### 3. Push and Create Pull Request

```bash
git push origin feature/add-newsletter-form
```

* Go to your fork on GitHub
* Click **Compare & Pull Request**
* Title: `Add: Newsletter signup form`
* Description:

  * What you changed
  * Why it matters
  * How to test
  * Related issues (e.g., `Closes #45`)

A maintainer will review and merge once approved.

---

## 🧑‍💻 Coding Standards

### HTML

* Use semantic elements (`<section>`, `<nav>`, `<header>`)
* All images must have `alt` attributes
* Lowercase tag and attribute names
* Avoid unnecessary nesting or div wrappers

### CSS

* Use kebab-case for class names (`.hero-section`)
* CSS custom properties for colors:

```css
:root {
  --primary-violet: #7C4DFF;
  --secondary-violet: #B47AFF;
  --background: #000000;
}
```

* Use logical ordering: layout → typography → animations
* Add media queries for responsiveness:

```css
@media (max-width: 768px) {
  /* mobile styles */
}
```

### JavaScript

* Use ES6+ (`const`, `let`, arrow functions)
* Modular, readable code with comments:

```js
// Initialize background animation
const particleBg = document.getElementById('particle-bg');
for (let i = 0; i < 50; i++) {
  // Particle logic here
}
```

* Keep logic in `<script>` tags or separate files
* Avoid inline `onclick`, `onload`, etc.

---

## ♿ Accessibility

* Sufficient color contrast (e.g., light text on dark background)
* Add ARIA attributes (`aria-label`, `role`)
* Ensure keyboard navigation and tab order
* Test using screen readers like VoiceOver, NVDA

---

## 🐛 Reporting Issues

If you discover a bug or have a feature suggestion:

1. Search [existing issues](../../issues)
2. Create a new issue with:

   * **Title**: e.g., "Nav not visible on mobile"
   * **Description**: steps to reproduce, browser/device, expected vs actual behavior
   * Add relevant labels (e.g., `bug`, `enhancement`, `accessibility`)

---

## 🤝 Community Guidelines

We value respectful and inclusive collaboration. Please:

* Be kind and constructive
* Assume good intentions
* Avoid offensive language or behavior
* Follow our [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## 📬 Contact

* Open an [issue](../../issues) for support or questions
* Email: `your-email@example.com`
* (Optional) Join our Discord/X: *add links if applicable*

---

### 🔖 Notes

* Replace `your-username` and `your-email@example.com` with real details
* If you have a PR template or issue template, mention them
* Add badges or GitHub Actions if applicable

---

Thank you for helping improve **Gen**! 🌟
