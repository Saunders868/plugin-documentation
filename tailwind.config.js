/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        toast: {
          'from': {
              transform: 'translateY(100%)',
          },
          'to': {
              transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'toast-animation': 'toast 0.3s',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
