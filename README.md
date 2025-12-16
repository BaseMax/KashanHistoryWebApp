# Isfahan History WebApp

> Offline Local Tourism Web Application for Isfahan Province

Isfahan History WebApp is a fully offline, client-side Progressive Web App (PWA) designed to showcase local and regional tourism across Isfahan Province, Iran. The app highlights lesser-known cities, villages, and cultural sites, emphasizing local lifestyle, traditions, and economy. It can also be converted into a standalone Android app using WebView.

## Key Features

- Comprehensive offline database with local JSON data
- Interactive maps using OpenStreetMap (no external services required)
- City and region guides with images, descriptions, and cultural notes
- Local tourism focus: traditional houses, local cuisine, festivals
- Favorites system for quick offline access
- Rule-based smart suggestions based on season, city, and user preferences
- Optional multilingual support (Persian and English)
- Easy offline navigation without Google Maps
- Lightweight PWA installable on mobile and desktop

## Technology Stack

- Frontend: HTML5, CSS3 (TailwindCSS), JavaScript / TypeScript, React
- Data: Static JSON, TODO: IndexedDB / LocalStorage
- Maps: OpenStreetMap tiles

## Project Goals

- Promote local and underrepresented tourist destinations in Isfahan Province
- Provide a fully offline, self-contained tourism app
- Support local economy and culture
- Serve as a demo-ready, deployable app for events or educational purposes

## Future Development

- Add local businesses and handicrafts sections
- VR-based exploration of sites
- Educational versions for schools
- Versions tailored for visitors and pilgrims

License: MIT

------------

A modern, production-ready React boilerplate with TypeScript, Tailwind CSS, ESLint, and Prettier pre-configured for optimal development experience.

## 🚀 Recent Updates

- **React 19.1.1**: Upgraded to the latest React version with improved performance
- **Tailwind CSS v4**: Updated to Tailwind CSS v4 with new PostCSS architecture
- **Modern React 18+ Rendering**: Migrated from `ReactDOM.render` to `createRoot` API
- **Enhanced Development Tools**: Updated ESLint, Prettier, and TypeScript configurations
- **Bun Support**: Added Bun lock file for faster package management
- **Pre-commit Hooks**: Automatic code formatting and linting before commits

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Static type checking
- **Tailwind CSS 4.1.11** - Utility-first CSS framework with new architecture
- **Vite 4.5.14** - Fast build tool and development server
- **ESLint 8.57.1** - Code linting with TypeScript support
- **Prettier 3.6.2** - Code formatting with Tailwind plugin
- **Pre-commit** - Git hooks for code quality

## 📦 Package Manager Support

This project supports multiple package managers:
- **npm** (default)
- **Bun** (lock file included for faster installs)

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-ts-tailwind-eslint-prettier
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run lint` - Run ESLint and Prettier
- `npm run lint:fix` - Fix ESLint issues
- `npm run lint:format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Tailwind CSS v4 Features

This boilerplate uses the latest Tailwind CSS v4 with:
- New PostCSS architecture (`@tailwindcss/postcss`)
- Simplified import system (`@import 'tailwindcss'`)
- Enhanced base layer with consistent border colors
- Automatic configuration detection

## 🔧 Code Quality Tools

- **ESLint**: Configured with TypeScript, React, and accessibility rules
- **Prettier**: Code formatting with Tailwind class sorting
- **Pre-commit**: Automatic linting and formatting before commits
- **TypeScript**: Strict type checking configuration

## 📁 Project Structure

```
├── src/
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point with React 18+ createRoot
│   ├── index.css        # Global styles with Tailwind v4
│   └── vite-env.d.ts    # Vite type definitions
├── public/
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.js       # Prettier configuration
├── postcss.config.js    # PostCSS with Tailwind v4
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Performance Optimizations

- React 19 with improved concurrent features
- Vite for fast HMR and optimized builds
- Modern React rendering with `createRoot`
- Tailwind CSS v4 for smaller bundle sizes
- TypeScript for better development experience and error catching

## 📄 License

MIT License
