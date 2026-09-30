<script setup lang="ts">
import MainLayout from '@/modules/core/layout/MainLayout.vue'
import GroupComponent from '@/modules/group/components/GroupComponent.vue'
</script>

<template>
  <MainLayout>
    <div class="w-[100%] h-[100%] flex md:justify-between justify-center flex-wrap gap-[20px]">
      <GroupComponent/>
      <GroupComponent/>
      <GroupComponent/>
      <GroupComponent/>
      <GroupComponent/>
      <GroupComponent/>
      <GroupComponent/>
    </div>
  </MainLayout>
</template>

<style scoped></style>
