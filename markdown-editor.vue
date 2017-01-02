<template>
  <textarea class="markdown-editor"></textarea>
</template>

<script>
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'

export default {
  name: 'markdown-editor',
  props: {
    value: String
  },
  mounted () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.simplemde = new SimpleMDE({ element: this.$el })
      this.simplemde.value(this.value)

      // 绑定输入事件
      this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value())
      })
    }
  },
  watch: {
    value (val) {
      this.simplemde.value(val)
    }
  }
}
</script>
