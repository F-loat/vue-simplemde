export default {
  props: {
    value: String,
    name: String,
    previewClass: String,
    autoinit: {
      type: Boolean,
      default () {
        return true;
      },
    },
    highlight: {
      type: Boolean,
      default () {
        return false;
      },
    },
    sanitize: {
      type: Boolean,
      default () {
        return false;
      },
    },
    configs: {
      type: Object,
      default () {
        return {};
      },
    },
    extraKeys: {
      type: Object,
      required: false,
      default () {
        return {};
      }
    }
  }
}