import request from "./index";

export function getAmountList() {
  return request({
    url: "/goods/amount/list",
    method: "GET",
  });
}
