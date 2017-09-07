# Vue-SimpleMDE
> Markdown Editor component for Vue.js. Support only vue2.x.

[![NPM](https://nodei.co/npm/vue-simplemde.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-simplemde/)

# Demo
[Demo Page](https://F-loat.github.io/vue-simplemde/)

# Use Setup

## Requirements
- vue@^2.0
- webpack@^2.0

## Install

``` bash
npm install vue-simplemde --save
```

## Use

``` javascript
// 全局引用
import Vue from 'vue'
import VueSimplemde from 'vue-simplemde'

Vue.use(VueSimplemde)
```

``` javascript
// 单个组件内引用
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default {
  components: {
    markdownEditor
  }
}
```

## Props
| 属性 | 类型 | 默认值 | 描述 |
| ----| ----- | ----- | ---- |
| value | String | 无 | 初始值，可使用v-model绑定 |
| preview-class | String | 无 | 自定义预览样式类 |
| autoinit | Boolean | true | 是否自动初始化 |
| highlight | Boolean | false | 是否开启高亮 |
| configs | Object | {} | [SimpleMDE的配置项](#configuration) |

## Examples

> 不再支持Vue1.x，可自行修改使用

``` vue
<template>
  <!-- 通过 v-model 控制 value -->
  <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

  <!-- 通过事件控制 value -->
  <markdown-editor :value="content" @input="handleInput"></markdown-editor>

  <!-- 添加配置 -->
  <markdown-editor :configs="configs"></markdown-editor>

  <!-- 不自动初始化 -->
  <markdown-editor :autoinit="false"></markdown-editor>
</template>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>

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
    mounted: {
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
```

## Markdown style
> e.g. 使用Github的markdown样式

[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### install
``` bash
$ npm install --save github-markdown-css
```

### use
``` vue
<template>
  <markdown-editor preview-class="markdown-body"></markdown-editor>
</template>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import '~github-markdown-css';
</style>
```

## Highlight

### install
```
$ npm install --save highlight.js
```

### use
``` vue
<template>
  <markdown-editor :highlight="true"></markdown-editor>
</template>

<script>
  import hljs from 'highlight.js';

  window.hljs = hljs;
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import '~highlight.js/styles/atom-one-dark.css';
  /* 高亮主题可选列表：https://github.com/isagalaev/highlight.js/tree/master/src/styles */
</style>
```

## Editor Theme ([simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base/wiki/List-of-themes))
> e.g. 使用simplemde-theme-base主题

### install
```
$ npm install --save simplemde-theme-base
```

### use
``` vue
<style>
  @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
  /* 无需引入simplemde.min.css */
</style>
```

## Configuration
> SimpleMDE的配置

* [中文](doc/configuration_zh.md)
* [English](doc/configuration_en.md)

## Dependencies

* [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor)

## Licence

vue-simplemde is open source and released under the MIT Licence.

Copyright (c) 2017 F-loat
