module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: "#FFFFFF",
        white: "#FFFFFF",
        blue: "#43AFFF",
        violet: "#303F60",
        navy: "#1A253C",
        sky: "#D9EFFF",
        error: "#FF0000",
      },
      textColor: {
        default: "#FFFFFF",
        white: "#FFFFFF",
        blue: "#43AFFF",
        violet: "#303F60",
        navy: "#1A253C",
        sky: "#D9EFFF",
        error: "#FF0000",
      },
      backgroundColor: {
        default: "#FFFFFF",
        white: "#FFFFFF",
        blue: "#43AFFF",
        violet: "#303F60",
        navy: "#1A253C",
        sky: "#D9EFFF",
        error: "#FF0000",
      },
      placeholderColor: {
        primary: "var(--color-placeholder-primary)",
      },
      borderColor: {
        default: "#FFFFFF",
        white: "#FFFFFF",
        blue: "#43AFFF",
        violet: "#303F60",
        navy: "#1A253C",
        sky: "#D9EFFF",
        error: "#FF0000",
      },
      fontSize: {
        "2xs": "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "21px",
        xl: "32px",
        "2xl": "40px",
      },
      lineHeight: {
        "2xs": "14",
        xs: "16",
        sm: "20px",
        base: "22px",
        lg: "27px",
        xl: "48px",
        "2xl": "64px",
      },
      screens: {
        // sm: '48rem', // min-width:320px use this selector for mobile screens or use nothing
        md: "48rem", // min-width:360px use this selector for tablet screens
        lg: "80rem", // min-width:768px use this selector for pc screens
        // xl: '85.375rem', // min-width:1366px use this selector for large screens
      },
      fontFamily: {
        "family-regular": "var(--font-family-regular)",
        "family-medium": "var(--font-family-medium)",
        "family-semi-bold": "var(--font-family-semi-bold)",
        "family-bold": "var(--font-family-bold)",
        sans: ["var(--font-family-regular)", "var(--font-family-sans)"],
        serif: ["var(--font-family-regular)", "var(--font-family-serif)"],
        mono: ["var(--font-family-regular)", "var(--font-family-mono)"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
