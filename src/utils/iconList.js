// 没用了
import { useLoginStore } from "@/store/loginData";

export function getIconList() {
  const longinStore = useLoginStore();
  const menuData = longinStore.menuData;
  const iconList = [];
  for (let item of menuData) {
    iconList.push(
      "<" + item["icon"].split("-").join("").split("elicon")[1] + "/>"
    );
  }
  return iconList;
}
