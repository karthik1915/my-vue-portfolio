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
import { ref } from "vue";

const tableData = ref([
  { qualification: "SSLC", marks: "430/500", year: "2018" },
  { qualification: "HSC - Computer Science", marks: "470/600", year: "2020" },
  {
    qualification: "B.E - Electronics and Communication Engineering",
    marks: "8.40",
    year: "2024",
  },
]);
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border: 1px solid theme("colors.primary");
  /* Border for the whole table */
  border-collapse: collapse;
}

th,
td {
  padding: 4px 8px;
  border: 1px solid theme("colors.primary");
  /* Border for each cell */
  transition: background-color 0.3s ease;
}

thead {
  font: "goodtimes";
  font-weight: semibold;
  letter-spacing: 1px;
  @apply bg-primary/40 transition-colors duration-300;
  border-bottom: 1px solid theme("colors.primary");
  /* Bottom border for the header */
}

thead:hover {
  @apply bg-primary/80;
}

tbody tr {
  transition: background-color 0.3s ease;
  border-bottom: 1px solid theme("colors.primary");
  /* Border for rows */
}

tbody tr:hover {
  @apply bg-secondary;
}

td {
  @apply text-balance;
}
</style>
