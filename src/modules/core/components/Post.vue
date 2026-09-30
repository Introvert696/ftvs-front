<script setup lang="ts">
defineProps({
  username: String,
  createAt: String,
  content: String,
  like: String,
  view: String,
  avatar: String,
})
</script>

<template>
  <div class="border-1 rounded-[20px] px-[26px] py-[15px]">
    <div class="flex justify-between">
      <div class="flex first-post">
        <img :src="avatar" alt="postimg" class="w-[40px] h-[40px] rounded-[100%]" />
        <div class="ml-[15px]">
          <h1 class="font-semibold text-[14px] uppercase">{{ username }}</h1>
          <p class="text-[12px]">{{ createAt }}</p>
        </div>
      </div>
      <div>
        <p><img src="../../../assets/icons/dots.svg" alt="" /></p>
      </div>
    </div>
    <div class="mt-[15px]">
      <p class="text-[14px] font-light">
        {{ content }}
      </p>
    </div>
    <div class="flex justify-between mt-[10px]">
      <div class="flex items-center">
        <img src="../../../assets/icons/test.svg" alt="" class="w-[15px] h-[15px]" />
        <p>{{ like }}</p>
      </div>
      <div class="flex items-center">
        <img src="../../../assets/icons/test.svg" alt="" class="w-[15px] h-[15px]" />
        <p>{{ view }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
