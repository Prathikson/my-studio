/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    
  ],

  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      colors: {
        zoroRed: '#de0f3f',
        appleBlue: "#0071fe",
        carbonGray: "#0A0A0A",
        smoothBlack: "#1e1e1e",
        jetBlack: "#000000",
        lightGray: "#f1f1f1",
        jetGray: "#e1e1e1",

        white60: "rgba(255, 255, 255, 0.6)",
        gray80: "rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
}
