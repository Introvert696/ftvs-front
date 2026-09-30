<script setup lang="ts">

import LeftMenu from "@/modules/core/components/LeftMenu.vue";
</script>

<template>
<div>
  <div class="box-border absolute bg-[#191919] w-[50vw] h-[100vh]">
    <div class="text-center mt-[2vh]">
      <p class="text-[35px] font-bold">FTVS</p>
    </div>
    <LeftMenu class="mt-[20vh] pr-[5vw] leading-[35px]" />
  </div>

</div>
</template>

<style scoped>
@media only screen and (max-width: 900px) {
  .logo {
    text-align: center;
    margin-top: 2vh;
  }
  .left-menu-overlay {
    box-sizing: border-box;
    position: absolute;
    background-color: #191919;
    width: 50vw;
    height: 100vh;

    .left-menu-items {
      margin-top: 20vh;
      padding-right: 5vw;
      line-height: 35px;
    }
  }


}
</style>
