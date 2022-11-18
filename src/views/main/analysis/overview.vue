<template>
  <!-- 概述 -->
  <div class="overview">
    <el-card class="intro-card">
      <template #header>
        <div class="card-header">
          <h2>关于</h2>
        </div>
      </template>
      <h3>
        Vue3_eleplus_admin是基于Vue3,Pinia,Echarts,VueRouter,ElementPlus等后台系统解决方案
      </h3>
    </el-card>

    <!-- ---------------------------- -->
    <el-card class="技术">
      <template #header>
        <div class="card">
          <h1>相关依赖</h1>
        </div>
      </template>
      <!-- 显示相关的依赖 -->
      <h2 class="dev">生产依赖</h2>
      <el-descriptions :column="1" border
        ><el-descriptions-item
          v-for="(value, key) in devDependencies"
          :key="key"
        >
          <template #label>
            <div class="cell-item">
              {{ key }}
            </div>
          </template>
          <el-tag size="small"> {{ value }}</el-tag></el-descriptions-item
        >
      </el-descriptions>
      <h2 class="pro">开发依赖</h2>
      <el-descriptions :column="1" border
        ><el-descriptions-item v-for="(value, key) in dependencies" :key="key">
          <template #label>
            <div class="cell-item">
              {{ key }}
            </div>
          </template>
          <el-tag size="small"> {{ value }}</el-tag></el-descriptions-item
        >
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup>
  import packageData from "../../../../package.json";

  const { dependencies, devDependencies } = packageData;
</script>

<style lang="less" scoped>
  .overview {
    .intro-card {
      margin: 0 0 15px;
    }
    .dev {
      margin: 10px 0 25px 0;
    }
    .pro {
      margin: 25px 0;
    }
  }
</style>
