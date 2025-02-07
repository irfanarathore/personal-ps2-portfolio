# Personal PS2-Inspired Portfolio

## Overview
This project is a **personal portfolio website** inspired by the **PlayStation 2 (PS2) UI**, designed to showcase projects, blog posts, and contact information. The site features a **game selection menu, memory card interactions, and dynamic animations** to create a nostalgic yet professional presentation.

This project involved significant effort to structure, optimize, and deploy correctly. From setting up **Vite** for a fast development workflow to integrating **EmailJS** for a seamless contact form, every aspect was carefully designed and implemented.

## Features
### 🎮 PlayStation-Inspired UI
- **Game Menu Selection** – A fully interactive **PS2-inspired game menu** to navigate between projects.
- **Memory Card System** – Users can hover over and select memory cards that link to different sections of the portfolio.
- **PS2 Button Prompts** – Includes animated button prompts for an authentic feel.

### ⚡️ Tech Stack & Tools
- **Vite** – Modern frontend tooling for fast development and optimized builds.
- **HTML, CSS (SCSS), JavaScript** – Core technologies for structure, styling, and interactivity.
- **Framer Motion** – Used for smooth animations.
- **EmailJS** – Enables direct message submissions from the contact form.
- **GitHub Pages** – Hosts the final deployed site.

### 📩 Contact Form
- Users can **send messages directly from the website** using **EmailJS**.
- **Client-side validation** ensures a proper email format before submission.
- A **success message** confirms that the email was sent.

### 🛠 Development & Deployment Process
1. **Set up Vite** to streamline development.
2. **Built the frontend components** following a modular approach.
3. **Configured EmailJS** for seamless email functionality.
4. **Implemented animations using Framer Motion** for an interactive user experience.
5. **Deployed via GitHub Pages**, adjusting paths in `vite.config.js` to ensure proper asset loading.

## Installation & Setup
If you'd like to run this project locally, follow these steps:

### Prerequisites
- Install **Node.js** (LTS version recommended)
- Install **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/irfanarathore/personal-ps2-portfolio.git
cd personal-ps2-portfolio
```

### Install Dependencies
```sh
npm install
```

### Run Development Server
```sh
npm run dev
```
This will start the local development server, allowing live preview and hot reloading.

### Build for Production
```sh
npm run build
```
This will generate the `dist/` folder containing the optimized production-ready site.

### Deploying to GitHub Pages
- Ensure `dist/` is committed to GitHub.
- Enable **GitHub Pages** and set the branch to `gh-pages`.

## Challenges & Solutions
### ✅ Vite Configuration for GitHub Pages
Since GitHub Pages serves static files from a subdirectory, we had to adjust **vite.config.js** to specify the `base` path:
```js
export default {
    base: "/personal-ps2-portfolio/", // Replace with your GitHub repo name
};
```
### ✅ Fixing Git Initialization Issues
During setup, we encountered multiple `.git` conflicts across directories. The solution was to:
- **Remove old `.git` directories**
- **Reinitialize Git properly at the project root**
- **Ensure a clean commit history**

### ✅ Managing EmailJS Without a Backend
Instead of setting up a backend, we leveraged **EmailJS**, which allows direct email sending from the frontend using a secure API key.

## Future Enhancements
- **Dark mode toggle** – Allow users to switch between themes.
- **More dynamic animations** – Expand on the PS2 aesthetic with additional transitions.
- **Mobile optimization** – Improve responsiveness for smaller screens.

## Conclusion
This project was a **huge learning experience**, from **setting up Vite**, **deploying to GitHub Pages**, and **implementing PS2-style UI**. It was an exciting challenge that brought together multiple technologies into a polished and functional portfolio.

If you have any suggestions or want to connect, feel free to reach out!

---

🚀 **Live Demo:** [GitHub Pages Link](https://irfanarathore.github.io/personal-ps2-portfolio/)

