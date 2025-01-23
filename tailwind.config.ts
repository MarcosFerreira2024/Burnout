import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

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
        title: ["64px", "78.8px"],
        titleMobile: ["42px", "51.2px"],
        produtosTitle: ["24px", "28.8px"],
        produtosSubtitle: ["16px", "19.2px"],
        produtoTitle: ["36px", "42.4px"],
        produtoMobile: ["28px", "32px"],
        produtoSubtitle: ["24px", "28.8px"],
        produtoSubtitleMobile: ["16px", "19.2px"],
        categories: ["20px", "24px"],
        categoriesMobile: ["16px", "19.2px"],
        footerSubtitle: ["14px", "16.8px"],
        subtitle: ["16px", "19.2px"],
        subtitleMobile: ["12px", "14px"],
        label: ["24px", "28.8px"],
        labelMobile: ["16px", "19.2px"],
        search: ["20px", "24px"],
        searchMobile: ["16px", "19.2px"],
        placeholder: ["16px", "19.2px"],
        placeholderMobile: ["16px", "14px"],
        linkText: ["14px", "16.8px"],
        buttonForm: ["18px", "21.5px"]
      },

    },

  },
  plugins: [scrollbarHide]
} satisfies Config
