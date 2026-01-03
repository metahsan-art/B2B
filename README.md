# AIWizLab - AI-Powered B2B Lead Generation Platform

A modern, responsive marketing website for AIWizLab, an AI-powered B2B lead generation platform specializing in apparel and sportswear industries.

## 🚀 Features

- **Modern UI/UX**: Built with React 18 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive UI components using Radix UI
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safe**: Full TypeScript support

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd aiwizlab-prod
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── Navigation.tsx   # Navigation component
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features section
│   │   └── ...              # Other sections
│   ├── styles/
│   │   └── globals.css      # Global styles and Tailwind config
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── dist/                    # Production build output
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Key Dependencies

- `react` & `react-dom` - React framework
- `@radix-ui/*` - Accessible UI primitives
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - Class name utilities

## 🚢 Deployment

The project builds to the `dist/` folder which can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static host**: Upload the `dist` folder contents

## 📝 License

[Add your license here]

## 👥 Contributing

[Add contribution guidelines here]

## 📧 Contact

[Add contact information here]
