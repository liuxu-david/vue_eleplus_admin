<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ item.subtitle }}</span>
          <el-tooltip :content="item.tips" placement="top"
            ><el-icon :size="18"><Warning /></el-icon
          ></el-tooltip>
        </div>
      </template>
      <div class="price">{{ item.number1 }}</div>
      <div class="goodsCount">商品总销售额￥{{ item.number2 }}</div>
    </el-card>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";
  defineProps({
    item: {
      type: Object,
    },
  });
</script>

<style lang="less" scoped>
  .box-card {
    margin-top: 10px;
    .card-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 700;
      }
    }
    .price {
      font-weight: 700;
      font-size: 25px;
    }
    .goodsCount {
      float: left;
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 8px;
    }
  }
</style>
