/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#a855f7",
        dark: "#05070f"
      },
      backdropBlur: {
        xs: "2px"
      },
     fontFamily: {
  heading: ["Space Grotesk", "sans-serif"],
  body: ["Inter", "sans-serif"]
}

    }
  },
  plugins: []
};
