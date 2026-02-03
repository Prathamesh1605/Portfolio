/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        midnight: "#111827",
        mist: "#E5E7EB",
        accent: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59, 130, 246, 0.35), 0 12px 40px rgba(37, 99, 235, 0.25)",
        soft: "0 20px 60px rgba(2, 6, 23, 0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(600px circle at 10% 10%, rgba(59,130,246,0.14), transparent 45%), radial-gradient(700px circle at 90% 20%, rgba(14,165,233,0.12), transparent 40%)",
      },
    },
  },
  plugins: [],
};
