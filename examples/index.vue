<template>
  <div>
    <!-- 通过 v-model 控制 value -->
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

    <!-- 通过事件控制 value -->
    <markdown-editor :value="content" @input="handleInput"></markdown-editor>

    <!-- 添加配置 -->
    <markdown-editor :configs="configs"></markdown-editor>

    <!-- 不自动初始化 -->
    <markdown-editor :autoinit="false"></markdown-editor>
  </div>
</template>

<script>
  import markdownEditor from 'vue-simplemde/src/markdown-editor'

  // 基础用法
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          spellChecker: false // 禁用拼写检查
        }
      }
    }
  }

  // 完整示例
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          status: false, // 禁用底部状态栏
          spellChecker: false // 禁用拼写检查
        }
      }
    },
    computed: {
      simplemde () {
        return this.$refs.markdownEditor.simplemde
      }
    },
    mounted () {
      console.log(this.simplemde)
      this.simplemde.togglePreview()

      // 'change'事件已经绑定，可以通过@input指定处理器
      // 如果需要，你可以自行绑定这个列表中的其他事件: https://codemirror.net/doc/manual.html#events
      this.simplemde.codemirror.on('beforeChange', (instance, changeObj) => {
        // do some things
      })

      // 移除SimpleMDE，组件销毁时会自动调用
      this.simplemde = null

      // 一些有用的方法
      this.$refs.markdownEditor.initialize() // init
      this.simplemde.toTextArea()
      this.simplemde.isPreviewActive() // returns boolean
      this.simplemde.isSideBySideActive() // returns boolean
      this.simplemde.isFullscreenActive() // returns boolean
      this.simplemde.clearAutosavedValue() // no returned value
      this.simplemde.markdown(this.content) // returns parsed html
      this.simplemde.codemirror.refresh() // refresh codemirror
    },
    methods: {
      handleInput () {
        // do some things
      }
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
