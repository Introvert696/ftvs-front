<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useRouter } from 'vue-router'

const userStore = UserStore()
const url = ref('/api/user/profile')

defineProps({
  username: String,
  avatar: String,
})

const isLoading = ref(true)
const error = ref(null)
const router = useRouter()

const profile = reactive({
  name: '',
  surname: '',
  patronymic: '',
  username: '',
  birthday: '',
  description: '',
  avatar: '',
  posts: [],
})

function goToMyProfile() {
  router.push('/profile')
}

onMounted(async () => {
  try {
    const response = await userStore.getProfileInfo(url.value)
    profile.name = response.name
    profile.surname = response.surname
    profile.patronymic = response.patronymic
    profile.username = response.username
    profile.birthday = response.birthday?.date
    profile.description = response.description
    profile.posts = response.posts
    profile.avatar = response.avatarUrl
    userStore.userId = response.id
  } catch (err) {
    console.error('Ошибка загрузки профиля:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="flex cursor-pointer" @click="goToMyProfile">
    <p class="text-[14px] hidden md:block">{{ profile.username }}</p>
    <img :src="profile.avatar" alt="ima" class="w-[25px] h-[25px] rounded-[100%] ml-[10px]" />
  </div>
</template>

<style scoped></style>
