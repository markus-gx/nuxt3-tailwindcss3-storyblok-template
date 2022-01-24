module.exports = {
  content: [
    './src/assets/**/*.{vue,js,css}',
    './src/components/**/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/app.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
