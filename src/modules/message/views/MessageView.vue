<script setup lang="ts">
import MessageDialog from '@/modules/message/components/MessageDialog.vue'
import MainLayout from '@/modules/core/layout/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="w-[100%] flex flex-wrap justify-between box-border gap-[10px]">
      <MessageDialog messageId="12" />
      <MessageDialog messageId="12" />
      <MessageDialog messageId="12" />
      <MessageDialog messageId="12" />
      <MessageDialog messageId="12" />
    </div>
  </MainLayout>
</template>
