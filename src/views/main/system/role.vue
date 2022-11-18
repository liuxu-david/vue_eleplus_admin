<template>
  <div class="role">
    <el-card class="role-header">
      <h1>添加角色</h1>
      <div class="input-operate">
        <el-input
          class="input"
          v-model="roleValue"
          placeholder="请输入部门名称"
        ></el-input>
        <el-button type="primary" @click="handleCreateDepartment"
          >添加</el-button
        >
      </div>
    </el-card>
    <el-card class="role-body">
      <h1>角色列表</h1>
      <div class="role-list">
        <el-table :data="roleList" style="width: 100%" height="500">
          <el-table-column prop="name" label="角色名称" width="100" />
          <el-table-column prop="intro" label="角色介绍" align="center" />
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
  import { getRoleList, deleteRole, createRole } from "@/service/system";

  const roleValue = ref("");
  const roleList = ref([]);

  function getRoleData() {
    getRoleList().then((res) => {
      // console.log(res.data.data.list);
      roleList.value = res.data.data.list;
    });
  }
  getRoleData();
  const handleCreateDepartment = () => {
    createRole(roleValue.value).then((res) => {
      roleValue.value = "";
      ElMessage({
        message: `${res.data.data}`,
        type: "success",
      });
      getRoleData();
    });
  };
  const handleDeleteClick = (value) => {
    const { id } = value;
    deleteRole(id).then((res) => {
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
      getRoleData();
    });
  };
  const handleEditorClick = () => {};
</script>

<style lang="less" scoped>
  .role {
    .role-header {
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
