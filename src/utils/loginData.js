const loginDataUtils = {
  savaLoginData(key, value) {
    localStorage.setItem(key, value);
  },
  removeLoginData(key) {
    localStorage.removeItem(key);
  },
  getLoginData(key) {
    return localStorage.getItem(key);
  },
};
export default loginDataUtils;
