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
    configs: {
      type: Object
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

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs)

      // 绑定输入事件
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value())
      })
    }
  }
}
</script>
