import request from "./index";

// 发起登录请求
export function getLogin(data) {
  return request({
    url: "/login",
    method: "POST",
    data,
  });
}
// 查询登录用户的菜单
export function getMenuList(id) {
  return request({
    url: `/role/${id}/menu`,
    method: "GET",
  });
}
