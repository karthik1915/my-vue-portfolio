<script setup lang="ts">
import QuickButton from "./components/QuickButton.vue";
import gsap from "gsap";
import { onMounted } from "vue";

// Use onMounted to ensure QuickButtons array is populated after component mount
onMounted(() => {
  const QuickButtons = gsap.utils.toArray("#quick-buttons > div");

  gsap.fromTo(
    QuickButtons,
    { x: -100 },
    { x: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
  );
});
</script>

<template>
  <div class="md:hidden flex flex-col" id="quick-buttons">
    <QuickButton src="/assets/who.svg" alt="person_who" scroll-to="#who-am-i" />
    <QuickButton
      src="/assets/what.svg"
      alt="person_what"
      scroll-to="#what-i-do"
    />
    <QuickButton
      src="/assets/education.svg"
      alt="education"
      scroll-to="#education"
    />
  </div>
</template>
