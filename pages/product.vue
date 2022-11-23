<template>
  <div class="HeaderPage Page">
    <img src="../assets/CMN_ProductHeader.jpg" alt="" />
    <div class="HeaderText">产品中心</div>
  </div>
  <div class="HotGoodsPage">
    <div class="title">种苗</div>
    <div class="GoodsShow">
      <div class="left aside">
        <i @click="GotoNext('种苗','left')" class="iconfont icon-shangyiyehoutuifanhui-yuankuang"></i>
      </div>
      <div class="center">
        <div ref="germchitRef">
        <span class="item" v-for="(item,index) in showData.data" :key="item.id" >
          <img :src="item.image" alt="" />
          <div class="text">{{item.storeName}}</div>
        </span>
      </div>
      </div>
      <div class="right aside">
        <i @click="GotoNext('种苗','right')"  class="iconfont icon-xiayiyeqianjinchakangengduo-yuankuang"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import titleControl from "../utils/titleControler";
const HotGoods = ref([]);
const showData=ref({})
const germchitRef=ref(null)
const dom=ref(null)
const moveSize=ref(0)
const switchData = reactive({
      dis: 0,
      totalDis: 0,
      targetMarginLeft: 0,
      currentMarginLeft: 0,
      times: 0,
      tick: 16,
    });
var timer=reactive(null)
onMounted(async () => {
  const goodResult = await useFetch("api/getHotGoods");
  HotGoods.value = goodResult.data.value.data.list;
  showData.value.data=HotGoods.value.slice(0,4)
  showData.value.total=HotGoods.value.length;
  showData.value.index=0;
  titleControl.setRouteTitle("产品中心 | 喵馋农");
  console.log(showData.value)
});
const GotoNext=(name,type)=>{
  if(type=='left'&&showData.value.index>0){
    showData.value.index--
  }else if(type=='right'&&showData.value.index+4<showData.value.total){
    showData.value.index++
  }
  showData.value.data=HotGoods.value.slice(showData.value.index,showData.value.index+4)
  console.log(showData.value)
}

// onUnmounted(()=>{
//       clearInterval(timer)
//     })
// const GotoNext=(name,type)=>{
//   if(name=='种苗'){
//     dom=germchitRef.value
//   }
//   if(type=='left'){
//     dom.value?dom.value.moveSize++:dom.value.moveSize=1
//   }
//       switchData.currentMarginLeft = parseFloat(getComputedStyle(dom.value).marginLeft);
//       switchData.times = Math.ceil(2000/ switchData.tick);
//       switchData.targetMarginLeft=-parseFloat(getComputedStyle(dom.value.firstElementChild).width)*dom.value.moveSize
//       switchData.totalDis =switchData.targetMarginLeft - switchData.currentMarginLeft;
//       switchData.dis = switchData.totalDis / switchData.times;
//       console.log(99999,switchData,dom)
// }
</script>
<style scoped lang="less">
.Page {
  width: 100%;
  height: 100vh;
}
.HeaderPage {
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderText {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 3rem;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.HotGoodsPage {
  height:100vh;
  width: 100vw;
  padding-top:10vh;
  .title {
    width: 100vw;
    text-align: center;
    color: #00990f;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 7vh 0;
  }
  .GoodsShow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .aside {
    flex: 0 0 8vw;
    text-align: center;
    i {
      font-size: 5vh;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  .left {
  }
  .center {
    flex: 1 1 80vw;
   
    width:84vw;
    .item{
      overflow: hidden;
    border:solid 0.3rem #00990f;
    display:inline-block;
    border-radius: 1.5rem;
    margin:2rem 2.3vw;
    width:fit-content
    }
    img{
    object-fit: cover;
    width:16vw;
    height:16vw;
  }
  .text{
    text-align: center;
    margin:2.5vw 0;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  }
  .right {
  }
}
</style>