<template>
  <div>
    <el-card class="goods-card">
      <h1 class="title">商品列表</h1>
      <el-table :data="goodsList" style="width: 100%" border>
        <el-table-column
          prop="name"
          label="商品名称"
          width="100"
          show-overflow-tooltip
        />
        <el-table-column prop="imgUrl" label="商品" align="center">
          <template #default="scope">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.imgUrl"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="oldPrice"
          label="原价"
          align="center"
          width="100px"
        />
        <el-table-column
          prop="newPrice"
          label="打折"
          align="center"
          width="100px"
        />
        <el-table-column
          prop="address"
          label="产地"
          align="center"
          width="100px"
        />
        <el-table-column prop="updateAt" label="更新时间" align="center" />
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
              :disabled="true"
              @click="handleEditorClick(scope.row)"
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
          :total="totalGoods"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick"
        />
      </template>
    </el-card>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { getGoodsData, deleteGoods } from "@/service/product";

  const goodsList = ref([]);
  const totalGoods = ref();

  function getGoodsList(page) {
    getGoodsData({ offset: (page - 1) * 10 }).then((res) => {
      // console.log(res.data);
      goodsList.value = res.data.data.list;
      totalGoods.value = res.data.data.totalCount;
    });
  }
  getGoodsList(1);
  const handleDeleteClick = (value) => {
    const { id } = value;
    deleteGoods(id).then((res) => {
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
    });
  };
  const handleEditorClick = () => {};
  const handleCurrentChange = (currentPage) => {
    getGoodsList(currentPage);
  };
  const handlePrevClick = (currentPage) => {
    getGoodsList(currentPage);
  };
  const handleNextClick = (currentPage) => {
    getGoodsList(currentPage);
  };
</script>

<style lang="less" scoped>
  .goods-card {
    .title {
      margin: 20px 0;
      color: black;
      font-size: 25px;
    }
    .pagination {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 20px;
    }
  }
</style>
