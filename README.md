# Vue-SimpleMDE
> Markdown Editor component for Vue.js. Support only vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)
[![npm downloads](http://img.shields.io/npm/dm/vue-simplemde.svg)](https://npmjs.org/package/vue-simplemde)

# Use Setup

> No longer support Vue1.x, you can modify to use

## Install

``` bash
npm install vue-simplemde --save
```

## Use

* Internal reference in a single component

``` vue
<template>
  <vue-simplemde v-model="content" ref="markdownEditor" />
</template>

<script>
  import VueSimplemde from 'vue-simplemde'

  export default {
    components: {
      VueSimplemde
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
```

* Global reference

``` javascript
import Vue from 'vue'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)
```

## Props
| property | type | default | describe |
| ----| ----- | ----- | ---- |
| value | String | None | Initial value, v-model binding can be used |
| name | String | None | The name of the control. |
| preview-class | String | None | Custom preview style class |
| autoinit | Boolean | true | Automatic initialization |
| highlight | Boolean | false | Is it open to highlight |
| sanitize | Boolean | false | HTML that does not render input after opening |
| configs | Object | {} | [SimpleMDE's config](#configuration) |
| previewRender | Function | - | configs.previewRender |

## Events

| event | describe | arguments |
| ----| ----- | ---- |
| input | Triggered when the Input value changes | value |
| blur | Triggered when the Input loses focus | value |
| initialized | Triggered when initialization is complete | simplemde |

## Methods

``` js
this.$refs.markdownEditor.simplemde.togglePreview();
```

* [examples/index.vue](./examples/index.vue)

* [simplemde.js](https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L1908-L2026)

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
  <vue-simplemde preview-class="markdown-body" />
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
  <vue-simplemde :highlight="true" />
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
  /* no need import simplemde.min.css */
</style>
```

### e.g.

[Dark Theme](https://github.com/xcatliu/simplemde-theme-dark)

![Screenshot of SimpleMDE Theme Dark](https://github.com/xcatliu/simplemde-theme-dark/raw/master/docs/screenshot.png)

## Configuration
> SimpleMD's config

* [中文](doc/configuration_zh.md)
* [English](doc/configuration_en.md)

## Examples

* [Simple Example](./examples/index.vue)
* [Nuxt Example](./examples/nuxt)
* [Demo Page](https://f-loat.github.io/vue-simplemde/)
* [Demo Source](https://github.com/F-loat/vue-simplemde/tree/gh-pages)

## Dependencies

* [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor)

## Licence

vue-simplemde is open source and released under the MIT Licence.

Copyright (c) 2022 F-loat
