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
      var configs = JSON.parse(JSON.stringify(this.configs))
      configs.element = configs.element || this.$el.firstChild
      configs.initialValue = configs.initialValue || this.value

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs)

      // 开启代码高亮
      if (configs.renderingConfig && configs.renderingConfig.codeSyntaxHighlighting) {
        require.ensure([], () => {
          var theme = configs.renderingConfig.highlightingTheme || 'default'
          window.hljs = require('highlight.js')
          require('highlight.js/styles/' + theme + '.css')
        }, 'highlight')
      }

      // 添加自定义 previewClass
      var _class = this.previewClass || ''
      if (configs.renderingConfig && configs.renderingConfig.codeSyntaxHighlighting) {
        _class += ' hljs'
      }
      this.addPreviewClass(_class)

      // 绑定输入事件
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value())
      })
    },
    addPreviewClass (_class) {
      var wrapper = this.simplemde.codemirror.getWrapperElement()
      var preview = document.createElement('div')
      wrapper.nextSibling.className += ' ' + _class
      preview.className = 'editor-preview ' + _class
      wrapper.appendChild(preview)
    }
  },
  destroyed () {
    this.simplemde.toTextArea()
    this.simplemde = null
  },
  watch: {
    value (val) {
      if (val === this.simplemde.value()) return
      this.simplemde.value(val)
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
