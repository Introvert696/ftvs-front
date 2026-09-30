<script setup lang="ts">
import MainLayout from '@/modules/core/layout/MainLayout.vue'
import SearchMusic from "@/modules/music/components/SearchMusic.vue";
import UploadMusicBtn from "@/modules/music/components/UploadMusicBtn.vue";
import MusicItem from "@/modules/music/components/MusicItem.vue";
import MusicPlayer from "@/modules/music/components/MusicPlayer.vue";
</script>

<template>
  <MainLayout page_title="Музыка">
    <div class=" md:block flex flex-col mx-auto w-[96%] items-center gap-[20px]">
      <div class="flex md:flex-row flex-col-reverse gap-[20px] w-full">
        <div class="md:w-[75%] w-full ">
          <SearchMusic/>
        </div>
        <div class="md:w-[25%] md:block w-full">
          <UploadMusicBtn/>
        </div>

      </div>
      <div class="mt-[15px] flex flex-col gap-[15px] md:w-[74%] md:h-[60vh] ">
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
      </div>
    </div>

  </MainLayout>
  <div class="md:block hidden">
    <MusicPlayer/>
  </div>

</template>

<style scoped></style>
