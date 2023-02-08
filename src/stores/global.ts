import { defineStore } from "pinia";

interface itemData {
  title: string;
  checkStatus: boolean;
  delStatus: boolean;
}

export const todoListData = defineStore("global", {
  state: () => {
    return {
      todoList: [
        {
          title: "청소하기",
          checkStatus: true,
          delStatus: false,
        },
        {
          title: "공과금 내기",
          checkStatus: false,
          delStatus: false,
        },
        {
          title: "운동 30분하기",
          checkStatus: false,
          delStatus: false,
        },
      ],
    };
  },
  actions: {
    addItem(e: itemData) {
      this.todoList.push(e);
    },
  },
});

export const inputData = defineStore("global2", {
  state: () => {
    return {
      inputValue: "dasd",
    };
  },
});
