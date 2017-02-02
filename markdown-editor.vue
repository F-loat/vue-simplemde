<template>
  <div class="markdown-editor">
    <textarea></textarea>
  </div>
</template>

<script>
'use strict';

import SimpleMDE from 'simplemde';

export default {
  name: 'markdown-editor',
  props: {
    value: String,
    previewClass: String,
    customTheme: {
      type: Boolean,
      default() {
        return false;
      },
    },
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      let configs = {};
      Object.assign(configs, this.configs);
      configs.element = configs.element || this.$el.firstChild;
      configs.initialValue = configs.initialValue || this.value;

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs);

      // 判断是否开启代码高亮
      if (configs.renderingConfig && configs.renderingConfig.codeSyntaxHighlighting) {
        require.ensure([], () => {
          const theme = configs.renderingConfig.highlightingTheme || 'default';
          window.hljs = require('highlight.js');
          require(`highlight.js/styles/${theme}.css`);
        }, 'highlight');
      }

      // 判断是否引入样式文件
      if (!this.customTheme) {
        require('simplemde/dist/simplemde.min.css');
      }

      // 添加自定义 previewClass
      const className = this.previewClass || '';
      this.addPreviewClass(className);

      // 绑定输入事件
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value());
      });
    },
    addPreviewClass(className) {
      const wrapper = this.simplemde.codemirror.getWrapperElement();
      const preview = document.createElement('div');
      wrapper.nextSibling.className += ` ${className}`;
      preview.className = `editor-preview ${className}`;
      wrapper.appendChild(preview);
    },
  },
  destroyed() {
    this.simplemde.toTextArea();
    this.simplemde = null;
  },
  watch: {
    value(val) {
      if (val === this.simplemde.value()) return;
      this.simplemde.value(val);
    },
  },
};
</script>

<style>
.markdown-editor .markdown-body {
  padding: 0.5em
}

.markdown-editor .editor-preview-active, .markdown-editor .editor-preview-active-side {
  display: block;
}
</style>
