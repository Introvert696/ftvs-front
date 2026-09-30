<script setup lang="ts">
import FeedSection from '@/modules/feed/components/FeedSection.vue'
import RightSection from '@/modules/feed/components/RightSection.vue'
import MainLayout from '@/modules/core/layout/MainLayout.vue'
</script>

<template>
  <MainLayout page_title="Новости">
    <FeedSection class="md:w-[60%] w-[90%] mx-auto" />
    <RightSection class="w-[20%] hidden md:block" />
  </MainLayout>
</template>

<style scoped></style>
