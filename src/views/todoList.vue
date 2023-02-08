<script setup lang="ts">
import { ref } from "vue";
import todoListHeader from "@/components/todoList/todoListHeader.vue";
import todoListInput from "@/components/todoList/todoListInput.vue";
import todoListItemList from "@/components/todoList/todoListItemList.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <todoListHeader />
    </div>
    <div class="row"><todoListInput /></div>
    <div class="row">
      <todoListItemList />
    </div>
  </div>
</template>

<style scoped></style>
