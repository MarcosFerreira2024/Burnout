import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secundaryTitle: 'var(--secundary-title)',
        secundarySubtitle: 'var(--secundary-subtitle)',
        secundaryBg: 'var(--secundary-bg)',
        mainBg: 'var(--main-bg)',
        mainSubtitle: 'var(--main-subtitle)',
        mainStroke: 'var(--main-stroke)',
        mainTitle: 'var(--main-title)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        alex: ['var(--font-alex)', 'cursive'],
      },
      fontSize: {
        title: ["64px", "78.8px",],
        subtitle: ["16px", "28.8px"],
        label: ["24px", "28.8px"],
        linkForm: ["14px", "16.8px"],
        buttonForm: ["18px", "21.5px"],
        placeholder: ["16px", "19.2px"]
      },
    },
  },
  plugins: [],
} satisfies Config;
