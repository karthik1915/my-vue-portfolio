<template>
  <section class="w-full lg:row-span-2">
    <div class="flex justify-center lg:justify-end h-full">
      <div class="p-5 md:p-6 lg:p-8 max-w-[768px]">
        <div class="flex items-end gap-4 py-4 justify-center sm:justify-start">
          <p id="hero-name" class="text-4xl font-telegraf">Hello, I'm</p>
          <span
            id="role"
            class="text-2xl rounded-full font-raleway px-5 py-1 bg-gradient-to-r to-[#FCF9BE] via-50% via-[#FFDCA9] from-[#FAAB78]"
            >Developer</span
          >
        </div>
        <h1
          id="hero-name"
          class="text-5xl font-telegraf tracking-wider font-bold text-center sm:text-left"
        >
          Karthikeyan J
        </h1>
        <p
          id="intro"
          class="font-varelaround py-5 text-center sm:w-3/4 sm:text-left mx-auto sm:mx-0"
        >
          I Develop Robust Webapplications with

          <span
            class="underline-offset-3 decoration-2 hover:underline"
            style="text-decoration-color: #61dafb"
            >React</span
          >,
          <span
            class="underline-offset-3 decoration-2 hover:underline"
            style="text-decoration-color: #000000"
            >Next</span
          >,
          <span
            class="underline-offset-3 decoration-2 hover:underline"
            style="text-decoration-color: #092e20"
            >Django</span
          >,
          <span
            class="underline-offset-3 decoration-2 hover:underline"
            style="text-decoration-color: #e23237"
            >Angular</span
          >
          out of 2 Years of Experience
        </p>

        <HeroButtons />
        <HeroDetails />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroButtons from "./HeroButtons.vue";
import HeroDetails from "./HeroDetails.vue";
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    "#hero-name",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      stagger: {
        amount: 0.2,
      },
      ease: "power3.out",
    }
  );
  gsap.fromTo(
    "#role",
    { opacity: 0, x: 30, rotateX: 360 },
    {
      opacity: 1,
      x: 0,
      rotateX: 0,
      duration: 1,
      delay: 0.3,
      stagger: {
        amount: 0.2,
      },

      ease: "power3.out",
    }
  );
  gsap.fromTo(
    "#intro",
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.7,
      stagger: {
        amount: 0.2,
      },
      ease: "power3.out",
    }
  );
  // gsap.fromTo("", {}, {});
});
</script>

<style scoped></style>
