<template>
  <div class="user">
    <el-card class="user-header">
      <h1>高级检索</h1>
      <div class="operate">
        <el-form :inline="true" :model="userFormData" label-width="80px">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="id:"
                ><el-input
                  v-model="userFormData.idValue"
                  placeholder="请输入id"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label=" 用户名:">
                <el-input
                  v-model="userFormData.nameValue"
                  placeholder="请输入用户名"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="真实姓名:">
                <el-input
                  v-model="userFormData.realNameValue"
                  placeholder="请输入真实姓名"
                ></el-input></el-form-item
            ></el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="电话号码:">
                <el-input
                  v-model="userFormData.cellphoneValue"
                  placeholder="请输入电话号码"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="创建时间:">
                <div class="createTime">
                  <el-date-picker
                    v-model="userFormData.value1"
                    type="date"
                    placeholder="请选择"
                  /></div></el-form-item
            ></el-col>
          </el-row>
          <div class="button">
            <el-button type="primary" @click="handleResetClick">重置</el-button>
            <el-button type="primary" @click="handleSearchClick"
              >搜索</el-button
            >
          </div>
        </el-form>
      </div>
    </el-card>
    <el-card class="user-body">
      <div class="operate">
        <h1>用户列表</h1>
        <el-button type="primary" @click="handleShowDialog">新增用户</el-button>
      </div>
      <el-table :data="userList" style="width: 100%" height="480">
        <el-table-column prop="id" label="id" width="100" />
        <el-table-column prop="name" label="昵称" width="100" />
        <el-table-column prop="departmentId" label="部门" width="100" />
        <el-table-column
          prop="realname"
          label="真实姓名"
          width="100"
          align="center"
        />
        <el-table-column prop="cellphone" label="电话" align="center" />
        <el-table-column prop="createAt" label="创建时间" align="center" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDeleteClick(scope.row)"
              >删除</el-button
            >
            <el-button
              size="small"
              @click="handleEditorClick(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <template class="pagination">
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="totalUsers"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick"
        />
      </template>
    </el-card>
    <el-dialog
      v-model="dialogVisible"
      width="50%"
      :title="dialogTitle"
      draggable
      class="dialog"
    >
      <el-form :model="dialogData" label-width="80px" label-position="right">
        <el-form-item label=" 用户名:">
          <el-input
            v-model="dialogData.name"
            placeholder="请输入用户名"
          ></el-input
        ></el-form-item>
        <el-form-item label="真实姓名:">
          <el-input
            v-model="dialogData.realname"
            placeholder="请输入真实姓名"
          ></el-input
        ></el-form-item>
        <el-form-item label="密码:">
          <el-input
            v-model="dialogData.password"
            placeholder="请输入密码："
          ></el-input
        ></el-form-item>
        <el-form-item label="电话号码:">
          <el-input
            v-model="dialogData.cellphone"
            placeholder="请输入电话号码"
          ></el-input
        ></el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="dialogData.selectvalue" placeholder="请选择">
            <el-option label="总裁部" value="1" />
            <el-option label="经理部" value="2" />
            <el-option label="客服部" value="3" />
            <el-option label="测试部" value="5" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleAddUserClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import {
    getUserList,
    deleteUser,
    createUser,
    changeUser,
  } from "@/service/system";
  import clearDialogData from "@/utils/clearObj";

  const userFormData = ref({
    idValue: "",
    nameValue: "",
    realNameValue: "",
    cellphoneValue: "",
    value1: "",
  });
  const dialogData = ref({
    name: "",
    realname: "",
    password: "",
    cellphone: "",
    selectvalue: "",
  });
  const dialogVisible = ref(false);
  const userList = ref([]);
  const totalUsers = ref(null);
  const dialogTitle = ref(null);
  const editorCurrentId = ref(null);

  function getUserData(page) {
    getUserList({ offset: (page - 1) * 10 }).then((res) => {
      userList.value = res.data.data.list;
      totalUsers.value = res.data.data.totalCount;
    });
  }
  getUserData();

  const handleSearchClick = () => {
    getUserList({
      id: userFormData.value.idValue,
      name: userFormData.value.nameValue,
      realname: userFormData.value.realNameValue,
      cellphone: userFormData.value.cellphoneValue,
    }).then((res) => {
      // console.log(res.data.data.list);
      clearDialogData(userFormData.value);
      userList.value = res.data.data.list;
    });
  };
  const handleResetClick = () => {
    clearDialogData(userFormData.value);
    getUserData();
  };
  const handleShowDialog = () => {
    dialogVisible.value = true;
    dialogTitle.value = "新增用户";
  };
  const handleAddUserClick = () => {
    if (dialogTitle.value == "新增用户") {
      createUser(dialogData.value).then((res) => {
        dialogVisible.value = false;
        clearDialogData(dialogData.value);
        ElMessage({
          message: `${res.data.data}`,
          type: "success",
        });
      });
      getUserData();
    } else {
      changeUser(editorCurrentId.value, dialogData.value).then((res) => {
        dialogVisible.value = false;
        clearDialogData(dialogData.value);
        ElMessage({
          message: `${res.data.data}`,
          type: "success",
        });
      });
      getUserData();
    }
  };
  const handleDeleteClick = (value) => {
    const { id } = value;
    deleteUser(id).then((res) => {
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
      getUserData();
    });
  };
  const handleEditorClick = (index, content) => {
    dialogTitle.value = "编辑用户";
    dialogVisible.value = true;
    const { id, name, realname, cellphone, departmentId } = content;
    editorCurrentId.value = id;
    dialogData.value.name = name;
    dialogData.value.realname = realname;
    dialogData.value.cellphone = cellphone;
    dialogData.value.password = "";
    dialogData.value.selectvalue = departmentId;
  };
  const handleCurrentChange = (currentPag) => {
    getUserData(currentPag);
  };
  const handlePrevClick = (currentPag) => {
    getUserData(currentPag);
  };
  const handleNextClick = (currentPag) => {
    getUserData(currentPag);
  };
</script>

<style lang="less" scoped>
  .user {
    .user-header {
      margin-bottom: 25px;
      h1 {
        color: black;
        font-size: 20px;
        margin: 10px 0 30px;
      }
      .operate {
        margin-bottom: 25px;
      }
    }
    .user-body {
      .operate {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        h1 {
          color: black;
          font-size: 20px;
        }
      }
      .pagination {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
      }
    }
    .dialog {
      .el-input {
        width: 80%;
      }
    }
  }
</style>
