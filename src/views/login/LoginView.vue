<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="login-header">
        <el-image :src="url" :fit="contain" />
        <!-- <div class="text">千面管理系统</div> -->
        <div class="tab-bar">
          <div
            class="tab-item"
            @click="changeOption(0)"
            :class="{ active: currentIndex === 0 ? true : false }"
          >
            密码登录
          </div>
          <div
            class="tab-item"
            @click="changeOption(1)"
            :class="{ active: currentIndex === 1 ? true : false }"
          >
            免密登录
          </div>
          <div
            class="tab-item"
            @click="changeOption(2)"
            :class="{ active: currentIndex === 2 ? true : false }"
          >
            扫码登录
          </div>
        </div>
      </div>
      <!-- 密码登录 -->
      <pwd-login v-if="currentIndex === 0"></pwd-login>
      <!-- 验证码登录 -->
      <vcode-login v-else-if="currentIndex === 1"></vcode-login>
      <!-- 扫码登录 -->
      <scode-login v-else></scode-login>

      <div class="login-footer">版权所有：千面xxxx科技有限公司</div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import PwdLogin from "./components/PwdLogin.vue";
  import VcodeLogin from "./components/VcodeLogin.vue";
  import ScodeLogin from "./components/ScodeLogin.vue";

  // 定义登录页面的头像图片
  const url = new URL("../../assets/logo.png", import.meta.url).href;

  // 定义tab栏切换的数据
  let currentIndex = ref(0);
  // 一些事件
  // tab栏切换事件
  const changeOption = (index) => {
    currentIndex.value = index;
    // console.log(currentIndex.value);
  };
</script>

<style lang="less" scoped>
  .login-page {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #6262cf;
    background: linear-gradient(#56b6c2, #6262cf 40%);
    .login-panel {
      flex-direction: column;
      width: 300px;
      height: 50vh;
      .login-header .el-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #fff;
      }
      .tab-bar {
        display: flex;
        height: 6vh;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 10px 0;
        border-radius: 5px;
        .tab-item {
          flex: 1;
          line-height: 6vh;
          color: #fff;
          user-select: none;
          cursor: pointer;
          &:nth-child(1) {
            border-radius: 5px 0 0 5px;
          }
          &:nth-child(3) {
            border-radius: 0 5px 5px 0;
          }
        }
        .active {
          background-color: #08d5e0;
        }
      }
    }
    .login-footer {
      color: black;
      font-size: 12px;
      margin-top: 10px;
    }
  }
</style>
