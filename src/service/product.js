import request from "./index";

// 商品类别请求
export function createCategory(category) {
  return request({
    url: "/category",
    method: "POST",
    data: { name: category },
  });
}
export function getCategoryList() {
  return request({
    url: "/category/list",
    method: "POST",
  });
}

export function updateCategory(id, data) {
  return request({
    url: `/category/${id}`,
    method: "PATCH",
    data: {
      name: data,
    },
  });
}

export function deleteCategory(id) {
  return request({
    url: `/category/${id}`,
    method: "DELETE",
  });
}

// 商品信息请求
export function getGoodsData(data = { offset: 0 }) {
  return request({
    url: "/goods/list",
    method: "POST",
    data,
  });
}

export function deleteGoods(id) {
  return request({
    url: `/goods/${id}`,
    method: "DELETE",
  });
}
