<template>
  <div class="main">
    <el-container>
      <el-aside :width="isClose ? '60px' : '210px'" class="main-panel">
        <Aside />
      </el-aside>
      <el-container>
        <el-header class="main-header"
          ><Header @isClose="getIsClose"
        /></el-header>
        <el-main class="main-content">
          <div>
            <router-view :key="currentUrl"></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import Header from "@/views/main/base-ui/Header";
  import Aside from "@/views/main/base-ui/Aside";
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const currentUrl = ref("");
  // console.log();
  currentUrl.value = router.currentRoute.value.path;
  let isClose = ref(false);

  const getIsClose = (e) => {
    isClose.value = e;
  };
</script>

<style lang="less" scoped>
  .el-container {
    height: 100vh;
    background-color: #f0f0f0;
    .el-aside {
      background-color: #001529;
      overflow: hidden;
    }
    .el-header {
      background-color: #ffffff;
    }
    .el-main {
      padding: 20px;
    }
  }
</style>
