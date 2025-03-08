<template>
  <span class="tag">{{ tag.name }}</span>
</template>

<script>
export default {
  name: "TagCard",
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.tag {
  @apply px-3 py-1 font-raleway bg-tertiary/10 border border-tertiary/60 rounded-full text-sm text-tertiary/80;
}
</style>
