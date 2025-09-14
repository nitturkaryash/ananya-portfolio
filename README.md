# Ananya's Studio Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme with lime green and amber accents, showcasing a professional design portfolio.

## 🎨 Features

- **Modern Design**: Dark theme with lime green (#B7EA01) and amber (#AA6829) accents
- **Responsive Layout**: Bento grid layout that adapts to all screen sizes
- **Smooth Animations**: Scroll animations and fade-in effects using Framer Motion
- **Real-time Clock**: Dynamic time display in the header
- **Accessibility**: ARIA labels and keyboard navigation support
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Custom SVG icons and Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: Bun

## 📁 Project Structure

```
client/                   # React frontend
├── components/           # Reusable components
│   ├── blocks/          # Layout components
│   └── ui/              # UI component library
├── pages/               # Route components
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions

server/                   # Express backend
├── routes/              # API endpoints
└── index.ts             # Server configuration

shared/                   # Shared types
└── api.ts               # API interfaces
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nitturkaryash/ananya-portfolio.git
cd ananya-portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser.

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run typecheck` - Run TypeScript validation
- `bun run test` - Run tests

## 🎯 Key Components

- **BentoGrid**: Responsive grid layout system
- **Timer**: Real-time clock component
- **FadeContent**: Animated content wrapper
- **ContainerScroll**: Smooth scroll container
- **BentoCell**: Individual grid cell component

## 🎨 Design System

The design follows a consistent color palette:
- **Primary**: Black backgrounds
- **Accent**: Lime green (#B7EA01)
- **Secondary**: Amber (#AA6829)
- **Text**: White and gray tones
- **Borders**: Subtle gray borders

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The project can be deployed to:
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting for public repos

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/nitturkaryash/ananya-portfolio/issues).

## 📞 Contact

- **Portfolio**: [Ananya's Studio](https://github.com/nitturkaryash/ananya-portfolio)
- **Email**: Contact through GitHub
- **LinkedIn**: Available in footer

---

Built with ❤️ by Ananya
