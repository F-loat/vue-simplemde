module.exports = {
  // some nuxt config...
  plugins: [
    { src: '~plugins/nuxt-simplemde-plugin.js', ssr: false }
  ],
  css: [
    'easymde/dist/easymde.min.css'
  ]
}
