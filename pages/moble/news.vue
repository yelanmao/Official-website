
<template>
  <div class="news-container">
    <MobleNew v-for="(item,index) in showData" :showdata="item" :key="item.id"/>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, jumper, total'"
        :total="allData.total"
        :page-size="6"
        v-model="currentPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
  
  <script setup>
import titleControl from "../../utils/titleControler";
import MobleNew from"../../components/moble/New/index.vue"
let allData = ref({ data: [], total: 0 });
const showData = ref([]);
const currentPage = ref(1);
onMounted(async () => {
  allData.value.data = getNews().value;
  allData.value.total = allData.value.data.length;
  showData.value = allData.value.data.slice(0, 6);
  titleControl.setRouteTitle("新闻活动 | 喵馋农");
});
const handleCurrentChange = (page) => {
  showData.value = allData.value.data.slice(page * 6 - 5, page * 6 + 1);
};
const gotLink = (link) => {
  window.open(link);
};
</script>
  
  <style lang="less" scoped>
.news-container {
  .pagination {
    left: 50%;
    position: relative;
    transform: translate(-50%, 0);
    width: fit-content;
    margin-top: 3vw;
  }
}
:deep(.el-pagination.is-background .el-pager li.is-active){
  background: #00990F;
}
:deep(.el-pagination .el-pager li:focus-visible){
  outline:solid 1px #00990F;
}
:deep(.el-pagination .el-pager li:hover){
  color:#00990F;
}
:deep(.el-input__wrapper.is-focus){
  box-shadow: 0 0 0 1px #00990F inset;
}
:deep(.el-pagination__editor.el-input){
  width:35px;
}
</style>