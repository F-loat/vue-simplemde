module.exports = {
  // some nuxt config...
  plugins: [
    { src: '~plugins/nuxt-simplemde-plugin.js', mode: 'client' },
  ],
  css: [
    'simplemde/dist/simplemde.min.css',
  ],
};
