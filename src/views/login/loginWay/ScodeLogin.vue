<template>
  <div class="scodelogin">
    <el-image :src="scodeImg" class="scodeImg" fit="fill"></el-image>
  </div>
</template>

<script setup>
  const scodeImg = new URL("../../../assets/scode.png", import.meta.url).href;
</script>

<style lang="less" scoped>
  .scodelogin {
    // background-color: red;
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 40px;
    .scodeImg {
      width: 100%;
      height: 100%;
    }
  }
</style>
