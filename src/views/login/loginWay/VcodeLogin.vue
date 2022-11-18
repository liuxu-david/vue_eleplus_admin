<template>
  <div class="login-form">
    <el-form
      ref="loginForm"
      :model="loginFormData"
      style="max-width: 400px"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="telephone">
        <el-input v-model="loginFormData.telephone" placeholder="请输入手机号">
          <template #prefix>
            <el-icon class="el-input__icon"><Iphone /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="vcode">
        <el-input
          class="vcode"
          v-model="loginFormData.vcode"
          placeholder="请输入验证码"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Select /></el-icon>
          </template>
        </el-input>
        <el-button
          class="vcodebtn"
          type="primary"
          @click="getVcode"
          :disabled="isDisabled"
          >{{ btntext }}</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted, onUnmounted } from "vue";
  import { User, Lock } from "@element-plus/icons-vue";
  import { ElMessage } from "element-plus";
  import loginDataUtils from "@/utils/loginData.js";
  import { phoneRules } from "../config/phonerules";

  const loginForm = ref(null);
  const loginFormData = ref({
    telephone: "",
    vcode: "",
  });
  // 定义获取验证码响应式数据
  const isDisabled = ref(false);
  const btntext = ref("获取验证码");
  const timerCount = ref(10);
  let timer = null;
  // 定义表单验证规则
  const rules = ref(phoneRules);

  // 获取验证码事件
  const getVcode = () => {
    isDisabled.value = true;
    timer && clearInterval(timer);
    timer = setInterval(() => {
      timerCount.value--;
      btntext.value = timerCount;
      if (timerCount.value === 0) {
        clearInterval(timer);
        isDisabled.value = false;
        btntext.value = "再次获取验证码";
      }
    }, 1000);
  };
  // 表单提交事件
  const onSubmit = () => {
    loginForm.value.validate((valid) => {
      if (valid) {
        // 表单校验成功，调用登录接口
      } else {
        return;
      }
    });
  };
  onUnmounted(() => {
    clearInterval(timer);
  });
</script>

<style lang="less" scoped>
  .login-form {
    .el-input {
      height: 35px;
    }
    .vcode {
      width: 60%;
    }
    .vcodebtn {
      width: 40% !important;
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
