<script setup lang="ts">
defineProps({
  from: String,
  message: String,
  time: String,
  is_sender: Boolean,
});
</script>

<template>
  <div :class="['border-1 w-10/12 h-auto py-[15px] pl-[30px] pr-[15px] rounded-[10px] ',{'ml-auto mr-0': is_sender}]">
    <div class="flex justify-between">
      <div>
        <p class="text-[16px] font-bold">
          {{from}}
        </p>
      </div>
      <div>
<!--        context menu      -->
        <img src="@/assets/icons/dots.svg" alt="dots menu">
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <p class="text-[16px]">
          {{message}}
        </p>
      </div>
      <div>
        <p class="text-[12px]">{{time}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
