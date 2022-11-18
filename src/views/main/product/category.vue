<template>
  <div>
    <el-card class="header">
      <h1>添加分类</h1>
      <el-input v-model="inputValue" placeholder="请输入添加的分类" />
      <el-button type="primary" @click="handleAddCategory">添加</el-button>
    </el-card>
    <el-card class="body">
      <h1>分类列表</h1>
      <el-input v-model="editorValue" placeholder="请输入想要编辑成的内容" />
      <el-table :data="productList" style="width: 100%" height="500">
        <el-table-column prop="name" label="分类名称" width="100" />
        <el-table-column prop="createAt" label="创建时间" align="center" />
        <el-table-column prop="updateAt" label="更新时间" align="center" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDeleteClick(scope.row)"
              >删除</el-button
            >
            <el-button size="small" @click="handleEditorClick(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import {
    updateCategory,
    getCategoryList,
    createCategory,
    deleteCategory,
  } from "@/service/product";

  const productList = ref([]);
  const inputValue = ref("");
  const editorValue = ref("");

  // 添加分类
  function getCategoryData() {
    getCategoryList().then((res) => {
      productList.value = res.data.data.list;
    });
  }
  getCategoryData();
  const handleAddCategory = () => {
    createCategory(inputValue.value).then((res) => {
      inputValue.value = "";
      ElMessage({
        message: `${res.data.data}`,
        type: "success",
      });
      getCategoryData();
    });
  };
  // 添加删除操作
  const handleDeleteClick = (value) => {
    const { id } = value;
    deleteCategory(id).then((res) => {
      if (res.data.code === 0) {
        ElMessage({
          message: `${res.data.data}`,
          type: "success",
        });
      } else {
        ElMessage({
          message: `${res.data.data}`,
          type: "error",
        });
      }
      getCategoryData();
    });
  };
  // 添加更新操作
  const handleEditorClick = (value) => {
    const { id } = value;
    updateCategory(id, editorValue.value).then((res) => {
      editorValue.value = "";
      if (res.data.code === 0) {
        ElMessage({
          message: `${res.data.data}`,
          type: "success",
        });
      } else {
        ElMessage({
          message: `${res.data.data}`,
          type: "error",
        });
      }
      getCategoryData();
    });
  };
</script>

<style lang="less" scoped>
  .header {
    h1 {
      margin-bottom: 20px;
    }
    .el-input {
      width: 90%;
      margin-right: 10px;
    }
  }
  .body {
    margin-top: 25px;
    h1 {
      margin-bottom: 20px;
    }
  }
</style>
