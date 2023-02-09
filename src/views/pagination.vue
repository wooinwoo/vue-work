<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import Table from "@/components/Table/Table.vue";

const data = ref(); // 총 데이터
const pageSize = ref(7); //한 페이지당 데이터 사이즈
const pageNum = ref(0); //현재 페이지
const sliceData = ref(); //해당 페이지에 대한 데이터 사이즈에 맞게 자름
const pageCount = ref(); //총 페이지 수
const header = ["NO", "TEL", "ADDRESS", "NAME"];

const dataSlice = () => {
  sliceData.value = data.value.slice(
    pageNum.value * pageSize.value,
    pageNum.value * pageSize.value + pageSize.value
  );
};
axios
  .get("http://sample.bmaster.kro.kr/contacts")
  .then((response) => {
    data.value = response.data.contacts;

    dataSlice();

    pageCount.value = Math.ceil(data.value.length / pageSize.value);
  })
  .catch((err) => {
    console.log(err);
  });

const prevPage = () => {
  pageNum.value--;
  dataSlice();
};

const nextPage = () => {
  pageNum.value++;
  dataSlice();
};

const pageChange = (page: number) => {
  pageNum.value = page;
  dataSlice();
};
</script>

<template>
  <Table :header="header" :data="sliceData" />
  <div class="btn-cover">
    <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
      이전
    </button>
    <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
    <button
      :disabled="pageNum >= pageCount - 1"
      @click="nextPage"
      class="page-btn">
      다음
    </button>
  </div>

  <div class="btn-group2">
    <button
      :disabled="Math.floor(pageNum / 7) * 7 - 7 < 0"
      @click="pageNum = Math.floor(pageNum / 7) * 7 - 7">
      &laquo;
    </button>
    <button
      :class="{ active: pageNum == i + Math.floor(pageNum / 7) * 7 }"
      @click="pageChange(i + Math.floor(pageNum / 7) * 7)"
      v-for="(a, i) in (Math.floor(pageNum / 7) + 1) * 7 > pageCount
        ? pageCount % 7
        : 7">
      {{ i + Math.floor(pageNum / 7) * 7 + 1 }}
    </button>
    <button
      :disabled="(Math.floor(pageNum / 7) + 1) * 7 >= pageCount - 1"
      @click="pageNum = (Math.floor(pageNum / 7) + 1) * 7">
      &raquo;
    </button>
  </div>
</template>

<style scoped>
/* ///////////첫 번째 버튼 스타일///////////// */
.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
  cursor: pointer;
}
.btn-cover .page-count {
  padding: 0 1rem;
}

/* ///////////두 번째 버튼 스타일///////////// */

.btn-group2 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn-group2 button {
  border: 0;
  background-color: transparent;
}

.btn-group2 button {
  color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.btn-group2 button.active {
  background-color: #4caf50;
}

.btn-group2 button:hover:not(.active) {
  background-color: #ddd;
  color: black;
}
</style>

<!-- ckeditor5,  toast ui, summernote -->
