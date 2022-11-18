import { useLoginStore } from "@/store/loginData";
import { useMainStore } from "@/store/mainData";
import { useRoute } from "vue-router";
// 刷新页面保持store有效
export default function () {
  const loginStore = useLoginStore();
  const mainStore = useMainStore();
  loginStore.refreshData();
  mainStore.refreshData();
}
