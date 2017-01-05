# Vue-SimpleMDE
> SimpleMDE - Markdown Editor component for Vue.js

[![NPM](https://nodei.co/npm/vue-simplemde.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-simplemde/)

# Demo
[Demo Page](https://F-loat.github.io/vue-simplemde/)

# Use Setup

## Install vue-simplemde

``` bash
npm install vue-simplemde --save
```

## Use

``` javascript
// import with ES6
import Vue from 'vue'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

// require with Webpack/Node.js
var Vue = require('vue')
var VueSimplemde = require('vue-simplemde')
require('simplemde/dist/simplemde.min.css')

// use
Vue.use(VueSimplemde)
```

``` javascript
// or use with component(ES6)

// main.js
import 'simplemde/dist/simplemde.min.css'

// component
import { markdownEditor } from 'vue-simplemde'
export default {
  components: {
    markdownEditor
  }
}
```

## Examples

``` html
<!-- 通过 v-model 控制 value -->
<markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

<!-- 通过事件控制 value -->
<markdown-editor :value="content" @input="handleInput"></markdown-editor>

<!-- 添加配置 -->
<markdown-editor :configs="configs"></markdown-editor>
```

``` javascript
// 获取编辑器对象，添加事件绑定
export default {
  data () {
    return {
      content: 'lalala',
      configs: {
        status: false,
        renderingConfig: {
          codeSyntaxHighlighting: true, // 开启代码高亮
          highlightingTheme: 'atom-one-light' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
        }
      }
    }
  },
  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    }
  },
  mounted: {
    console.log(this.simplemde)
    this.simplemde.value('lalala')

    // You can catch the following list of events: https://codemirror.net/doc/manual.html#events
    this.simplemde.codemirror.on('change', () => {
      console.log(this.simplemde.value())
    })

    // Removing SimpleMDE from textarea
    this.simplemde.toTextArea()
    this.simplemde = null

    // Useful methods
    this.simplemde.isPreviewActive() // returns boolean
    this.simplemde.isSideBySideActive() // returns boolean
    this.simplemde.isFullscreenActive() // returns boolean
    this.simplemde.clearAutosavedValue() // no returned value
  }
}
```

## Theme
> e.g. 使用Github的markdown样式

[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### install
```
$ npm install --save github-markdown-css
```

### use
``` html
<markdown-editor preview-class="markdown-body"></markdown-editor>
```

``` javascript
import 'github-markdown-css'
```

## Configuration

* [中文](doc/configuration_zh.md)
* [English](doc/configuration_en.md)

## Dependencies

* [SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor)
* [Highlight.js](https://github.com/isagalaev/highlight.js)

## Licence

vue-simplemde is open source and released under the MIT Licence.

Copyright (c) 2016 F-loat
