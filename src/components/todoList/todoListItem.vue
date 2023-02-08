<script setup lang="ts">
import { defineProps } from "vue";
import { todoListData } from "@/stores/global";
const data = todoListData();
interface Props {
  itemData: {
    title: string;
    checkStatus: boolean;
    delStatus: boolean;
  };
  itemId: string;
}
const props = defineProps<Props>();
const onCheck = (e: Event) => {
  console.log(e);
  props.itemData.checkStatus = (<HTMLInputElement>e.target).checked
    ? true
    : false;
};

const del = () => {
  props.itemData.delStatus = true;
  data.todoList = data.todoList.filter((val) => val.delStatus == false);
};
</script>

<template>
  <li class="todo-item">
    <input
      type="checkbox"
      class="checkbox"
      :id="props.itemId"
      :checked="props.itemData.checkStatus"
      @click="onCheck" />
    <label :for="props.itemId">✔</label>
    <div class="todo">{{ props.itemData.title }}</div>
    <button class="delBtn" @click="del">x</button>
  </li>
</template>

<style scoped>
.todo-item {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #ddd;
}

.checkbox {
  display: none;
}
.checkbox + label {
  min-width: none;
  min-height: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 50px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
}

.checkbox:checked + label {
  color: white;
  background: hsla(160, 100%, 37%, 1);
}

.todo {
  font-size: 1.3rem;
  padding: 0 1rem;
  width: 80%;
}
.delBtn {
  opacity: 1;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: lighter;
  cursor: pointer;
  background: none;
  border: none;
  color: #ddd;
}
.todo-item .delBtn:hover {
  opacity: 0.5;
}
</style>
