const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    enabled: false,
    content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
    preserveHtmlElements: false
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ["'Mulish'", "sans-serif"]
      },
      colors: {
        amber: colors.amber,
        rose: colors.rose,
        lime: colors.lime,
        gray: colors.gray,
        coolgray: colors.coolGray,
        warmgray: colors.warmGray,
        truegray: colors.trueGray,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        fuchsia: colors.fuchsia
      },
      animation: {
        moveBackground: "moveBackground 10s ease-in infinite",
        glitch: "glitch 0.5s linear infinite",
        shake: "shake .5s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        scaleMenu: "scaleMenu .4s ease-in"
      },
      keyframes: {
        moveBackground: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "50% 0" }
        },
        glitch: {
          "0%, 100%": {
            textShadow: "-1.5px -1.5px 0 #ff0, 1.5px 1.5px 0 #f00"
          },
          "25%": {
            textShadow: "1.5px 1.5px 0 #ff0, -1.5px -1.5px 0 #f00"
          },
          "50%": {
            textShadow: "1.5px -1.5px 0 #ff0, -1.5px 1.5px 0 #f00"
          },
          "75%": {
            textShadow: "-1.5px 1.5px 0 #ff0, 1.5px -1.5px 0 #f00"
          }
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        scaleMenu: {
          from: { clipPath: "circle(0% at 0% 0%)" },
          to: { clipPath: "circle(100% at 100% 100%)" }
        }
      },
      rotate: {
        "-135": "-135deg",
        "-225": "-225deg",
        135: "135deg",
        225: "225deg"
      }
    }
  },
  variants: {
    extend: {
      transitionProperty: ["motion-safe", "motion-reduce"]
    }
  },
  plugins: []
};
