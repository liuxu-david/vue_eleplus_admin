<template>
  <div>
    <el-card>
      <h1>菜单列表</h1>
      <div class="menu-list">
        <el-table :data="menulist" style="width: 100%" height="200">
          <el-table-column prop="name" label="菜单名称" width="100" />
          <el-table-column
            prop="type"
            label="菜单类型"
            width="100"
            align="center"
          />
          <el-table-column prop="url" label="菜单地址" align="center" />
          <el-table-column prop="createAt" label="创建时间" align="center" />
          <el-table-column prop="icon" label="菜单图标" align="center" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import { getMenuList } from "@/service/system";
  import { ref } from "vue";

  const menulist = ref();
  getMenuList().then((res) => {
    menulist.value = res.data.data.list;
  });
</script>

<style lang="less" scoped></style>
