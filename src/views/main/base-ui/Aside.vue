<template>
  <div class="aside">
    <div class="header">
      <img src="../../../assets/logo.svg" alt="" />
      <span v-if="!isClose">VUE3+Pinia+Echarts</span>
    </div>
    <div class="menu">
      <!-- 引入element-plus -->
      <el-menu
        class="el-menu-vertical-demo"
        background-color="none"
        text-color="#fff"
        unique-opened
        active-text-color="#ffd04b"
        :collapse-transition="false"
        router
        :collapse="isClose"
      >
        <el-sub-menu
          v-for="(item, index) in menuData"
          :index="index + ''"
          :key="item.id"
        >
          <template #title>
            <el-icon
              ><Monitor v-if="index === 0" /><Setting
                v-else-if="index === 1" /><Goods
                v-else-if="index === 2" /><ChatLineRound
                v-else-if="index === 3"
            /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subitem in item.children"
              :index="subitem.url"
              :key="subitem.id"
              >{{ subitem.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
  import { useLoginStore } from "@/store/loginData";
  import { useMainStore } from "@/store/mainData";
  import { storeToRefs } from "pinia";
  import { getIconList } from "@/utils/iconList";
  import { ref } from "vue";

  const currentUrl = ref("");
  const loginStore = useLoginStore();
  const mainStore = useMainStore();
  const { menuData } = storeToRefs(loginStore);
  const { isClose, currentPath } = storeToRefs(mainStore);
  // console.log(currentPath.value);
</script>

<style lang="less" scoped>
  .aside {
    .header {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 20px 0;
      overflow: hidden;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        color: #ffffff;
        line-height: 40px;
      }
    }
    .menu {
      color: #ffffff;
      .el-menu {
        border-right: 0;
      }
    }
  }
</style>
