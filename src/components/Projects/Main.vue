<template>
  <header id="heading" class="text-center text-4xl font-telegraf my-6">
    <h1>Projects</h1>
  </header>
  <!-- <section
    className="container my-6 rounded-2xl min-h-[500px] border-zinc-300 border mx-auto"
  ></section> -->
  <div class="flex flex-wrap justify-center gap-7 mb-16">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ProjectCard from "./components/ProjectCard.vue";
import { onMounted } from "vue";

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

const projects = [
  {
    id: 1,
    title: "Beacon Template",
    url: "https://beacon-template-1.netlify.app/",
    description: "A project Template",
    image: "beacon-image.png",
    details: {
      stack: ["Angular", "Tailwind"],
    },
  },
  {
    id: 2,
    title: "Mindbees Consulting",
    description: "This is Mindbees Consulting a salesforce consulting company",
    url: "https://mindbeesconsulting.com/",
    image: "mindbees-image.png",
    details: {
      stack: ["Next.js", "Tailwind"],
      github: {
        type: "closed",
        link: "https://github.com",
      },
    },
  },
];
</script>
