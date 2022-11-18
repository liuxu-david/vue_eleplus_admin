import { createRouter, createWebHistory } from "vue-router";
import loginDataUtils from "@/utils/loginData";
import { nextTick } from "vue";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "登录",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/LoginView.vue"),
  },
  {
    name: "首页",
    path: "/main",
    redirect: "/main/analysis/overview",
    component: () => import("../views/main/index.vue"),
    children: [
      {
        name: "系统总览",
        path: "analysis",
        children: [
          {
            name: "核心技术",
            path: "overview",
            component: () => import("../views/main/analysis/overview.vue"),
          },
          {
            name: "商品统计",
            path: "dashboard",
            component: () => import("../views/main/analysis/dashboard.vue"),
          },
        ],
      },
      {
        name: "系统管理",
        path: "system",
        children: [
          {
            name: "用户管理",
            path: "user",
            component: () => import("../views/main/system/user.vue"),
          },
          {
            name: "部门管理",
            path: "department",
            component: () => import("../views/main/system/department.vue"),
          },
          {
            name: "菜单管理",
            path: "menu",
            component: () => import("../views/main/system/menu.vue"),
          },
          {
            name: "角色管理",
            path: "role",
            component: () => import("../views/main/system/role.vue"),
          },
        ],
      },
      {
        name: "商品中心",
        path: "product",
        children: [
          {
            name: "商品类别",
            path: "category",
            component: () => import("../views/main/product/category.vue"),
          },
          {
            name: "商品信息",
            path: "goods",
            component: () => import("../views/main/product/goods.vue"),
          },
        ],
      },
      {
        name: "随便聊聊",
        path: "story",
        children: [
          {
            name: "你的故事",
            path: "chat",
            component: () => import("../views/main/story/chat.vue"),
          },
          {
            name: "故事列表",
            path: "list",
            component: () => import("../views/main/story/list.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// 设置路由守卫
router.beforeEach((to, from, next) => {
  const token = loginDataUtils.getLoginData("token");
  if (to.path === "/login") {
    if (token) {
      // 如果有token的话就还在当前页面就行;
      next("/main");
    } else {
      next();
    }
  } else {
    token ? next() : next("/login");
  }
});

export default router;
