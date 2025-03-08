<template>
  <nav
    :class="[
      'flex row-span-1 justify-between relative px-8 py-3 items-center flex-grow-0 border-b border-notblack',
      props.isHomeRoute ? 'lg:col-span-2' : '',
    ]"
  >
    <div class="logo">
      <Logo />
    </div>
    <div class="space-x-3 hidden md:block">
      <RouterLink
        class="font-varelaround md:text-lg lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="font-varelaround md:text-lg lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/about"
        >About</RouterLink
      >
      <RouterLink
        class="font-varelaround md:text-lg lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/projects"
        >Projects</RouterLink
      >
    </div>
    <div class="hidden md:block">
      <button
        class="px-6 py-2 ring-1 ring-primary hover:bg-primary hover:text-notblack rounded-xl transition-colors duration-300 font-varelaround text-md"
        @click="redirectToInstagram"
      >
        Talk with Me
      </button>
    </div>
    <div class="md:hidden block cursor-pointer">
      <img @click="handleMenu" src="/assets/menu.svg" alt="menu icon" />
    </div>
    <!-- Fullscreen overlay for mobile menu -->
    <div
      id="phone-menu-overlay"
      class="hidden fixed opacity-0 top-0 left-0 z-50 h-screen w-screen bg-background transition-opacity duration-300"
    >
      <!-- Cancel button -->
      <button
        title="menu"
        type="button"
        class="absolute top-10 right-8"
        @click="handleMenu"
      >
        <img src="/assets/cancel.svg" width="30" height="30" alt="cancel" />
      </button>
      <!-- Scrambled doodle background-->
      <!-- <DoodleBg /> -->
      <!-- Phone menu -->
      <div
        id="phone-menu"
        class="h-1/2 w-full absolute flex items-center flex-col justify-evenly top-1/2 -translate-y-1/2"
      >
        <RouterLink
          to="/"
          id="nav-item"
          class="w-full text-center flex items-center justify-center text-3xl py-5 bg-primary capitalize font-telegraf border-y border-black"
          @click="closeMenu"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          id="nav-item"
          class="w-full text-center flex items-center justify-center text-3xl py-5 bg-primary capitalize font-telegraf border-y border-black"
          @click="closeMenu"
          >About</RouterLink
        >
        <RouterLink
          to="/projects"
          id="nav-item"
          class="w-full text-center flex items-center justify-center text-3xl py-5 bg-primary capitalize font-telegraf border-y border-black"
          @click="closeMenu"
          >Projects</RouterLink
        >
        <div
          id="nav-item"
          class="w-full text-center flex items-center justify-center text-3xl py-5 bg-primary capitalize font-telegraf border-y border-black"
          @click="redirectToInstagram"
        >
          Contact
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Logo from "./Logo.vue";
import { RouterLink } from "vue-router";
import gsap from "gsap";

const props = defineProps<{
  isHomeRoute: boolean;
}>();

const redirectToInstagram = () => {
  window.location.href = "https://www.instagram.com/kar_thik_op/";
};

// Reactive variable to track menu open state
const isMenuOpen = ref(false);

// Function to open the menu
const openMenu = () => {
  const PhoneLinks = gsap.utils.toArray("#nav-item");

  gsap.set("#phone-menu-overlay", { display: "block" });
  const tl = gsap.timeline();
  tl.fromTo(
    "#phone-menu-overlay",
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: "none" }
  ).fromTo(
    PhoneLinks,
    {
      opacity: 0,
      x: (index) => {
        if (index === 1) return -150;
        if (index === 2) return 150;
        return 0;
      },
      y: (index) => {
        if (index === 0) return -150;
        if (index === 3) return 150;
        return 0;
      },
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.2,
      stagger: 0.1,
      ease: "power3.out",
    }
  );
};

// Function to close the menu
const closeMenu = () => {
  const PhoneLinks = gsap.utils.toArray("#nav-item");
  const tl = gsap.timeline();
  tl.to(
    PhoneLinks,
    {
      opacity: 0,
      x: (index) => {
        if (index === 1) return -100;
        if (index === 2) return 100;
        return 0;
      },
      y: (index) => {
        if (index === 0) return -100;
        if (index === 3) return 100;
        return 0;
      },
      duration: 0.1,
      stagger: -0.05,
      ease: "power1.in",
    },
    0
  )
    .to("#phone-menu-overlay", {
      opacity: 0,
      duration: 0.1,
    })
    .set("#phone-menu-overlay", { display: "none" });
};

// Function to handle menu toggle
const handleMenu = () => {
  if (!isMenuOpen.value) {
    openMenu();
  } else {
    closeMenu();
  }
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
