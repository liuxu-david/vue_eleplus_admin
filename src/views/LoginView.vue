<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="login-header">
        <el-image :src="url" :fit="contain" />
        <div class="text">千面管理系统</div>
      </div>
      <div class="login-form">
        <el-form
          ref="loginForm"
          :model="loginFormData"
          style="max-width: 400px"
          :rules="rules"
          status-icon
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginFormData.username"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <el-icon class="el-input__icon"><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginFormData.password"
              placeholder="请输入密码"
              type="password"
            >
              <template #prefix>
                <el-icon class="el-input__icon"><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="check-line">
            <div>
              <el-checkbox
                v-model="loginFormData.remeberUserName"
                label="记住用户名"
                size="small"
              />
            </div>
            <div class="check-item"></div>
            <div>
              <el-checkbox
                v-model="loginFormData.remeberPassword"
                label="记住密码"
                size="small"
              />
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="danger" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-footer">版权所有：千面xxxx科技有限公司</div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from "vue";
  import { User, Lock } from "@element-plus/icons-vue";
  import { ElMessage } from "element-plus";
  import loginDataUtils from "../utils/loginData.js";

  const url = new URL("../assets/logo.png", import.meta.url).href;
  const loginForm = ref(null);
  const loginFormData = ref({
    username: "",
    password: "",
    remeberUserName: false,
    remeberPassword: false,
  });
  // 定义表单验证规则
  const rules = ref({
    username: [
      {
        required: true,
        message: "用户名未填写",
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "密码未填写",
        trigger: "blur",
      },
      { min: 4, max: 8, message: "密码的长度长度过短", trigger: "blur" },
    ],
  });
  // 生命周期中的一些事件处理
  onMounted(() => {
    loginFormData.value.username = loginDataUtils.getLoginData("username");
    loginFormData.value.password = loginDataUtils.getLoginData("password");
  });
  // 一些事件
  const onSubmit = () => {
    loginForm.value.validate((valid) => {
      if (valid) {
        // 表单校验成功，调用登录接口
        if (loginFormData.value.remeberUserName) {
          loginDataUtils.savaLoginData(
            "username",
            loginFormData.value.username
          );
        }
        if (loginFormData.value.remeberPassword) {
          loginDataUtils.savaLoginData(
            "password",
            loginFormData.value.password
          );
        }
      } else {
        return;
      }
    });
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
      .text {
        font-size: 23px;
        color: #fff;
        margin: 10px 0;
      }
      .login-form {
        .el-input {
          height: 35px;
        }
        .el-button {
          width: 100%;
          height: 35px;
        }
        .el-checkbox {
          color: #fff;
        }
        .check-line {
          display: flex;
          height: 20px;
          .check-item {
            flex: 1;
          }
        }
        .el-input__icon {
          font-size: 18px;
          color: #000;
        }
      }
    }
    .login-footer {
      color: black;
      font-size: 12px;
      margin-top: -10px;
    }
  }
</style>
