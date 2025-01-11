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
            </tbody>
        </table>
    </div>
</template>

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
</style>