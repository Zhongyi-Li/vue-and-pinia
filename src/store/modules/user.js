import { defineStore } from "pinia";
const asyncFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = [{ name: "Kora" }, { name: "Kuma" }];
      resolve(list);
    }, 2000);
  });
};

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      counter: 0,
      producTree: [],
    };
  },

  actions: {
    increment() {
      this.counter++;
    },
    async fetchProductCategory() {
      const result = await asyncFn();
      this.producTree = result;
      console.log("结果：", result);
    },
  },
});
