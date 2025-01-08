This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# 🌟 Next.js Project
This is a modern web application built using [Next.js], [Tailwind CSS], and [TypeScript]. 

## 🚀 Features

- **Next.js App Router**: I have used dynamic routes for result page.
- **TypeScript Support**: Strongly typed code for better development experience.
- **Tailwind CSS**: Utility-first styling for rapid UI development and to avoid repeating.
- **Dynamic Routing**: Support for dynamic pages with parameters (e.g., `[makeId]` and `[yearId]`).
- **Reusable Components**: Organized and reusable components for better scalability.

## React Icons
I use react icons for different cases.

## Tailwind
I used globals.css to create utility classes, avoiding the need to repeatedly type the same classes, and customized the Tailwind configuration to define specific colors instead of writing their hex or RGB values each time.
## Structure of Web Application
root/
│
├── api/                  # API-related files (if needed, otherwise remove this folder)
│   └── public/           # Public assets (icons, images, etc.)
│       └── [icons, images, etc.]
│
├── src/                  # Main source folder
│   ├── app/              # Application pages
│   │   ├── page.tsx      # Main page file
│   │   ├── layout.tsx    # Main layout file
│   │   └── result/       # Nested routes for "result"
│   │       ├── [makeId]/ # Dynamic route for "makeId"
│   │       │   └── [yearId]/ # Nested dynamic route for "yearId"
│   │       │       └── page.tsx
│   │
│   ├── components/       # Reusable components
│   │   ├── _common/      # Common components shared across the app
│   │   ├── _home/        # Components specific to the home page
│   │   ├── _layout/      # Layout-specific components
│   │   └── _result/      # Components specific to the "result" page
│   │
│   ├── data/             # Static or mock data files
│
├── .gitignore            # Git ignore rules
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── package-lock.json     # Lock file for dependencies
├── README.md             # Project documentation
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint shared config
├── postcss.config.mjs    # PostCSS configuration
├── next-env.d.ts         # TypeScript Next.js types (Git ignored)
├── .env.local            # Local environment variables (Git ignored)
├── node_modules/         # Node dependencies (Git ignored)

## Fetch API
I fetch the data using the Fetch API instead of the Axios API because it's a small project.