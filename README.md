# Vue-SimpleMDE
> Markdown Editor component for Vue.js. Support only vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)
[![npm downloads](http://img.shields.io/npm/dm/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)

## Examples

> No longer support Vue1.x, you can modify to use

* [Demo Page](https://f-loat.github.io/vue-simplemde/)
* [Demo Source](https://github.com/F-loat/vue-simplemde/tree/gh-pages)
* [Simple Example](./examples/index.vue)
* [Nuxt Example](./examples/nuxt)

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
// Global reference
import Vue from 'vue'
import VueSimplemde from 'vue-simplemde'

Vue.use(VueSimplemde)
```

``` javascript
// Internal reference in a single component
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default {
  components: {
    markdownEditor
  }
}
```

## Props
| property | type | default | describe |
| ----| ----- | ----- | ---- |
| value | String | None | Initial value, v-model binding can be used |
| preview-class | String | None | Custom preview style class |
| autoinit | Boolean | true | Automatic initialization |
| highlight | Boolean | false | Is it open to highlight |
| sanitize | Boolean | false | HTML that does not render input after opening |
| configs | Object | {} | [SimpleMDE's config](#configuration) |

## Markdown style
> e.g. use Github's markdown style

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
  /* Highlight theme list: https://github.com/isagalaev/highlight.js/tree/master/src/styles */
</style>
```

## Editor Theme ([simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base/wiki/List-of-themes))
> e.g. use simplemde-theme-base theme

### install
```
$ npm install --save simplemde-theme-base
```

### use
``` vue
<style>
  @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
  /* no need import imposimplemde.min.css */
</style>
```

## Configuration
> SimpleMD's config

* [中文](doc/configuration_zh.md)
* [English](doc/configuration_en.md)

## Dependencies

* [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor)

## Licence

vue-simplemde is open source and released under the MIT Licence.

Copyright (c) 2018 F-loat
