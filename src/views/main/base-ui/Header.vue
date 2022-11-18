<template>
  <div class="header">
    <div class="header-left">
      <div class="icon-control">
        <template v-if="isClose">
          <el-icon :size="24" @click="handleIconChange"><Expand /></el-icon>
        </template>
        <template v-else>
          <el-icon :size="24" @click="handleIconChange"><Fold /></el-icon>
        </template>
      </div>
      <div class="crumbs">
        <bread-crumbs></bread-crumbs>
      </div>
    </div>

    <div class="header-right" @click="handleDrapdownChange">
      <el-dropdown trigger="click">
        <div class="message">
          <el-avatar class="img" :size="30" :src="url" />
          <div class="text">刘旭</div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Setting" @click="handleExitClick"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineEmits } from "vue";
  import { useRouter } from "vue-router";
  import { useMainStore } from "@/store/mainData";
  import { useLoginStore } from "@/store/loginData";
  import { Setting } from "@element-plus/icons-vue";
  import breadCrumbs from "@/components/breadCrumbs.vue";
  import loginDataUtils from "@/utils/loginData";

  const isClose = ref(false);
  const url = new URL("../../../assets/logo.svg", import.meta.url).href;
  const emits = defineEmits(["isClose"]);
  const mainStore = useMainStore();
  const loginStore = useLoginStore();
  const router = useRouter();

  const handleIconChange = () => {
    isClose.value = !isClose.value;
    mainStore.isClose = isClose.value;
    emits("isClose", isClose.value);
  };
  const handleExitClick = () => {
    loginDataUtils.removeLoginData("token");
    loginDataUtils.removeLoginData("menu");
    loginStore.refreshData();
    router.push("/login");
  };
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    height: 100%;
    .header-left,
    .header-right {
      display: flex;
      align-items: center;
      .img {
        background-color: rgba(255, 255, 255, 0.5);
        margin-right: 5px;
      }
      span {
        font-weight: 700;
      }
    }
    .header-left {
      .icon-control {
        cursor: pointer;
      }
    }
    .header-right {
      cursor: pointer;
      margin-right: 10px;
      .message {
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          color: black;
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
  }
</style>
