# Barakah Health Clinic Website

A modern, responsive website for Barakah Health Clinic - a free, student-led preventive health clinic serving underserved families in Warren & Hamtramck, Michigan.

## Features

- **Home Page**: Hero section with clinic introduction and call-to-action buttons
- **About Us**: Mission, services, story, and leadership information
- **Services**: Comprehensive list of free health services offered
- **Locations**: Clinic locations with addresses and maps
- **Volunteer**: Information about volunteer opportunities and requirements
- **Resources**: Downloadable educational materials
- **Contact**: Contact information and partnership opportunities

## Tech Stack

- **React 19** - Modern React with latest features
- **React Router** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project (see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your Firebase configuration
# Get your Firebase config from Firebase Console > Project Settings > General
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer)
├── pages/         # Page components (Home, About, Services, etc.)
├── App.jsx        # Main app component with routing
├── main.jsx       # Entry point
└── index.css      # Global styles with Tailwind imports
```

## Customization

- Update clinic information in the respective page components
- Modify colors and styling in Tailwind classes throughout components
- Add actual Google Form link in `src/pages/Volunteer.jsx`
- Add actual Instagram link in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Replace placeholder images with actual clinic photos

## License

This project is for Barakah Health Clinic.
