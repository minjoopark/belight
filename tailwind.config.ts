import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          500: '#3b4c68',
          600: '#2d3a52',
          700: '#1f283c',
          800: '#151b28',
          900: '#0a0e17',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;