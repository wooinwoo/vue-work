<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, toRaw } from "vue";
import Table from "@/components/Table/Table.vue";
import triggerObserver from "@/components/triggerObserver.vue";

const data = ref(); // 총 데이터
const pageNum = ref(0); //현재 페이지
const pageSize = ref(20); //한 페이지당 데이터 사이즈
const header = ["NO", "TEL", "ADDRESS", "NAME"];

const getData = () => {
  pageNum.value++;
  axios
    .get(
      `http://sample.bmaster.kro.kr/contacts?pageno=${pageNum.value}&pagesize=${pageSize.value}`
    )
    .then((response) => {
      data.value = toRaw(data.value)
        ? toRaw(data.value).concat(response.data.contacts)
        : response.data.contacts;
      console.log(data.value);
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  console.log(2);
  getData;
});
</script>
<template>
  <div></div>
  <Table :header="header" :data="data" />
  <triggerObserver @triggerIntersected="getData" />
</template>

<style scoped></style>
