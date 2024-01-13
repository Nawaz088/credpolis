module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  
  theme: {
    screens: {lg: {max: "1200px"}, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
     
      colors: {
        backgroundColor: {
          'gradient-rgba': 'linear-gradient(96deg, rgba(201, 228, 214, 0.34) -3.81%, rgba(201, 228, 222, 0.09) 58.17%, rgba(201, 228, 222, 0.15) 72.34%, rgba(201, 228, 220, 0.19) 109.53%)',
        },
        blue_gray: {
          50: "#f0f1f3",
          700: "#2a6877",
          900: "#1b424c",
          "50_33": "#f0f1f333",
          "900_01": "#2f383b",
          "100_99": "#c8e4dd99",
          "100_99_02": "#cde4df99",
          "100_99_01": "#cfe4e099",
          "700_7c": "#2a68777c",
          'C9E4D6': '#C9E4D6',
        },
        gray: {
          600: "#7f7a7a",
          700: "#6e6868",
          800: "#484d4e",
          900: "#212121",
          "800_02": "#424545",
          "800_01": "#424445",
          "300_99": "#dee3e699",
          "600_02": "#808180",
          "600_01": "#746e6e",
        },
        newblue: { 100: '#2A6877'},
        black: { 900: "#000000", "900_3e": "#0000003e", "900_0c": "#0000000c" },
        green: { 500: "#39c15f", 600: '#C9E4D6' },
        teal: { 300: "#50ac97" },
        white: { A700_01: "#fdfdfd", A700: "#ffffff" },
      },
      fontFamily: {
        raleway: "Raleway",
        dmsans: "DM Sans",
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(135deg ,#c8e4dd99,#cde4df99,#cfe4e099,#dee3e699)",
      },
      boxShadow: { bs: "0px 0px  1px 2px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],

};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "neutral-0": "#fff",
//         c5: "rgba(0, 0, 0, 0.2)",
//         dimgray: {
//           "100": "#756e6e",
//           "200": "#6f6969",
//         },
//         black: "#000",
//         darkslategray: {
//           "100": "#494e4f",
//           "200": "#424545",
//           "300": "#1b424c",
//         },
//         gray: {
//           "100": "#fdfdfd",
//           "200": "#7f7a7a",
//           "300": "#212121",
//         },
//         mediumseagreen: "#39c260",
//         whitesmoke: {
//           "100": "#f2f2f2",
//           "200": "rgba(240, 241, 243, 0.2)",
//         },
//         "neutral-10": "#486284",
//       },
//       spacing: {},
//       fontFamily: {
//         raleway: "Raleway",
//         "body-small": "'DM Sans'",
//         poppins: "Poppins",
//         montserrat: "Montserrat",
//       },
//       borderRadius: {
//         "31xl": "50px",
//         xl: "20px",
//         "20xl": "39px",
//       },
//     },
//     fontSize: {
//       base: "16px",
//       "21xl": "40px",
//       lg: "18px",
//       "3xl": "22px",
//       "11xl": "30px",
//       "14xl": "33px",
//       "5xl": "24px",
//       inherit: "inherit",
//     },
//     screens: {
//       lg: {
//         max: "1200px",
//       },
//       md: {
//         max: "960px",
//       },
//       sm: {
//         max: "420px",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };