<template>
  <div class="story-list">
    <el-card class="story-card">
      <h1>故事列表</h1>
      <el-table :data="storyData" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180" align="center" />
        <el-table-column prop="title" label="名称" width="210" align="center" />
        <el-table-column prop="content" label="内容" align="center" />
        <el-table-column prop="createAt" label="时间" align="center" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { getStoryList } from "@/service/story";

  const storyData = ref([]);
  getStoryList().then((res) => {
    storyData.value = res.data.data.list;
  });
</script>

<style lang="less" scoped>
  .story-card {
    h1 {
      color: black;
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
</style>
