import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        404: "404.html",
        advertise: "advertise.html",
        authors: "authors.html",
        comingSoon: "coming-soon.html",
        contact: "contact.html",
        news: "news.html",
        policy: "privacy-policy.html",
        terms: "terms-and-conditions.html",
        single: "single-blog.html",
        author: "single-author.html",
        podcast: "single-podcast.html",
        podcasts: "podcast.html",
      }
    }
  },
  plugins: [tailwindcss()],
  base: '/semech-blog/'
});
