/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-black": "rgba(36, 36, 36, 1)",
        "btn-primary": "rgba(48, 48, 48, 1)",
        "btn-hover": "rgba(58, 58, 58, 1)",
        "brand-green": "rgba(175, 252, 65, 1)",
      },
      width: {
        "90%": "90%",
        "250px": "250px",
      },
      height: {
        "350px": "350px",
      },
    },
  },
  plugins: [],
};
