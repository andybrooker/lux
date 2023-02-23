/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000",
        gray: {
          1: "#fcfcfc",
          2: "#f8f8f8",
          3: "#f3f3f3",
          4: "#ededed",
          5: "#e8e8e8",
          6: "#e2e2e2",
          7: "#dbdbdb",
          8: "#c7c7c7",
          9: "#8f8f8f",
          10: "#858585",
          11: "#6f6f6f",
          12: "#171717",
        },
        grayDark: {
          1: "#161616",
          2: "#1c1c1c",
          3: "#232323",
          4: "#282828",
          5: "#2e2e2e",
          6: "#343434",
          7: "#3e3e3e",
          8: "#505050",
          9: "#707070",
          10: "#7e7e7e",
          11: "#a0a0a0",
          12: "#ededed",
        },
        gold: {
          1: "#fdfdfc",
          2: "#fbf9f2",
          3: "#f5f2e9",
          4: "#eeeadd",
          5: "#e5dfd0",
          6: "#dad1bd",
          7: "#cbbda4",
          8: "#b8a383",
          9: "#978365",
          10: "#8c795d",
          11: "#776750",
          12: "#3b352b",
        },
      },
    },
  },
  plugins: [],
};
