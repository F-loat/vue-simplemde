<template>
  <div class="wrap">
    <client-only>
      <vue-simplemde v-model="content" />
    </client-only>
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
