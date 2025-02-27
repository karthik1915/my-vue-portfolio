<template>
  <div
    class="row-span-3 relative overflow-hidden bg-background flex justify-center lg:justify-start"
  >
    <div class="max-w-[768px] w-full relative">
      <img
        id="hero-image"
        alt="karthikeyan j"
        src="/karthikeyan.webp"
        preload="true"
        class="grayscale h-full object-cover object-center"
      />
      <HeroFloater />
    </div>

    <div class="absolute" id="overlay-group">
      <div
        id="hero-image-overlay-1"
        class="w-96 z-10 absolute top-0 left-0 bg-primary h-[200vh]"
      ></div>
      <div
        id="hero-image-overlay-2"
        class="w-52 z-10 absolute top-0 left-0 bg-primary h-[200vh]"
      ></div>
      <div
        id="hero-image-overlay-3"
        class="w-28 z-10 absolute top-0 left-0 bg-primary h-[200vh]"
      ></div>
      <div
        id="hero-image-overlay-4"
        class="w-8 z-10 absolute top-0 left-0 bg-primary h-[200vh]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import HeroFloater from "./HeroFloater.vue";

onMounted(() => {
  gsap.set("#overlay-group", {
    rotate: 45,
    y: -1000,
  });

  gsap.fromTo(
    "#hero-image-overlay-1",
    {
      x: 0,
    },
    {
      opacity: 0.5,
      x: 2000,
      delay: 0.3,
      duration: 1,
      onComplete: () => {
        gsap.set("#hero-image-overlay-1", { opacity: 0 });
      },
    }
  );
  gsap.fromTo(
    "#hero-image-overlay-2",
    {
      x: 0,
    },
    {
      opacity: 0.6,
      x: 1900,
      delay: 0.6,
      duration: 1,
      onComplete: () => {
        gsap.set("#hero-image-overlay-2", { opacity: 0 });
      },
    }
  );
  gsap.fromTo(
    "#hero-image-overlay-3",
    {
      x: 0,
    },
    {
      opacity: 0.3,
      x: 2000,
      delay: 0.8,
      duration: 1,
      onComplete: () => {
        gsap.set("#hero-image-overlay-3", { opacity: 0 });
      },
    }
  );
  gsap.fromTo(
    "#hero-image-overlay-4",
    {
      x: 0,
    },
    {
      opacity: 0,
      x: 1900,
      delay: 1.2,
      duration: 1,
      onComplete: () => {
        gsap.set("#hero-image-overlay-4", { opacity: 0 });
      },
    }
  );

  gsap.fromTo(
    "#hero-image",
    {
      scale: 1.3,
      opacity: 0,
    },
    { scale: 1, opacity: 1, duration: 1.2, delay: 0.4, ease: "power3.out" }
  );

  gsap.fromTo(
    ".content-1, .content-2, .content-3",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 1.2,
      duration: 1,
    }
  );
});
</script>
