// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      title: "cattocss",
      meta: [
        {
          name: "description",
          content:
            "cattocss is a CSS animations library online where you can use the source code without installing dependencies in your web project.",
        },
        {
          name: "keywords",
          content:
            "cattocss, CATTO, catto.css, catto-css, library, libreria, css library, animations, web, css, CSS, HTML5, HTML, css-animations, animaciones, website, sitio web, gatocss, computer, software, avalojandro, Avalojandro",
        },
        { name: "language", content: "en" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/animations.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: "vercel",
  },
});
