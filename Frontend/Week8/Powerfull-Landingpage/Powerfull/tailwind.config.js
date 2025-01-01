/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "6px 6px 12px rgba(0, 0, 0, 0.8)",
        },
      });
    },
  ],
};
