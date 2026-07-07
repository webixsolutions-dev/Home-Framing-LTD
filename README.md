# Home Framing LTD

Marketing website for **Home Framing LTD**, a professional wood framing contractor serving Calgary and across Alberta. The site showcases the company's residential, commercial, custom-home, and structural-modification framing services, along with project highlights, career openings, and contact information.

Built with the **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript 5 (strict) |
| UI | React 19 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/postcss`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) 12 |
| Icons | Inline SVGs, `lucide-react`, `react-icons` |
| Fonts | Poppins (`next/font/google`) |
| Compiler | React Compiler (`babel-plugin-react-compiler`, enabled in `next.config.ts`) |
| Linting | ESLint 9 (`eslint-config-next`) |
| Hosting | Vercel |

---

## Project Structure

```
Home-Framing-LTD/
├── frontend/                 # The Next.js application (all site code lives here)
│   ├── public/
│   │   └── images/           # Logo, careers flyers, and static assets
│   │       └── careers/
│   ├── src/
│   │   ├── Header.tsx         # Site header + nav (desktop + mobile menu)
│   │   ├── Footer.tsx         # Site footer (links, contact, social icons)
│   │   ├── app/              # App Router routes
│   │   │   ├── layout.tsx    # Root layout (wraps every page with Header/Footer)
│   │   │   ├── globals.css   # Theme tokens & brand colors
│   │   │   ├── page.tsx      # Home page
│   │   │   ├── about/
│   │   │   ├── careers/      # Job listings + JobPosting JSON-LD
│   │   │   ├── contact/
│   │   │   ├── projects/
│   │   │   ├── services/     # Services index + per-service pages
│   │   │   ├── material-specs/
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   └── components/
│   │       └── homepagecomponent/   # Home page sections (Hero, Services, CTA, etc.)
│   ├── next.config.ts        # Next config (React Compiler, remote image patterns)
│   └── package.json          # Frontend dependencies & scripts
│
├── backend/                  # Placeholder (stub — no active server yet)
├── vercel.json               # Vercel deployment config (framework: nextjs)
└── package.json              # Root workspace marker
```

> **Note:** The application lives entirely in `frontend/`. The `backend/` directory is currently a placeholder stub and does not run a real server.

---

## Getting Started

### Prerequisites

- **Node.js 20+**
- **npm** (repo uses `package-lock.json`)

### Installation

All commands are run from the `frontend/` directory:

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Production build

```bash
npm run build   # create an optimized production build
npm run start   # serve the production build locally
```

### Linting

```bash
npm run lint
```

---

## Available Scripts

Run from `frontend/`:

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack). |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

---

## Routes

| Path | Description |
| --- | --- |
| `/` | Home page — hero, about, stats, services, why-choose-us, process, and CTA sections. |
| `/about` | Company story, leadership/director, mission, values, and services overview. |
| `/careers` | Current job openings with accessible cards and `JobPosting` structured data. |
| `/contact` | Contact details and enquiry information. |
| `/projects` | Portfolio of completed framing projects. |
| `/services` | Services index. |
| `/services/residential-framing` | Residential framing service. |
| `/services/commercial-framing` | Commercial framing service. |
| `/services/custom-home-framing` | Custom home framing service. |
| `/services/structural-modifications` | Structural modification service. |
| `/material-specs` | Material specifications. |
| `/privacy` | Privacy policy. |
| `/terms` | Terms of service. |

---

## Design System

Brand tokens are defined as CSS variables in [`frontend/src/app/globals.css`](frontend/src/app/globals.css). Reuse these instead of hardcoding new colors.

| Token | Value | Usage |
| --- | --- | --- |
| `--primary` | `#B95927` | Terracotta accent (buttons, highlights, hover states) |
| `--primary-hover` | `#a04d20` | Accent hover |
| `--dark-bg` | `#092336` | Navy (headings, dark sections, header bar) |
| `--background` / `--light-bg` | `#FBFBFB` | Light page background |
| `--foreground` | `#092336` | Default text color |

**Conventions**

- Layout is centered with `max-w-7xl` (or `max-w-[1920px]` in wide sections) and responsive padding (`px-4 sm:px-6 lg:px-8`).
- Section headings use an uppercase, letter-spaced eyebrow followed by a bold navy `h2`.
- Cards use `bg-white rounded-3xl shadow-lg border border-gray-100`.
- Framer Motion drives entrance animations on interactive/homepage sections.
- Remote images are served from `images.unsplash.com` (allow-listed in `next.config.ts`).

---

## Deployment

The site is configured for **Vercel** (`vercel.json` sets `framework: nextjs`). Vercel builds the `frontend/` app automatically; no additional configuration is required for a standard deployment.

---

## License

Private and proprietary — © Home Framing LTD. All rights reserved.
