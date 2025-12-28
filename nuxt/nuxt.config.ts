// Import defineNuxtConfig from nuxt
import { defineNuxtConfig } from "nuxt"

// Nuxt configuration
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Geist: [400, 500, 600, 700],
      "Geist Mono": [400, 500],
    },
    display: "swap",
  },
  app: {
    head: {
      title: "KikuAI - Turn messy inputs into usable data",
      meta: [
        {
          name: "description",
          content: "Extract data from charts and cluster spam patterns with AI-powered tools. API + Dashboard.",
        },
        { name: "theme-color", content: "#1a1a1f" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
    },
  },
  css: ["~/assets/css/main.css"],
})
