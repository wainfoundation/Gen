# Gen – AI Personal Productivity Assistant

![Gen Logo](assets/gen-logo.png) <!-- Replace with actual logo file -->

**Gen** is a sleek and futuristic landing page for an AI-powered personal assistant that transforms unproductive habits into a productive lifestyle. Built using **HTML**, **CSS**, and **JavaScript**, the page highlights Gen’s features like habit tracking, mood-based suggestions, community challenges, and intelligent task management—all wrapped in a stunning black and violet theme.

---

## 🔗 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## 🧠 Overview

This landing page is designed to promote **Gen**, a productivity-focused AI assistant. It features:

- A captivating hero section
- Smooth animations with a particle background
- Dark-themed palette (#000, #7C4DFF, #B47AFF)
- Responsive layout optimized for all devices
- SEO-ready metadata and accessibility features

---

## ✨ Features

- **Hero Section** with a strong CTA and "Try Demo" button  
- **How It Works**: Sign up → Set Goals → Stay Motivated  
- **AI Features**: Habit tracking, mood-based suggestions, community tasks, and coaching  
- **Community Section**: Highlights global challenges  
- **Testimonials** to establish trust  
- **CTA** and **FAQ** sections to encourage signups  
- **Animations**: Fade-ins and particle effects  
- **Fully Responsive Design** for all screen sizes  
- **SEO & Accessibility**: Meta tags, semantic HTML, and ARIA-ready structure

---

## 🛠️ Technologies

- **HTML5** – semantic and accessible structure  
- **CSS3** – animations, gradients, and responsive design  
- **JavaScript** – particles, smooth scroll, scroll animations  
- **Google Fonts** – [Inter](https://fonts.google.com/specimen/Inter) (400, 600, 700, 800)  
- **No frameworks** – lightweight and dependency-free

---

## ⚙️ Setup

### Clone the repository

```bash
git clone https://github.com/your-repo/gen-landing-page.git
cd gen-landing-page
````

### Run the project

* Open `index.html` directly in a browser
  OR
* Use a local server:

```bash
npm install -g live-server
live-server
```

> Open in: [http://localhost:8080](http://localhost:8080)

---

## 📁 File Structure

```
gen-landing-page/
├── index.html         # Main HTML file
├── README.md          # Project documentation
├── assets/            # Images, fonts, logos
│   └── gen-logo.png   # Placeholder logo
```

---

## 🚀 Usage

* Open `index.html` in a browser
* Use the sticky nav bar to scroll through sections
* Click "Try Demo" for a sample alert (placeholder)
* Test on mobile and tablets via browser dev tools

---

## 🎨 Customization

**Colors**

* Primary: `#7C4DFF`
* Secondary: `#B47AFF`
* Background: `#000000`

Update styles in the `<style>` section inside `index.html`.

**Images**

* Add your logo or app screenshots in `assets/`
* Example:

```html
<img src="assets/gen-app.png" alt="Gen app screenshot" class="hero-image" />
```

**Animations**

* Edit the JavaScript for particle speed and effects
* Customize `fadeIn` CSS keyframes as needed

**Analytics**
Insert this inside `<head>` to enable Google Analytics:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

---

## 🤝 Contributing

Pull requests are welcome! Here’s how:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

### Guidelines

* Keep code clean and commented
* Test on Chrome, Firefox, and Safari
* Ensure accessibility and responsive behavior

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## 🔮 Notes & Future Enhancements

* Host publicly via [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/), or [Netlify](https://www.netlify.com/)
* Add:

  * Newsletter signup form
  * Social media links
  * Interactive demo modal
  * Backend integration with xAI or Firebase

---

Built with 💜 by \ Mrwain Organization
