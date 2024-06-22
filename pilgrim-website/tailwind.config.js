/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // Sky Blue
        secondary: "#F5A623", // Sunset Orange
        accent: "#50E3C2", // Turquoise
        background: "#F8F8F8", // Light Grey
        text: "#333333", // Dark Grey
        border: "#D1D1D1", // Medium Grey
        hover: "#357ABD", // Darker Sky Blue
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #4A90E2 0%, #50E3C2 100%)",
        "gradient-secondary":
          "linear-gradient(90deg, #F5A623 0%, #F8F8F8 100%)",
      },
    },
  },
  plugins: [],
};
