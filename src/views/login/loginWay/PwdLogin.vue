<template>
  <div class="login-form">
    <el-form
      ref="loginForm"
      :model="loginFormData"
      style="max-width: 400px"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="username">
        <el-input v-model="loginFormData.username" placeholder="请输入用户名">
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
        <el-button type="danger" @click="handleSubmitClick">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from "vue";
  import { User, Lock } from "@element-plus/icons-vue";
  import { ElMessage } from "element-plus";
  import loginDataUtils from "@/utils/loginData.js";
  import { getLogin, getMenuList } from "@/service/getLogin.js";
  import router from "@/router/index.js";
  import { loginRules } from "../config/rules.js";
  import { useLoginStore } from "@/store/loginData";

  const loginForm = ref(null);
  const loginFormData = ref({
    username: "",
    password: "",
    remeberUserName: false,
    remeberPassword: false,
  });
  const rules = ref(loginRules);
  const loginStore = useLoginStore();

  // 生命周期中的一些事件处理
  onMounted(() => {
    loginFormData.value.username = loginDataUtils.getLoginData("username");
    loginFormData.value.password = loginDataUtils.getLoginData("password");
  });

  // 表单提交事件
  const handleSubmitClick = () => {
    loginForm.value.validate((valid) => {
      if (!valid) return;
      // 表单校验成功，调用登录接口
      if (loginFormData.value.remeberUserName) {
        loginDataUtils.setLoginData("username", loginFormData.value.username);
      }
      if (loginFormData.value.remeberPassword) {
        loginDataUtils.setLoginData("password", loginFormData.value.password);
      }
      // 调用登录接口，跳转到主页
      getLogin({
        name: loginFormData.value.username,
        password: loginFormData.value.password,
      })
        .then((res) => {
          if (res.data.code == 0) {
            const { id, token, name } = res.data.data;
            loginDataUtils.setLoginData("token", token);
            loginStore.getTokenAction(token);
            loginStore.getMenuAction(id);
            router.push("/main");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
</script>

<style lang="less" scoped>
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
</style>
