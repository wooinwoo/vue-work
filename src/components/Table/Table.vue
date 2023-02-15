<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  data: [
    {
      no: number;
      tel: string;
      address: string;
      name: string;
      photo: string;
    }
  ];
}

const props = defineProps<Props>();

const header = ["NO", "TEL", "ADDRESS", "NAME"];
</script>

<template>
  <table>
    <thead>
      <th v-for="item in header" :key="item">{{ item }}</th>
    </thead>
    <tbody>
      <tr v-for="(lineData, i) in props.data" :key="i">
        <td>{{ lineData.no }}</td>
        <td>{{ lineData.tel }}</td>
        <td>{{ lineData.address }}</td>
        <td>{{ lineData.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  text-align: left;
  margin: auto;
}
table th {
  padding: 12px;
  border-bottom: 2px solid darkgray;
  text-align: center;
}
table td {
  padding: 12px;
}
table tr:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
