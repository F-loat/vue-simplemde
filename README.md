# Vue-SimpleMDE
> Markdown Editor component for Vue.js. Support only vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)
[![npm downloads](http://img.shields.io/npm/dm/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)

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
| sanitize | Boolean | false | 开启后不渲染输入的html |
| configs | Object | {} | [SimpleMDE的配置项](#configuration) |

## Examples

> 不再支持Vue1.x，可自行修改使用

* [Demo Page](https://f-loat.github.io/vue-simplemde/)
* [Demo Source](https://github.com/F-loat/vue-simplemde/tree/gh-pages)
* [Simple Example](./examples/index.vue)
* [Nuxt Example](./examples/nuxt)

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
