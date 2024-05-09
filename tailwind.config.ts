import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": "2rem",
        "6xl": "3.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        waves: "url('/waves.svg')",
        "hero-large":
          "linear-gradient(150deg,rgba(0,0,0,0)54%,rgba(254,243,199,1)54%)",
        "hero-medium":
          "linear-gradient(150deg,rgba(0,0,0,0)50%,rgba(254,243,199,1)50%)",
        "hero-small":
          "linear-gradient(150deg,rgba(0,0,0,0)42%,rgba(254,243,199,1)42%)",
      },
      colors: {
        byellow: "#78350F",
        bdarkyellow: "#451b03",
        dark: "#0F172A",
        banana: "#fffbec",
      },
      boxShadow: {
        product: "0px 0px 15px 0px #FFFFFF12,0px 25px 50px -12px #FFFFFF40",
        "join-us": "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
        testimonial: "0px 0px 6px 0px #00000012,0px 10px 15px -3px #0000001A",
        tab: "0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A",
        "sneaker-card":
          "0px 0px 10px 0px #00000012,0px 20px 25px -5px #0000001A",
        video: "0px 0px 15px 0px #00000012,0px 25px 50px -12px #00000040",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
