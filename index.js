/**
 * vue-simplemde
 * @author F-loat
 */

import markdownEditor from './src/markdown-editor.vue';

export default  {
  markdownEditor,
  install(Vue) {
    Vue.component('markdown-editor', markdownEditor);
  },
};

export {
  markdownEditor,
};
