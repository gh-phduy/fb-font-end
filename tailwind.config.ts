import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {

        bg: {
          '1': "hsl(var(--bg-1))",
          '2': "hsl(var(--bg-2))",
          '3': "hsl(var(--bg-3))",
          '4': "hsl(var(--bg-4))",
          '5': "hsl(var(--bg-5))",
        },
        text: {
          '1': "hsl(var(--text-1))",
          '2': "hsl(var(--text-2))",
        },
        line: {
          '': "hsl(var(--line))",
          '1': "hsl(var(--line-1))",
        },
        main: "hsl(var(--main))",

        // Default of Shadcn/ui

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        '320': '320px',
        '380': '380px',
        '400': '400px',
        '430': '430px',
        '432': '432px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1100': '1100px',
        '1120': '1120px',
        '1250': '78.125rem',
        '1600': '1600px',
        '1760': '1760px',
        '1900': '1900px'
      },
      boxShadow: {
        'full': '0px 10px 15px -3px rgba(0,0,0,0.1);',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('daisyui')],
} satisfies Config

export default config