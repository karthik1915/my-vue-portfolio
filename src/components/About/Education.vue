<template>
  <div class="w-full my-3 font-varelaround *:overflow-hidden">
    <table class="w-full text-sm md:text-base border-collapse text-center">
      <thead>
        <tr class="font-raleway">
          <th class="w-3/4">Qualification</th>
          <th class="w-1/4">Marks / CGPA</th>
          <th class="w-1/4">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index" ref="tableRows">
          <td>{{ item.qualification }}</td>
          <td>{{ item.marks }}</td>
          <td>{{ item.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const tableData = ref([
  { qualification: 'SSLC', marks: '430/500', year: '2018' },
  { qualification: 'HSC - Computer Science', marks: '470/600', year: '2020' },
  { qualification: 'B.E - Electronics and Communication Engineering', marks: '8.40', year: '2024' },
]);

onMounted(() => {
  const rows = document.querySelectorAll('tbody tr, thead');

  gsap.fromTo(
    rows,
    { x: 20, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2, // Adjust stagger duration
      ease: 'power2.out',
    }
  );
});
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
}

th,
td {
  padding: 4px 8px;
  transition: background-color 0.3s ease;
}

thead {
  font-weight: bold;
  @apply bg-primary/40;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:hover {
  @apply hover:bg-secondary;
}

tbody tr:not(:last-child) {
  border-bottom: 10px solid transparent;
}

td {
  @apply text-balance;
}
</style>
