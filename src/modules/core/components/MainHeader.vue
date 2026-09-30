<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  page_title: String,
})

function roadToFeed() {
  router.push('/feed')
}
</script>

<template>
  <header class="m-auto md:w-[60%] w-[90%] flex justify-between items-center">
    <div class="">
      <h1 class="text-[36px] font-bold md:hidden block" @click="$emit('openMenuMobile')">FTVS</h1>
      <h1 class="text-[36px] font-bold hidden md:block" @click="roadToFeed()">FTVS</h1>
    </div>
    <div class="text-[24px] uppercase font-bold">
      <p>{{ props.page_title }}</p>
    </div>
    <MiniProfilePanel username="Introvert696" />
  </header>
</template>

<style scoped></style>
