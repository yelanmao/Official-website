<template>
  <div class="left-avator avator" @click="handlePage('delete')">&lt;</div>
  <div class="right-avator avator" @click="handlePage('add')">&gt;</div>
</template>

<script>

export default {
setup(props,ctx){
  const handlePage=(type)=>{
    console.log("子组件点击",type);
    ctx.emit('changePage',type)
  }
  
  return{
    handlePage,
  }
}
}
</script>

<style >
.avator{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,.1);
  line-height: 7.5vw;
  padding:0 1.5vw;
  height: 8vw;
  display: none;
}
.left-avator:hover{
  background: rgba(0,0,0,.3);
}
.right-avator:hover{
  background: rgba(0,0,0,.3);
}
.left-avator{
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
left:0;
font-size: 2rem;
color:aliceblue;
}
.right-avator{
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  right:0;
  font-size: 2rem;
  color:aliceblue;
}
.banner-container:hover .avator{
  display: block;
}
</style>