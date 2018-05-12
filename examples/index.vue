<template>
  <div>
    <!-- use v-model control value -->
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

    <!-- use event control value -->
    <markdown-editor :value="content" @input="handleInput"></markdown-editor>

    <!-- add config -->
    <markdown-editor :configs="configs"></markdown-editor>

    <!-- disable auto init -->
    <markdown-editor :autoinit="false"></markdown-editor>
  </div>
</template>

<script>
  import markdownEditor from 'vue-simplemde/src/markdown-editor'

  // Base example
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          spellChecker: false // disable spell check
        }
      }
    }
  }

  // Complete example
  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          status: false, // disable the status bar at the bottom
          spellChecker: false // disable spell check
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

      // 'change' envent has bound, via @input attache an event listener
      // You can attache events in this [list](https://codemirror.net/doc/manual.html#events) yourself if necessary
      this.simplemde.codemirror.on('beforeChange', (instance, changeObj) => {
        // do some things
      })

      // remove SimpleMDE, when component destroy will invoke
      this.simplemde = null

      // some useful methods
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
