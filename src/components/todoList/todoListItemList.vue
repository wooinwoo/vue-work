<script setup lang="ts">
import todoListItem from "@/components/TodoList/TodoListItem.vue";
import { todoListData } from "@/stores/global";
const data = todoListData();
</script>

<template>
  <todoListItem
    :itemData="data.todoList[i]"
    :itemId="String(i)"
    v-for="(a, i) in data.todoList.length"
    :key="a" />
  <div>{{ data.todoList }}</div>
</template>

<style scoped></style>
