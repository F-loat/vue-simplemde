<template>
  <div class="wrap">
    <no-ssr>
      <markdown-editor v-model="content"></markdown-editor>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '``` \nconsole.log("lalala") \n```',
    };
  },
};
</script>
