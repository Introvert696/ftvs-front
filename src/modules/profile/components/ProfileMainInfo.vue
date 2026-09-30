<script setup lang="ts">
defineProps({
  surname: String,
  name: Number,
  username: String,
  patronymic: String,
  birthday: String,
  description: String,
  avatar: String,
})
</script>

<template>
  <div class="md:w-[30%] w-[90%] mx-auto">
    <img :src="avatar" alt="#" class="w-[100%] h-[264px] rounded-[10px]" />
    <slot />
    <div class="mt-[17px]">
      <h1 class="text-[24px] font-bold">{{ username }}</h1>
      <h2>{{ surname }} {{ name }} {{ patronymic }}</h2>
      <h4>{{ birthday }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
