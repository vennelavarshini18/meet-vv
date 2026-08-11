/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A67C52", // Bronze Aura
        primaryLight: "#D9C5A0", // Gilded Champagne
        primarySparkle: "#E5DFD0", // Champagne Sparkle
        secondary: "#4D574E", // Dark Olive
        secondaryLight: "#A3B1A5", // Bright Olive for text accents (3rd color)
        secondaryDark: "#303531", // Very Dark Olive
        darkBase: "#000000", // Deep Onyx Black
        darkSurface: "#202221", // Very dark olive black surface
        darkSurfaceLighter: "#2D2D2D", // Dark Charcoal Velvet
        darkBorder: "#303531", // Dark Olive for subtle borders
        textMain: "#FDFBF7", // Brightest Pearl for main Headings
        textBody: "#E5DFD0", // Champagne Sparkle for highly visible paragraphs
        textMuted: "#D9C5A0", // Gilded Champagne for soft subtext
      },
      backdropBlur: {
        xs: "2px"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
