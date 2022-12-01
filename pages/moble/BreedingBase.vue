<template>
  <div class="BreedingBase-container">
    <div class="banner">
      <img src="../../assets/CMN_ProductHeader.jpg" alt="" class="myimg" />
      <div class="title">产品中心</div>
    </div>
  </div>
</template>
  <style lang="less" scoped>
.BreedingBase-container {
  width: 100%;
  .banner {
    height: 55vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 55vh;
      width: 100%;
      object-fit: cover;
      content: "产品中心";
    }
    .title {
      z-index: 1;
      position: absolute;
      left: 50%;
      color: #fff;
      font-weight: 600;
      font-size: 8vw;
      transform: translate(-50%, 0);
      letter-spacing: 1.5rem;
    }
  }
}
</style>