<template>
  <header id="heading" class="text-center text-4xl font-telegraf my-6">
    <h1>About Me</h1>
  </header>
  <div
    id="about-main"
    class="md:grid relative md:grid-cols-[0.6fr_1fr] mx-auto max-w-screen-2xl"
  >
    <div
      id="hero-image-about"
      class="flex items-center justify-center md:justify-start md:flex-col mb-8 md:mb-0 px-2 md:h-fit md:sticky relative md:top-[4rem]"
    >
      <HeroImage />
      <QuickButtons />
      <QuickLink />
    </div>
    <div class="px-4 space-y-3" id="about-me">
      <section id="who-am-i">
        <h2>Who Am I ?</h2>
        <p>
          &emsp;I'm <mark>Karthikeyan J</mark> from
          <mark>Korattur, Chennai, Tamil Nadu, India</mark>. A Graduated
          Engineer who is passionate about <mark>Software Development</mark> and
          <mark>Project Management</mark>. I am constantly seeking knowledge for
          career improvement and keeping track of
          <mark>current trends in technology</mark>. My drive to stay updated
          with the latest advancements ensures that I can deliver
          <mark>innovative and efficient solutions</mark> in my projects.
        </p>
      </section>
      <section id="what-i-do">
        <h2>What I Do ?</h2>
        <p>
          &emsp;I am a <mark>Full Stack Developer</mark> with a passion for
          building <mark>scalable</mark> and
          <mark>maintainable web applications</mark>. I have worked on a wide
          range of projects from <mark>web applications</mark> to
          <mark>mobile applications</mark>. I am proficient in the following
          technologies:
        </p>

        <Skills />
      </section>
      <section id="education">
        <h2>Education</h2>
        <Education />
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <Experience />
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
import Education from "./Education.vue";
import QuickButtons from "./QuickButtons.vue";
import Footer from "./Footer.vue";
import QuickLink from "./components/QuickLink.vue";
import Skills from "./components/Skills.vue";
import gsap from "gsap";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./Experience.vue";

gsap.registerPlugin(ScrollTrigger);

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

  gsap.fromTo(
    "#about-me h2",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8 }
  );
  gsap.fromTo(
    "#about-me p",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  );
});
</script>

<style scoped>
h2 {
  @apply font-raleway text-2xl py-2 text-center md:text-left text-stroke;
}

p {
  @apply font-varelaround text-lg text-notblack text-justify;
}
</style>
