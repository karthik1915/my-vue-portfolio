<template>
  <div class="card-wrapper container mx-auto w-full">
    <div class="card" v-for="(template, index) in templates" :key="template.id">
      <div
        @click="navigateTo(template.url)"
        class="project-image-wrapper relative group"
        :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
      >
        <img
          :src="'/assets/projects/' + template.image"
          alt="Project Image"
          class="project-image"
        />
        <p
          :class="index % 2 === 0 ? 'right-10' : 'left-10'"
          class="absolute bottom-10 group-hover:visible invisible transition-all duration-200 font-telegraf font-bold text mix-blend-darken text-black"
        >
          Show Demo
          <svg
            class="inline size-4"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
      <div
        class="text px-5 py-7 lg:p-4 h-fit"
        :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1 lg:text-right'"
      >
        <div
          class="flex flex-wrap gap-2 mb-3"
          :class="index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'"
        >
          <TagCard v-for="tag in template.tags" :key="tag.id" :tag="tag" />
        </div>
        <h3
          class="text-3xl font-telegraf tracking-wide text-primary font-semibold"
        >
          {{ template.title }}
        </h3>
        <p
          class="mt-3 text-lg font-varelaround text-notblack/80 leading-tight text-balance"
        >
          {{ template.description }}
        </p>
        <a
          :href="template.url"
          target="_blank"
          class="font-telegraf inline-block mt-6 px-6 py-2 border-notblack border text-xl text-neutral-800 bg-tertiary hover:bg-background transition-all duration-300 hover:rounded-xl"
        >
          Show Demo
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card-wrapper {
  @apply grid gap-4;
}

.card {
  @apply grid lg:grid-cols-2 lg:grid-rows-1 items-center min-h-[25rem];
}

.project-image-wrapper {
  @apply p-3 md:p-4 lg:p-5;
}

.project-image {
  @apply rounded-3xl border;
}
</style>

<script>
import TagCard from "./TagCard.vue";
import { templatesData } from "../data";

export default {
  name: "TemplatesCard",
  components: {
    TagCard,
  },
  methods: {
    navigateTo(url) {
      window.open(url, "_blank");
    },
  },
  data() {
    return { templates: templatesData };
  },
};
</script>
