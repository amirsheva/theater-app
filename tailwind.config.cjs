module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#6366f1", // indigo-500
          dark: "#4f46e5",    // indigo-600
        },
      },
    },
  },
  plugins: [],
}
