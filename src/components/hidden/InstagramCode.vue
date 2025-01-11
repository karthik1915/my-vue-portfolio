<template>
    <div class="w-full h-full px-3 py-4">
        <div class="flex flex-col items-center pt-4 justify-center sm:flex-row gap-3 md:gap-4">
            <img src="../../assets/instagram.png" alt="instagram" />
            <div>
                <h2 class="font-telegraf text-3xl text-center font-semibold">My Instagram Bio Code</h2>
            </div>
        </div>
        <div id="content" class="flex items-center justify-center my-4">
            <span
                class="bg-gradient-to-tr font-bold py-3 px-5 rounded-2xl text-white font-goodtimes text-center from-[#f09433] via-[#dc2743] to-[#bc1888] ">
                1010 / C / MMII
            </span>
        </div>

        <div id="insta-def-cards" class=" mx-auto p-3 flex flex-row flex-wrap items-center gap-4 justify-center">
            <!-- First Card (1010 -> 10) -->
            <div id="insta-def-card-1"
                class="w-48 h-32 rounded-lg shadow-lg flex flex-col justify-center bg-gradient-to-b from-[#f09433] to-[#dc2743] md:bg-gradient-to-r">
                <div class="flex items-center justify-center space-x-4">
                    <p class="text-2xl font-semibold text-white">1010</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l5-7-5-7" />
                    </svg>
                    <p class="text-2xl font-semibold text-white">10</p>
                </div>
                <p class="mt-4 text-center text-white text-sm">Binary of 10</p>
            </div>

            <!-- Second Card (C -> 12) -->
            <div id="insta-def-card-2" class="w-48 h-32 rounded-lg shadow-lg flex flex-col justify-center bg-[#dc2743]">
                <div class="flex items-center justify-center space-x-4">
                    <p class="text-2xl font-semibold text-white">C</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l5-7-5-7" />
                    </svg>
                    <p class="text-2xl font-semibold text-white">12</p>
                </div>
                <p class="mt-4 text-center text-white text-sm">Hexadecimal of 12</p>
            </div>

            <!-- Third Card (MMII -> 2002) -->
            <div id="insta-def-card-3"
                class="w-48 h-32 rounded-lg shadow-lg flex flex-col justify-center bg-gradient-to-b from-[#dc2743] to-[#bc1888] md:bg-gradient-to-r">
                <div class="flex items-center justify-center space-x-4">
                    <p class="text-2xl font-semibold text-white">MMII</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l5-7-5-7" />
                    </svg>
                    <p class="text-2xl font-semibold text-white">2002</p>
                </div>
                <p class="mt-4 text-center text-white text-sm">Roman Number of 2002</p>
            </div>
        </div>

        <InstaCarousel />

    </div>
</template>

<style scoped>
img {
    @apply size-12;
}
</style>

<script setup lang="ts">
import gsap from "gsap"
import InstaCarousel from "./insta-carousel.vue"
import { onMounted } from "vue";

onMounted(() => {

    let mm = gsap.matchMedia();
    const cards = gsap.utils.toArray("#insta-def-cards > div");

    mm.add("(max-width: 800px)", () => {
        gsap.fromTo("insta-def-card-1", { rotate: -15, y: 140, zIndex: 3 }, { rotate: 0, y: 0, duration: 1, ease: "power2.out" })
        gsap.fromTo("insta-def-card-2", { rotate: 5, zIndex: 2 }, { rotate: 0, y: 0, duration: 1, ease: "power2.out" })
        gsap.fromTo("insta-def-card-3", { rotate: 15, y: -150, zIndex: 1 }, { rotate: 0, y: 0, duration: 1, ease: "power2.out" })
    })

    mm.add("(min-width: 801px)", () => { // Changed to min-width for larger screens
        gsap.fromTo(cards, { y: 100, opacity: 0, rotate: 25 }, { opacity: 1, y: 0, stagger: 0.4, rotate: 0, duration: 1 });
    });

});


</script>