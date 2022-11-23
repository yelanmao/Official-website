<template>
  <div class="dots">
     
    <span @click="handleDots(index)" v-for="(item,index) in BannerData.imgSrcs" :class="{'active':curIndex==index}">
    </span>
  </div>
</template>

<script>
export default {
    props:{
        BannerData: {
      type: Object,
      defalut: () => {
        {
        }
      },
    },
    curIndex: {
      type: Number,
      defalut: 0,
    },
    },
setup(props,ctx){
    const handleDots=(index)=>{
    ctx.emit("handleDot",index)
    }
    return{
        ...props,
        handleDots
    }
}
}
</script>

<style>
.dots{
    position: absolute;
    padding:1rem 1.5rem;
    background-color:rgba(0, 0, 0, .2);
    border-radius: 8px;
    left:50%;
    bottom: 3vw;
    transform: translateX(-50%);
    display: flex;
}
.dots span{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    margin:0.8rem;
    cursor: pointer;
    background-color: #fff;
}
.dots span.active{
  background: linear-gradient( 120deg, #e5ebdb, #b3eeb9,#5dc25d, #c3c8c3);
}
</style>