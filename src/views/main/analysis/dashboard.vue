<template>
  <div class="dashboard">
    <line-echarts></line-echarts>
    <div>
      <el-row :gutter="15">
        <el-col :span="12" v-for="item in amountList" :key="item.amount">
          <goods-panel :item="item"></goods-panel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { getAmountList } from "@/service/analysis";
  import goodsPanel from "@/components/goodsPanel.vue";
  import lineEcharts from "@/components/lineEcharts";

  const amountList = ref([]);

  onMounted(() => {
    getAmountList().then((res) => {
      amountList.value = res.data.data;
      // console.log(res.data.data);
    });
  });
</script>

<style lang="less" scoped></style>
