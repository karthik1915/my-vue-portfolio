<template>
  <header id="heading" class="text-center text-4xl font-telegraf my-6">
    <h1>Projects</h1>
  </header>
  <ProjectCard />
  <section class="">
    <h2 class="text-center text-4xl font-telegraf my-12">Templates</h2>
    <TemplatesCard />
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
import ProjectCard from "./components/ProjectCard.vue";
import TemplatesCard from "./components/TemplatesCard.vue";

onMounted(() => {
  gsap.fromTo(
    "#heading",
    {
      letterSpacing: "6px",
      opacity: 0, // Start from transparent
      scale: 0.8, // Add scale for a more dynamic effect
    },
    {
      letterSpacing: "0px",
      opacity: 1, // Fade in
      scale: 1, // Scale back to normal
      duration: 1,
      ease: "elastic.out(1, 0.3)", // Change to elastic easing for a smoother bounce
    }
  );
});
</script>
