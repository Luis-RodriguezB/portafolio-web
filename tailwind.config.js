/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounceSlow 1.8s infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
};
