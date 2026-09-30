<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { UserStore } from '@/stores/userStore.ts'

const router = useRouter()
const userStore = UserStore()

onMounted(() => {
  if (userStore.token === '') {
    router.push('/login')
  } else {
    router.push('/feed')
    console.log(userStore.token)
  }
})
</script>

<template>
  <p>Тут ниче нет иди от сюда</p>
</template>
