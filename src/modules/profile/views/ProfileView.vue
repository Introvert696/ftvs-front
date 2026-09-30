<script setup lang="ts">

import MainLayout from "@/modules/core/layout/MainLayout.vue";
import ProfileMainInfo from "@/modules/profile/components/ProfileMainInfo.vue";
import Post from "@/modules/core/components/Post.vue";
</script>

<template>
  <MainLayout>
    <div class="md:flex md:flex-row flex-col gap-[10px] w-[100%]">
      <ProfileMainInfo>
        <button
          class="w-[100%] h-[40px] border-1 text-white rounded-[10px] text-[14px] mt-[10px] cursor-pointer hover:bg-white hover:text-black"
        >
          Добавить в друзья
        </button>
      </ProfileMainInfo>
      <div class="md:w-[70%] w-[90%] mx-auto md:mt-0 mt-[10px]">
        <div class="flex flex-col gap-[10px] mt-[10px]">
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
