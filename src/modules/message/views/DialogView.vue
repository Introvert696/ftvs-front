<script setup lang="ts">
import MainLayout from "@/modules/core/layout/MainLayout.vue";
import MessagePlace from "@/modules/message/components/MessagePlace.vue";
import NewMessageInput from "@/modules/message/components/NewMessageInput.vue";
</script>

<template>
  <MainLayout page_title="Диалог">
    <div class="w-10/12 md:h-[90vh] h-[95vh] mx-auto">
      <MessagePlace />
      <NewMessageInput/>
    </div>
  </MainLayout>
</template>

<style scoped>


</style>
