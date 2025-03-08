<template>
  <div id="skills" class="flex flex-wrap justify-center py-4 gap-y-2">
    <article>Python</article>
    <article>Java</article>
    <article>React JS</article>
    <article>Next JS</article>
    <article>Angular</article>
    <article>Tailwindcss</article>
    <article>Django</article>
    <article>Docker</article>
    <article>Git / Github</article>
    <article>Flutter</article>
  </div>
</template>

<style scoped>
article {
  @apply inline py-1 relative px-4 mx-4 my-1 lg:my-2 cursor-pointer bg-gradient-to-r to-[#FAAB78] via-50% via-[#FFDCA9] from-[#FAAB78] rounded-xl select-none hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-inner;
}
</style>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  const Skills = gsap.utils.toArray("article");
  gsap.fromTo(
    Skills,
    { rotateX: 180, opacity: 0 },
    { rotateX: 0, duration: 0.8, opacity: 1, stagger: 0.23, ease: "bounce.out" }
  );
});
</script>
