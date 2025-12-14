/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary-catto": "#ff4800",
        "primary-light": "#ff6b35",
        "primary-dark": "#e63900",
        secondary: {
          purple: "#a855f7",
          pink: "#ec4899",
          cyan: "#06b6d4",
          blue: "#3b82f6",
        },
        accent: {
          yellow: "#fbbf24",
          green: "#10b981",
          teal: "#14b8a6",
        },
        dark: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #ff4800 0%, #ff6b35 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gradient-animated":
          "linear-gradient(270deg, #ff4800, #a855f7, #06b6d4, #10b981)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 72, 0, 0.5)",
        "glow-lg": "0 0 40px rgba(255, 72, 0, 0.6)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "inner-glow": "inset 0 0 20px rgba(255, 72, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 72, 0, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 72, 0, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
