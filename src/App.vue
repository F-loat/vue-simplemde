<template>
  <div id="editor-wrap">
    <div class="editor">
      <h4 class="title">默认配置</h4>
      <markdown-editor v-model="content"></markdown-editor>
    </div>
    <div class="editor">
      <h4 class="title">隐藏底部统计栏&使用github的markdown样式</h4>
      <markdown-editor v-model="content" :configs="configs1" preview-class="markdown-body"></markdown-editor>
    </div>
    <div class="editor">
      <h4 class="title">开启代码高亮</h4>
      <markdown-editor v-model="content" :configs="configs2" preview-class="markdown-body"></markdown-editor>
    </div>
    <div class="editor theme">
      <h4 class="title">代码块使用highlight的主题背景色</h4>
      <markdown-editor v-model="content" :configs="configs3" preview-class="markdown-body"></markdown-editor>
    </div>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
require.ensure([], () => require('github-markdown-css'), 'markdown-style')

export default {
  name: 'index',
  data () {
    return {
      content: '``` \nconsole.log("lalala") \n```',
      configs1: {
        status: false
      },
      configs2: {
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      },
      configs3: {
        renderingConfig: {
          codeSyntaxHighlighting: true,
          highlightingTheme: 'atom-one-dark'
        }
      }
    }
  },
  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    }
  },
  mounted () {
  },
  methods: {
    handleInput (val) {
      console.log(val)
    }
  },
  components: {
    markdownEditor
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#editor-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0 10px;
}

.editor {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 480px) {
  .editor {
    width: 100%;
  }
}

.title {
  text-align: center;
}

.markdown-editor .CodeMirror {
  height: 20vh;
  min-height: 20vh;
}

/* 使用highlight主题的代码块背景 */
.theme .hljs.editor-preview pre, .theme .hljs.editor-preview-side pre {
  background: transparent
}
</style>
