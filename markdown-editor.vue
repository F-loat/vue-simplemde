<template>
  <div class="markdown-editor">
    <textarea></textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'

export default {
  name: 'markdown-editor',
  props: {
    value: String,
    previewClass: String,
    configs: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.initialize()
  },
  methods: {
    initialize () {
      var configs = this.configs
      configs.element = configs.element || this.$el.firstChild
      configs.initialValue = configs.initialValue || this.value

      // 开启代码高亮
      if (configs.renderingConfig && configs.renderingConfig.codeSyntaxHighlighting) {
        require.ensure([], () => {
          var theme = configs.renderingConfig.highlightingTheme || 'default'
          window.hljs = require('highlight.js')
          require('highlight.js/styles/' + theme + '.css')
        }, 'highlight')
      }

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs)

      // 添加自定义 previewClass
      this.addPreviewClass()

      // 绑定输入事件
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value())
      })
    },
    addPreviewClass () {
      var _class = (this.configs.renderingConfig && this.configs.renderingConfig.codeSyntaxHighlighting) ? (this.previewClass || '') + ' hljs' : (this.previewClass || '')
      var wrapper = this.simplemde.codemirror.getWrapperElement()
      var preview = document.createElement('div')
      wrapper.nextSibling.className += ' ' + _class
      preview.className = 'editor-preview ' + _class
      wrapper.appendChild(preview)
    }
  }
}
</script>

<style>
.markdown-editor .hljs {
  display: none
}

.markdown-editor .editor-preview-active, .markdown-editor .editor-preview-active-side {
  display: block;
}
</style>
