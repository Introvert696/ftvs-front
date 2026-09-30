<script setup lang="ts">
defineProps({
  id: Number,
  username: String,
  createAt: String,
  content: String,
  like: String,
  view: String,
  avatar: String,
})
</script>

<template>
  <div
    class="flex md:w-[49%] w-[90%] border-1 justify-between border-box rounded-[20px] px-[23px] py-[10px] items-center cursor-pointer hover:bg-white hover:text-black"
  >
    <div>
      <img :src="avatar" alt="avatar" class="w-[60px] h-[60px] rounded-[50%]" />
    </div>
    <div class="ml-[10px] mr-auto text-[16px]">
      <router-link :to="{ name: 'userprofile', params: { id: id } }" class="font-bold"
        >{{ username }}
      </router-link>
      <p>В сети</p>
    </div>
    <div class="burger-menu">
      <img src="@/assets/icons/dots.svg" alt="dots" />
    </div>
  </div>
</template>

<style scoped></style>
