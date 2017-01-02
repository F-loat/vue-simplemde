/**
 * vue-simplemde
 * @author F-loat
 */

const markdownEditor = require('./markdown-editor')

const VueSimplemde = {
  markdownEditor,
  install (Vue) {
    Vue.component('markdown-editor', markdownEditor)
  }
}

module.exports = VueSimplemde
