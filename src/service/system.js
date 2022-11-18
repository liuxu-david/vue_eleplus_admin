import request from "./index";

// 获取用户页面的请求
export function getUserList(data = { offset: 0, size: 10 }) {
  return request({
    url: "/users/list",
    method: "POST",
    data,
  });
}
export function deleteUser(id) {
  return request({
    url: `/users/${id}`,
    method: "DELETE",
  });
}
export function createUser(content) {
  return request({
    url: "/users",
    method: "POST",
    data: {
      name: content.name,
      realname: content.realname,
      password: content.password,
      cellphone: content.cellphone,
      departmentId: content.selectvalue,
      roleId: 1,
    },
  });
}
export function changeUser(id, content) {
  return request({
    url: `/users/${id}`,
    method: "PATCH",
    data: {
      name: content.name,
      realname: content.realname,
      password: content.password,
      cellphone: content.cellphone,
      departmentId: content.selectvalue,
      roleId: 1,
    },
  });
}

// 获取部门的一些请求
export function getDepartmentList() {
  return request({
    url: "/department/list",
    method: "POST",
  });
}

export function deleteDepartment(id) {
  return request({
    url: `/department/${id}`,
    method: "DELETE",
  });
}

export function createDepartment(name) {
  return request({
    url: "/department",
    method: "POST",
    data: {
      name,
      leader: "刘旭",
    },
  });
}
// 获取角色的一些请求
export function getRoleList() {
  return request({
    url: "/role/list",
    method: "POST",
  });
}
export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: "DELETE",
  });
}
export function createRole(name) {
  return request({
    url: "/role",
    method: "POST",
    data: {
      name,
      intro: "写代码",
    },
  });
}
// 获取菜单的一些请求
export function getMenuList() {
  return request({
    url: "/menu/list",
    method: "POST",
  });
}
