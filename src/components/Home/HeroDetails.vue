<template>
  <div
    id="hero-details"
    class="grid grid-rows-3 sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-flow-col mt-3"
  >
    <dl class="p-5 text-center sm:text-left">
      <dt class="text-2xl font-goodtimes">2+</dt>
      <dd class="font-semibold text-2xl font-telegraf">years Experience</dd>
    </dl>
    <dl class="p-5 text-center sm:text-left">
      <dt class="text-2xl font-goodtimes">16</dt>
      <dd class="font-semibold text-2xl font-telegraf">Projects Done</dd>
    </dl>
    <RotateButton />
    <dl class="p-5 text-center sm:text-left">
      <dt class="text-2xl font-semibold font-telegraf">Contact</dt>
      <dd class="font-varelaround font-semibold text-lg">
        karthikeyanj1915@gmail.com
      </dd>
    </dl>
  </div>
</template>

<style scoped>
.grid > div {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
import RotateButton from "./misc/RotateButton.vue";

onMounted(() => {
  gsap.fromTo(
    "#hero-details > dl",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.7)",
    }
  );
});
</script>
