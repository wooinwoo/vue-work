<script setup lang="ts">
import { ref } from "vue";
import todoListHeader from "@/components/TodoList/TodoListHeader.vue";
import todoListInput from "@/components/TodoList/TodoListInput.vue";
import todoListItemList from "@/components/TodoList/TodoListItemList.vue";
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
