<template>
  <div class="vue-simplemde">
    <textarea
      class="vue-simplemde-textarea"
      :name="name"
      :value="modelValue"
      @input="handleInput($event.target.value)"
    />
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import marked from 'marked';

export default {
  name: 'vue-simplemde',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    value: String,
    modelValue: String,
    name: String,
    previewClass: String,
    autoinit: {
      type: Boolean,
      default() {
        return true;
      },
    },
    forceSync: {
      type: Boolean,
      default() {
        return true;
      },
    },
    highlight: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sanitize: {
      type: Boolean,
      default() {
        return false;
      },
    },
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
    previewRender: {
      type: Function,
    },
  },
  data() {
    return {
      isValueUpdateFromInner: false,
    };
  },
  mounted() {
    if (this.autoinit) this.initialize();
  },
  deactivated() {
    const editor = this.simplemde;
    if (!editor) return;
    const isFullScreen = editor.codemirror.getOption('fullScreen');
    if (isFullScreen) editor.toggleFullScreen();
  },
  methods: {
    initialize() {
      const configs = Object.assign({
        element: this.$el.firstElementChild,
        initialValue: this.modelValue || this.value,
        previewRender: this.previewRender,
        renderingConfig: {},
      }, this.configs);

      // 同步 modelValue 和 initialValue 的值
      if (configs.initialValue) {
        this.$emit('update:modelValue', configs.initialValue);
      }

      // 判断是否开启代码高亮
      if (this.highlight) {
        configs.renderingConfig.codeSyntaxHighlighting = true;
      }

      // 设置是否渲染输入的html
      marked.setOptions({ sanitize: this.sanitize });

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs);

      // 添加自定义 previewClass
      const className = this.previewClass || '';
      this.addPreviewClass(className);

      // 绑定事件
      this.bindingEvents();

      // 初始化完成
      this.$nextTick(() => {
        this.$emit('initialized', this.simplemde);
      });
    },
    bindingEvents() {
      this.simplemde.codemirror.on('change', (instance, changeObj) => {
        if (changeObj.origin === 'setValue') {
          return;
        }
        const val = this.simplemde.value();
        this.handleInput(val);
      });

      this.simplemde.codemirror.on('blur', () => {
        const val = this.simplemde.value();
        this.handleBlur(val);
      });
    },
    addPreviewClass(className) {
      const wrapper = this.simplemde.codemirror.getWrapperElement();
      const preview = document.createElement('div');
      wrapper.nextSibling.className += ` ${className}`;
      preview.className = `editor-preview ${className}`;
      wrapper.appendChild(preview);
    },
    handleInput(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('update:modelValue', val);
      this.$emit('input', val);
    },
    handleBlur(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('blur', val);
    },
  },
  destroyed() {
    this.simplemde = null;
  },
  watch: {
    modelValue(val) {
      if (!this.forceSync && this.isValueUpdateFromInner) {
        this.isValueUpdateFromInner = false;
      } else {
        const pos = this.simplemde.codemirror.getCursor();
        this.simplemde.value(val);
        this.simplemde.codemirror.setSelection(pos);
      }
    },
  },
};
</script>

<style>
.vue-simplemde .markdown-body {
  padding: 0.5em
}

.vue-simplemde .editor-preview-active, .vue-simplemde .editor-preview-active-side {
  display: block;
}
</style>
