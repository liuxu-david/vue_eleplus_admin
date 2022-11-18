<template>
  <div class="department">
    <el-card class="department-header">
      <h1>添加部门</h1>
      <div class="input-operate">
        <el-input
          class="input"
          v-model="departValue"
          placeholder="请输入部门名称"
        ></el-input>
        <el-button type="primary" @click="handleCreateDepartment"
          >添加</el-button
        >
      </div>
    </el-card>
    <el-card class="department-body">
      <h1>部门列表</h1>
      <div class="department-list">
        <el-table :data="departmentList" style="width: 100%" height="500">
          <el-table-column prop="name" label="部门名称" width="100" />
          <el-table-column prop="leader" label="领导" align="center" />
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
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import {
    getDepartmentList,
    deleteDepartment,
    createDepartment,
  } from "@/service/system";

  const departValue = ref("");
  const departmentList = ref([]);

  function getDepartmentData() {
    getDepartmentList().then((res) => {
      // console.log(res.data.data.list);
      departmentList.value = res.data.data.list;
    });
  }
  getDepartmentData();
  const handleCreateDepartment = () => {
    createDepartment(departValue.value).then((res) => {
      departValue.value = "";
      ElMessage({
        message: `${res.data.data}`,
        type: "success",
      });
      getDepartmentData();
    });
  };
  const handleDeleteClick = (value) => {
    const { id } = value;
    deleteDepartment(id).then((res) => {
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
      getDepartmentData();
    });
  };
  const handleEditorClick = () => {};
</script>

<style lang="less" scoped>
  .department {
    .department-header {
      h1 {
        color: black;
        font-size: 20px;
      }
      .input-operate {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        .input {
          width: 90%;
        }
      }
      margin-bottom: 20px;
    }
  }
</style>
