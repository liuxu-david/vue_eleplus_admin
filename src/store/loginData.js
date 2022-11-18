import { defineStore } from "pinia";
import { getMenuList } from "@/service/getLogin";
import loginDataUtils from "@/utils/loginData";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      menuData: [],
      token: "",
    };
  },
  getters: {},
  actions: {
    getTokenAction(token) {
      this.token = token;
    },
    getMenuAction(ids) {
      getMenuList(ids).then((res) => {
        // console.log(res.data);
        this.menuData = res.data.data;
        loginDataUtils.setLoginData("menu", res.data.data);
      });
    },
    refreshData() {
      this.token = loginDataUtils.getLoginData("token");
      this.menuData = JSON.parse(loginDataUtils.getLoginData("menu"));
    },
  },
});
