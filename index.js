/**
 * vue-simplemde
 * @author F-loat
 */

import markdownEditor from './markdown-editor'

const VueSimplemde = {
  markdownEditor,
  install (Vue) {
    Vue.component('markdown-editor', markdownEditor)
  }
}

module.exports = VueSimplemde
