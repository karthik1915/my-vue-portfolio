<template>
  <a @click="handleClick" class="p-2 bg-primary border rounded-r-2xl">
    <img :src="src" :alt="alt" width="24" height="24" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  scrollTo: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["click"]);

const handleClick = () => {
  // Emit the click event
  emits("click");

  // Scroll to the specified section
  const element = document.getElementById(props.scrollTo);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
