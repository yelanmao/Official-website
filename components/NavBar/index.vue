<template>
  <div id="topNav" class="topNav" :class="{ mobile: !isPC }">
    <div class="nav-container">
      <!-- logo -->
      <NuxtLink class="link" to="/">
        <div class="img-wrap" @click="emit('click', 10)">
          <img
            :style="{ width: '100%', height: '100%' }"
            src="../../assets/logo.png"
            alt=""
          />
        </div>
      </NuxtLink>
      <!-- 右边的信息栏 -->
      <div class="right" v-if="isPC">
        <NuxtLink
          active-class="selected"
          to="/"
          class="link"
          exact-active-class="qwq"
        >
          <div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/nav.png" alt="" />
            </div>
            <Icon type="home" size="2.2" /><span> 首页</span>
          </div></NuxtLink
        >

        <NuxtLink
          active-class="selected"
          class="link"
          to="/shop"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/nav.png" alt="" />
            </div>
            <Icon type="shop" size="2" /><span> 鬼鬼的小店</span>
          </div></NuxtLink
        >

        <NuxtLink
          class="link"
          to="/showhall"
          active-class="selected"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/nav.png" alt="" />
            </div>
            <Icon type="show" size="2.2" /><span> 展厅</span>
          </div></NuxtLink
        >

        <NuxtLink
          class="link"
          to="/join"
          active-class="selected"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/nav.png" alt="" />
            </div>
            <Icon type="join" size="2" /><span> 合作</span>
          </div></NuxtLink
        >
        <NuxtLink class="link" to="/community" active-class="selected"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/nav.png" alt="" />
            </div>
            <Icon type="comment" size="2" /><span> 社区留言</span>
          </div></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "../../components/Icon/index.vue";
import { onMounted, ref, watchEffect } from "vue";
let props = defineProps({
  isPC: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="less" scoped>
@import "../../assets/styles/mixin.less";
@import "../../assets/styles/var.less";
.topNav {
  &.mobile {
    display: flex;
    justify-content: center;
  }
  padding: 0 15rem;
  height: 9rem;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0));
}
.nav-container {
  margin: 0 auto;
  line-height: 6rem;
  justify-content: space-between;
  display: flex;
  height: 100%;
  font-size: 1.5rem;
  .right {
    justify-content: space-around;
    height: 100%;
    padding: 0 !important;
    line-height: 6rem;
    display: flex;
    color: #c3afbf;
    position: relative;

    .link {
      position: relative;
      &.selected {
        // background-color: @base-color;
        border-radius: 0.8rem 0.8rem 0 0;
        transition: 0.3s;
        transform: translateY(-1rem);
        color: #c3afbf;

        .nav-item {
          .little-imp {
            top: -2.8rem;
          }
        }

        &::before {
          content: "";
          display: block;
          position: absolute;
          height: 0.3rem;
          width: 70%;
          border-radius: 0.15rem;
          background: #c3afbf;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          // border-top: 0.2rem solid #c3afbf;
        }
      }
    }

    .nav-item {
      .little-imp {
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        transition: 0.3s;
        top: -6.8rem;
        // top: 0;
        width: 5rem;
        height: 3rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      // position: relative;
      font-weight: 500;
      padding: 0 1.2rem;
      transition: 0.3s;
      &:hover {
        // border-radius: 0.8rem 0.8rem 0 0;
        // background-color: rgba(231, 72, 81, 0.8);
        color: #fff;
      }
      .sub {
        width: 100%;
        left: 0;
        top: 6rem;
        position: absolute;
        transform: scaleY(0);
        transform-origin: top;
        transition: 0.3s;
      }
    }
  }
  .img-wrap {
    height: 100%;
    width: 30rem;
    position: relative;
    img {
      .self-fill();
    }
    cursor: pointer;
  }
  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
}
</style>