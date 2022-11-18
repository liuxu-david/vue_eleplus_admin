class loginDataUtils {
  setLoginData(key, value) {
    if (key == "menu") {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
  }
  removeLoginData(key) {
    window.localStorage.removeItem(key);
  }
  getLoginData(key) {
    return window.localStorage.getItem(key);
  }
  removeAllData() {
    window.localStorage.clear();
  }
}
export default new loginDataUtils();
