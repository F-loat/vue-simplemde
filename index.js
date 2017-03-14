'use strict';

/**
 * vue-simplemde
 * @author F-loat
 */

const markdownEditor = require('./markdown-editor.vue');

const VueSimplemde = {
  markdownEditor: markdownEditor,
  install: function(Vue) {
    Vue.component('markdown-editor', markdownEditor);
  },
};

module.exports = VueSimplemde;
