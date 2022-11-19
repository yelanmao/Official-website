<template>
  <Layout>
    <template #top>
      <NavBar :style="{ paddingTop: '3rem' }" :isPC="isPC" />
      <!-- 垫片 -->
    </template>
    <template #main>
     
      <!-- <div :style="{ height: '6rem' }"></div> -->
      <NuxtPage :isPC="isPC" ></NuxtPage>
      <!-- <router-view :isPC="isPC" /> <PageFoot :isPC="isPC" /> -->
      <PageFoot :isPC="isPC" />
    </template>

    <template #mobile v-if="!isPC">
   
      <MobileNav />
      <!-- 垫片 -->
      <div v-if="!isPC" :style="{ height: '6rem' }"></div>
    </template>
  </Layout>
</template>

<script setup>
import NavBar from "./components/NavBar/index.vue";
import Layout from "./layouts/index.vue";
// import Home from "./views/Home/index.vue";
import MobileNav from "./components/MobileNav/index.vue";
import PageFoot from "./components/PageFoot/index.vue";
import { ref, computed, onMounted, watchEffect, onBeforeMount } from "vue";


 var clientWidth =ref(1000);
 let isPC = true;
watchEffect(() => {
  isPC = clientWidth.value >= 996;
  console.log(isPC);
});
onMounted(() => {
  clientWidth.value = window.innerWidth;
  console.log(99999,clientWidth)
  clientWidth.value = window.innerWidth; 
  // console.log(clientWidth.value);
  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth;
    // console.log(isPC);
  });
});

</script>
<style  >
@import "./index.css";
</style>