import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',
    css: [
        '~/assets/styles/tailwind.css'
    ],
    buildModules: [
      ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN}]
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
})
