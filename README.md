# Survivor Parkur Event Website

A modern and responsive web application for the Survivor Parkur event, built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Interactive maps showing race tracks
- Multi-language support (English and Turkish)
- Real-time race results and filtering
- User registration and authentication
- Media gallery with images and videos
- Comprehensive event information
- News and announcements section

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- React-i18next
- React Leaflet
- React Slick
- Headless UI
- Hero Icons

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/survivor-parkur.git
cd survivor-parkur
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
survivor-parkur/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Races.tsx
│   │   ├── Information.tsx
│   │   ├── Media.tsx
│   │   ├── About.tsx
│   │   ├── Results.tsx
│   │   └── Auth.tsx
│   ├── i18n/
│   │   └── config.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── media/
│   ├── team/
│   └── about/
├── index.html
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory, ready to be deployed to your hosting provider.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [OpenStreetMap](https://www.openstreetmap.org)
