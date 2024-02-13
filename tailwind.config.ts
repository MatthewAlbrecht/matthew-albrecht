import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { type RecursiveKeyValuePair } from "tailwindcss/types/config";

function withOpacity(
  variableName: string,
): ({ opacityValue }: { opacityValue: string }) => string {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          gray: "hsl(var(--background-gray))",
          tan: "hsl(var(--background-tan))",
          work: "hsl(var(--background-work))",
        },
        foreground: withOpacity(
          "--foreground",
        ) as unknown as RecursiveKeyValuePair<string, string>,
        primary: {
          DEFAULT: withOpacity("--primary") as unknown as RecursiveKeyValuePair<
            string,
            string
          >,
          foreground: withOpacity(
            "--primary-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        secondary: {
          DEFAULT: withOpacity(
            "--secondary",
          ) as unknown as RecursiveKeyValuePair<string, string>,
          foreground: withOpacity(
            "--secondary-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        hamburger: {
          DEFAULT: withOpacity(
            "--hamburger",
          ) as unknown as RecursiveKeyValuePair<string, string>,
          foreground: withOpacity(
            "--hamburger-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
          alt: withOpacity(
            "--hamburger-alt",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        destructive: {
          DEFAULT: withOpacity(
            "--destructive",
          ) as unknown as RecursiveKeyValuePair<string, string>,
          foreground: withOpacity(
            "--destructive-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        muted: {
          DEFAULT: withOpacity("--muted") as unknown as RecursiveKeyValuePair<
            string,
            string
          >,
          foreground: withOpacity(
            "--muted-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        accent: {
          DEFAULT: withOpacity("--accent") as unknown as RecursiveKeyValuePair<
            string,
            string
          >,
          foreground: withOpacity(
            "--accent-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        popover: {
          DEFAULT: withOpacity("--popover") as unknown as RecursiveKeyValuePair<
            string,
            string
          >,
          foreground: withOpacity(
            "--popover-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        card: {
          DEFAULT: withOpacity("--card") as unknown as RecursiveKeyValuePair<
            string,
            string
          >,
          foreground: withOpacity(
            "--card-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
        splash: {
          foreground: withOpacity(
            "--splash-foreground",
          ) as unknown as RecursiveKeyValuePair<string, string>,
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      minHeight: {
        fill: "var(--fill-height)",
        "fill-splash": "var(--fill-height-splash)",
      },
      height: {
        fill: "var(--fill-height)",
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
        "up-and-right": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": {
            transform: "translateX(30px) translateY(-30px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "up-and-right": "up-and-right 0.3s ease-out",
      },
      gridTemplateColumns: {
        main: "39% 61%",
        resume: "100px 250px auto",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
