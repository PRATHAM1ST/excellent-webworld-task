# Interactive Web Application - Frontend Task

A modern, interactive web application built with React and TypeScript, featuring scroll-triggered animations, interactive 3D components, and smooth user experiences. This project demonstrates advanced frontend techniques including GSAP animations, React Three Fiber for 3D graphics, and responsive design.

## Features

### 🎠 Interactive Carousel
- Bidirectional scroll-triggered animations
- Letters animate from left to right on scroll down
- Reverses direction on scroll up
- Smooth, responsive design with hover effects

### ⭐ Scroll-Triggered Star Animation
- SVG path drawing animation synchronized with scroll
- Smooth scrubbing effect using GSAP ScrollTrigger
- Sticky positioning for optimal viewing experience

### 🎲 Interactive 3D Cube
- Interactive 3D cube built with React Three Fiber
- Hover effects that scale and change color
- Orbit controls for 360° rotation
- Real-time 3D rendering with smooth animations

## Technologies Used

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **GSAP (GreenSock Animation Platform)** - Professional animation library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PRATHAM1ST/excellent-webworld-task.git
```

2. Navigate to the project directory:
```bash
cd excellent-webworld-task
```

3. Install dependencies:
```bash
npm ci
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
excellent-webworld-task/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   │   ├── Carousel.tsx    # Interactive carousel component
│   │   ├── Star.tsx        # Scroll-triggered star animation
│   │   └── 3d.tsx          # Interactive 3D cube component
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and animations
├── .prettierrc         # Prettier configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md           # Project documentation
```

## Component Details

### Carousel Component
The Carousel component displays letters in an animated carousel that responds to scroll direction. It uses GSAP ScrollTrigger to detect scroll direction and applies CSS animations accordingly.

**Key Features:**
- Scroll direction detection
- Bidirectional animation
- Responsive design
- Hover effects on individual letters

### Star Component
The Star component features an SVG star that draws itself as you scroll. The animation uses GSAP's ScrollTrigger with scrubbing for smooth, scroll-synchronized animation.

**Key Features:**
- SVG path drawing animation
- Scroll-synchronized animation
- Sticky positioning
- Smooth scrubbing effect

### 3D Component
The 3D component renders an interactive 3D cube using React Three Fiber. Users can rotate the cube with mouse controls and see it scale and change color on hover.

**Key Features:**
- Interactive 3D rendering
- Orbit controls for rotation
- Hover effects (scale and color change)
- Real-time animations

## Color Palette

The application uses a warm, cohesive color scheme:
- **Cream**: `#FAF3E1` - Main background
- **Beige**: `#F5E7C6` - Secondary background
- **Orange**: `#FA8112` - Accent color
- **Dark**: `#222222` - Text color

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of a frontend engineering task assignment.

## Author

**Pratham**

---

Built with ❤️ using React, TypeScript, and modern web technologies.
