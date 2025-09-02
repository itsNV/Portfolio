# Professional Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Designed for a fresher focusing on Data Analysis and MERN Stack development.

## 🎨 Design Features

- **Modern Color Palette:**
  - Primary Background: #071E3D (Dark Navy)
  - Secondary Background: #1F4287 (Navy Blue)
  - Highlight & Buttons: #278EA5 (Teal)
  - Accents & Hover: #21E6C1 (Aqua)

- **Professional Design:**
  - Clean, modern layout inspired by Lovable design principles
  - Smooth animations and transitions using Framer Motion
  - Responsive design for all devices
  - Professional typography with Inter font

## 🚀 Technologies Used

- **Frontend:** React 19.1.1
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Font:** Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.js          # Navigation component
├── pages/
│   ├── Home.js            # Home page with hero, about, contact
│   ├── DataAnalyst.js     # Data Analysis portfolio page
│   └── MERNStack.js       # MERN Stack portfolio page
├── App.js                 # Main app component with routing
├── index.js              # Entry point
└── index.css             # Global styles and Tailwind config
```

## 🎯 Pages Overview

### 1. Home Page (`/`)
- **Hero Section:** Name, description, and call-to-action buttons
- **About Section:** Introduction with links to specialized pages
- **Contact Section:** Contact form and social media links

### 2. Data Analyst Page (`/data-analyst`)
- **Intro Section:** Data analysis journey overview
- **Experience Section:** Certifications and coursework
- **Skills Section:** Technical skills with progress bars
- **Projects Section:** Sample data analysis projects

### 3. MERN Stack Page (`/mern-stack`)
- **Intro Section:** MERN development path overview
- **Projects Section:** Full-stack project showcase
- **Skills Section:** MERN stack proficiency
- **Additional Technologies:** Supporting tools and frameworks

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📝 Customization Guide

### Personal Information
- Update the name "John Doe" in `src/components/Navbar.js` and `src/pages/Home.js`
- Modify the description in the hero section
- Update social media links in the contact section

### Content Updates
- **Data Analyst Page:** Update certifications, skills, and projects
- **MERN Stack Page:** Replace sample projects with your actual work
- **Skills:** Adjust skill levels and add/remove technologies

### Styling
- Colors are defined in `tailwind.config.js` under the `extend.colors` section
- Custom components are in `src/index.css` under `@layer components`
- Animations can be modified in the Framer Motion components

## 🎨 Key Features

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth navigation transitions

### Responsive Design
- Mobile-first approach
- Responsive navigation with hamburger menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Performance
- Optimized animations
- Lazy loading for better performance
- Clean, semantic HTML structure
- Efficient CSS with Tailwind utilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository or contact the developer.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
