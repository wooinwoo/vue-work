<script setup lang="ts">
import { todoListData, inputData } from "@/stores/global";
interface InputEvent extends Event {
  target: HTMLInputElement;
}

const input = inputData();
const data = todoListData();

const changeData = (e: Event) => {
  input.inputValue = (<HTMLInputElement>e.target).value;
};

const Add = () => {
  if (input.inputValue.length > 0)
    data.addItem({
      title: input.inputValue,
      checkStatus: false,
      delStatus: false,
    });
  input.inputValue = "";
};
</script>

<template>
  <input
    type="text"
    class="todo-input"
    placeholder="할일을 입력해주세요."
    :value="input.inputValue"
    @input="changeData"
    @keyup.enter="Add" />
</template>

<style scoped>
.todo-input {
  width: 100%;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  margin: 5px 0;
  background-color: rgb(233, 233, 233);
}

.todo-input::placeholder {
  font-size: 14px;
}
</style>
