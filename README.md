# Vue-SimpleMDE
> SimpleMDE - Markdown Editor component for Vue.js

[![NPM](https://nodei.co/npm/vue-simplemde.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-simplemde/)

# Example
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

// require with Webpack/Node.js
var Vue = require('vue')
var VueSimplemde = require('vue-simplemde')

// use
Vue.use(VueSimplemde)
```

``` javascript
// or use with component(ES6)
import { markdownEditor } from 'vue-simplemde'

// use
export default {
  components: {
    markdownEditor
  }
}
```

## Template
``` html
<!-- 通过 v-model 控制 value -->
<markdown-editor v-model="content"></markdown-editor>

<!-- 通过事件控制 value -->
<markdown-editor :value="content" @input="handleInput"></markdown-editor>
```

## Dependencies

* [SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor)

## Licence

vue-simplemde is open source and released under the MIT Licence.

Copyright (c) 2016 F-loat
