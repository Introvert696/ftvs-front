<script setup lang="ts">

import MainLayout from "@/modules/core/layout/MainLayout.vue";
import EditProfileMainInfo from "@/modules/profile/components/EditProfileMainInfo.vue";
</script>

<template>
  <MainLayout page_title="Настройки">
    <div class="md:flex md:flex-row flex-col w-[100%] mb-[50px]">
      <EditProfileMainInfo/>
      <form class="md:w-[70%] w-[90%] mx-auto md:mt-0 mt-[10px] md:ml-[30px] flex flex-col gap-[17px]">
        <div class="w-full">
          <p class="text-[24px] font-bold uppercase">Настройки</p>
        </div>
        <div class="flex md:flex-row flex-col w-full gap-[10px]">
          <input type="text" name="" id="" class="border-1 md:w-1/2 h-[40px] rounded-[10px] p-[10px]"
                 placeholder="ФИО">
          <input type="text" name="" id="" class="border-1 md:w-1/2 h-[40px] rounded-[10px] p-[10px]"
                 placeholder="Никнейм">
        </div>
        <div class="flex md:flex-row flex-col w-full gap-[10px]">
          <input type="text" name="" id="" class="border-1 md:w-1/2 h-[40px] rounded-[10px] p-[10px]"
                 placeholder="Дата рождения">
          <input type="text" name="" id="" class="border-1 md:w-1/2 h-[40px] rounded-[10px] p-[10px]"
                 placeholder="ФИО">
        </div>
        <div class="flex w-full">
          <textarea type="text" class="border-1 w-full h-[80px]  rounded-[10px] p-[10px]"
                 placeholder="Статус"></textarea>
        </div>
        <div class="flex w-full ">
          <button
            class="md:w-1/2
            w-full
                bg-white
                text-black
                h-[40px]
                rounded-[10px]
                mx-auto border-1
                hover:bg-black
                hover:text-white
                cursor-pointer">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>
