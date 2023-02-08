<script setup lang="ts">
import { todoListData, inputData } from "@/stores/global";
import { ref } from "@vue/reactivity";
const data = todoListData();
const input = inputData();

const modal = ref(false);
const delDataLength = ref(0);

const Add = () => {
  if (input.inputValue.length > 0) {
    data.addItem({
      title: input.inputValue,
      checkStatus: false,
      delStatus: false,
    });
    input.inputValue = "";
  }
};

const allCheck = () => {
  let allState = false;
  data.todoList.map((val) => {
    if (val.checkStatus == false) allState = true;
  });
  data.todoList.map((val) => {
    val.checkStatus = allState;
  });
};

const delCheck = () => {
  delDataLength.value = data.todoList.filter(
    (val) => val.checkStatus == true
  ).length;
  modal.value = true;
};

const clear = () => {
  data.todoList = data.todoList.filter((val) => val.checkStatus == false);
  modal.value = false;
};
</script>

<template>
  <header>
    <h1>TODO LIST</h1>
    <nav aria-label="items">
      <ol class="items">
        <li class="item"><button @click="Add">Add</button></li>
        <li class="item"><button @click="allCheck">All</button></li>
        <li class="item" aria-current="page">
          <button @click="delCheck">Clear</button>
        </li>
      </ol>
    </nav>
    <div class="modal_back" v-if="modal" @click="modal = false"></div>
    <div class="modal_front" v-if="modal">
      <h4>모달창</h4>
      <p>{{ delDataLength }}개의 일정을 삭제하시겠습니까?</p>
      <buttongroup>
        <button @click="clear">예</button>
        <button @click="modal = false">아니오</button>
      </buttongroup>
    </div>
  </header>
</template>

<style scoped>
.row + .row {
  margin-top: 15px;
}

.items {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 6px 12px;
  background: #e9ecef;
  border-radius: 5px;
  box-sizing: border-box;
}
.items button {
  font-size: 16px;
  color: hsla(160, 100%, 37%, 1);
  border: 0;
  border-radius: 5px;
}
.items button:hover {
  color: white;
  background: hsla(160, 100%, 37%, 1);
  cursor: pointer;
}

.modal_back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 1;
  opacity: 0.6;
}
.modal_front {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 30vh;
  background: white;
  border-radius: 5px;
  padding: 25px;
  z-index: 2;
  color: rgb(50, 50, 50);
}
.modal_front h4 {
  font-size: 24px;
}
.modal_front buttongroup {
  display: flex;
  justify-content: space-around;
}
</style>
