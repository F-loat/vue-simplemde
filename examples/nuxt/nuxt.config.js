module.exports = {
  // some nuxt config...
  plugins: [
    { src: '~plugins/nuxt-simplemde-plugin.js', ssr: false },
  ],
  css: [
    'simplemde/dist/simplemde.min.css',
  ],
};
