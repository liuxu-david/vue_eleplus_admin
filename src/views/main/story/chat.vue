<template>
  <div class="chat">
    <el-card class="intro-card">
      <h1>分享你的故事</h1>
    </el-card>
    <wang-editor></wang-editor>
  </div>
</template>

<script setup>
  import wangEditor from "@/components/wangEditor.vue";
</script>

<style lang="less" scoped>
  .intro-card {
    h1 {
      color: rgb(16, 38, 239);
      font-size: 20px;
    }
  }
</style>
