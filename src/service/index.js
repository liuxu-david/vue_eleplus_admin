import axios from "axios";
import loginDataUtils from "@/utils/loginData";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const token = loginDataUtils.getLoginData("token");
    if (token) {
      // 设置携带token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// service.interceptors.response.use(
//   (response) => {},
//   (err) => {}
// );
export default service;
