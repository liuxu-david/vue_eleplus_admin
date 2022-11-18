import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      isClose: false,
      currentPath: "",
    };
  },
  actions: {
    refreshData() {
      this.currentPath = window.location.pathname;
    },
  },
});
