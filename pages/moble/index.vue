<template>
  <Banner :BannerData="BannerData"/>
</template>
<script setup>
import Banner from "../../components/MBBanner/index.vue"
import titleControl from "../../utils/titleControler";
const BannerData=ref({
autoDuration: 100000,
duration: 500,
height: 60,
imgSrcs:[] ,
width: 100
})

  onMounted(async()=>{
    BannerData.value.imgSrcs=BannerInfo().value;
    titleControl.setRouteTitle("首页 | 喵馋农");
  })
</script>
<style lang="less" scoped>

</style>