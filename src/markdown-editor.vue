<template>
<div class="markdown-editor">
  <textarea :name="name"></textarea>
</div>
</template>

<script>
import SimpleMDE from 'simplemde';
import marked from 'marked';
import props from './props';

import events from './events';

export default {
  name: 'markdown-editor',
  mixins: [props],
  mounted() {
    if (this.autoinit) {
      this.initialize();
    }
  },
  activated() {
    const editor = this.simplemde;
    if (!editor) {
      return;
    }
    const isActive = editor.isSideBySideActive() || editor.isPreviewActive();
    if (isActive) {
      editor.toggleFullScreen();
    }
  },
  methods: {
    initialize() {
      const configs = Object.assign({
        element: this.$el.firstElementChild,
        initialValue: this.value,
        renderingConfig: {},
      }, this.configs);
      // 同步 value 和 initialValue 的值
      if (configs.initialValue) {
        this.$emit('input', configs.initialValue);
      }
      // 判断是否开启代码高亮
      if (this.highlight) {
        configs.renderingConfig.codeSyntaxHighlighting = true;
      }
      // 设置是否渲染输入的html
      marked.setOptions({
        sanitize: this.sanitize,
      });
      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs);
      // 添加自定义 previewClass
      const className = this.previewClass || '';
      this.addPreviewClass(className);
      // 绑定事件
      this.bindingEvents();
    },
    bindingEvents() {
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value());
      });
      events.forEach((event) => {
        this.simplemde.codemirror.on(event, (e) => {
          this.$emit(event, e);
        });
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
  padding: 0.5em;
}

.markdown-editor .editor-preview-active,
.markdown-editor .editor-preview-active-side {
  display: block;
}
</style>
