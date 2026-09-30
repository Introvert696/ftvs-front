<script setup lang="ts">
import { onMounted } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = UserStore()

onMounted(() => {
  userStore.setToken('')
  router.push('/')
})
</script>

<template>
  <p>HEEE</p>
</template>

<style scoped></style>
