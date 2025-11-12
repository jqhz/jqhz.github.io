# Jahzz Portfolio

A modern, eye-catching dark theme portfolio built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark theme with cyan accent colors
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ♿ Accessible components with keyboard navigation
- 🎯 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS

## Pages

- **Home**: Hero section with animated work experience
- **About**: Personal introduction and skills showcase
- **Projects**: Grid of project cards with modal details
- **Contact**: Contact form with validation

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/       # Reusable components
├── context/         # React context providers
├── data/            # Static data (projects.json)
├── pages/           # Page components
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
\`\`\`

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Customization

- Update `src/data/projects.json` to add your projects
- Modify `src/context/UIContext.tsx` to update work experience
- Adjust colors in `tailwind.config.js`
- Update personal information in page components

## API Integration

The contact form is configured to POST to `/api/send-email`. You'll need to implement this endpoint on your backend.

## License

MIT
