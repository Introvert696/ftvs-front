<script setup lang="ts">

import MainLayout from "@/modules/core/layout/MainLayout.vue";
import VideosSearch from "@/modules/video/components/VideosSearch.vue";
import UploadVideoBtn from "@/modules/video/components/UploadVideoBtn.vue";
import VideoCard from "@/modules/video/components/VideoCard.vue";
</script>

<template>
  <MainLayout page_title="Видео">
    <div class="md:w-full w-[95%] mx-auto">
      <div class="w-full flex md:flex-row flex-col-reverse  gap-[25px]">
        <div class="md:w-[80%] h-[40px]">
          <VideosSearch/>
        </div>
        <div class="md:w-[18%] h-[40px]">
          <UploadVideoBtn/>
        </div>
      </div>
      <div class="w-full flex gap-[25px] flex-wrap justify-between mt-[20px]">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>
