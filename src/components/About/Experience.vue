<template>
  <div class="w-full my-3 font-varelaround *:overflow-hidden">
    <table class="w-full text-sm md:text-base border-collapse text-center">
      <thead>
        <tr class="font-raleway">
          <th class="w-1/4">Role</th>
          <th class="w-2/4">Company</th>
          <th class="w-1/4">Location</th>
          <th class="w-2/4">Period</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Internship</td>
          <td>Lucas TVS Limited</td>
          <td>Padi</td>
          <td>Mar 2022 - May 2022</td>
        </tr>
        <tr>
          <td>Training</td>
          <td>Tata Consultancy Services</td>
          <td>Siruseri</td>
          <td>Aug 2024 - Oct 2024</td>
        </tr>
        <tr>
          <td>Project</td>
          <td>Tata Consultancy Services</td>
          <td>Velachery</td>
          <td>Oct 2024 - Present</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border: 1px solid theme("colors.primary");
}

th,
td {
  padding: 4px 8px;
  transition: background-color 0.3s ease;
  border: 1px solid theme("colors.primary");
}

thead {
  font: "goodtimes";
  font-weight: semibold;
  letter-spacing: 1px;
  border: 1px solid theme("colors.primary");
  @apply bg-primary/40 transition-colors duration-300;
}

thead:hover {
  @apply bg-primary/80;
}

tbody tr {
  border: 1px solid theme("colors.primary");
  transition: background-color 0.3s ease;
}

tbody tr:not(:last-child) {
  border-bottom: 0px solid transparent !important;
}

tbody tr:hover {
  @apply hover:bg-secondary;
}

tbody tr:not(:last-child) {
  border-bottom: 10px solid transparent;
}
</style>
