<template>
  <div class="breadcrumb">
    <el-breadcrumb separator=">">
      <template v-for="(item, index) in currentPath" :key="index">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { storeToRefs } from "pinia";
  import { useMainStore } from "@/store/mainData";

  const route = useRoute();
  const mainStore = useMainStore();
  let { currentPath } = storeToRefs(mainStore);

  watch(
    () => route.matched,
    (value) => {
      currentPath.value = value;
    },
    { immediate: true }
  );
  // console.log(route.matched);
</script>

<style lang="less" scoped>
  .breadcrumb {
    display: flex;
    margin-left: 10px;
  }
</style>
