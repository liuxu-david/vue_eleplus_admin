// const axios = require("axios");

// const instance = axios.create({
//   baseURL: "http://152.136.185.210:5000/login",
//   timeout: 1000,
// });
// function getLogin(name, password) {
//   return instance.post({
//     url: "/login",
//     data: { name: name, password, password },
//   });
// }
// getLogin("codewhy", "123456").then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// const obj = {
//   0: {
//     id: 38,
//     name: "系统总览",
//     type: 1,
//     url: "/main/analysis",
//     icon: "el-icon-monitor",
//   },
//   1: {
//     id: 1,
//     name: "系统管理",
//     type: 1,
//     url: "/main/system",
//     icon: "el-icon-setting",
//   },
//   2: {
//     id: 9,
//     name: "商品中心",
//     type: 1,
//     url: "/main/product",
//     icon: "el-icon-goods",
//   },
//   3: {
//     id: 41,
//     name: "随便聊聊",
//     type: 1,
//     url: "/main/story",
//     icon: "el-icon-chat-line-round",
//   },
// };
// for (item in obj) {
//   console.log(item);
// }

// const str = "el-tk-nn";
// console.log(str.split("-"));

// var name = "Tom";

// (function () {
//   if (typeof name == "undefined") {
//     var name = "Jack";

//     console.log("Goodbye " + name);
//   } else {
//     console.log("Hello" + name);
//   }
// })();

// setTimeout(() => {
//   console.log(4);
// });
// new Promise((resolve) => {
//   resolve();
//   setTimeout(() => {
//     console.log(1);
//   }, 0);
// }).then(() => {
//   console.log(3);
// });
// console.log(2);
const obj = {
  name: "",
  realname: "",
  password: "",
  cellphone: "",
  selectvalue: "",
};
console.log(obj);
