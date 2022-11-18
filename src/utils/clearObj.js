// 遍历清空对象
export default function (value) {
  for (let key in value) {
    value[key] = "";
  }
}
