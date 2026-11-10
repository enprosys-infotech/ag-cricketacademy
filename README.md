# Neena Vinod Agarwal Cricket Stadium

The Neena Vinod Agarwal Cricket Stadium website is a client-rendered React application built with
TypeScript, React Router, and Vite. It presents stadium and academy information, news, events, and
visitor actions.

## Brand system

- **Legacy Blue:** `#124388`, sampled from the approved stadium logo.
- **Lime:** `#A2BB43`, sampled from the approved logo and used for highlights and calls to action.
- **Accessible green:** `#617A26` for text on light backgrounds.
- **Lime foreground:** `#102A48` for readable text on lime surfaces.
- **Display type:** Rockwell, with Roboto Slab as a webfont fallback.
- **Body type:** Poppins.
- **Iconography:** Lucide line icons.

The color tokens and supporting surface colors are defined in `src/styles.css`. Keep the logo
asset in its approved colors and proportions. Brand names, navigation, statistics, and other
editable site content are maintained in `src/lib/site.ts`.

## Site layout

The home page has its own stadium hero. Other pages share the site header and footer without
repeating that full-width hero. The shared header uses a dark background on interior pages so its
light navigation remains legible.

Routes are declared in `src/app-routes.tsx` and their page components live in `src/routes/`.

## Development

Install dependencies with Node.js and npm:

```sh
npm install
npm run dev
```

Available checks:

```sh
npm run build
npm test
npm run lint
```

The production build outputs static files to `dist/`.
