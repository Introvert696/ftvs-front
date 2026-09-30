<script setup lang="ts">
import MainLayout from '@/modules/core/layout/MainLayout.vue'
import Post from '@/modules/core/components/Post.vue'
import CreateNewPostForm from '@/modules/core/components/CreateNewPostForm.vue'
import ProfileMainInfo from '@/modules/profile/components/ProfileMainInfo.vue'

import { ref, onMounted, reactive } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = UserStore()
const url = ref(userStore.baseUrl + '/api/user/profile')

const isLoading = ref(true)
const error = ref(null)

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

async function updateProfile() {
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
  } catch (err) {
    console.error('Ошибка загрузки профиля:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

function goToEditProfile() {
  router.push('/settings')
}

onMounted(async () => {
  updateProfile()
})
</script>

<template>
  <MainLayout page_title="Мой профиль">
    <div class="md:flex md:flex-row flex-col gap-[10px] w-[100%]">
      <ProfileMainInfo
        :name="profile.name"
        :surname="profile.surname"
        :patronymic="profile.patronymic"
        :birthday="profile.birthday"
        :username="profile.username"
        :description="profile.description"
        :avatar="profile.avatar"
      >
        <button
          class="w-[100%] h-[40px] border-1 text-white rounded-[10px] text-[14px] mt-[10px] cursor-pointer hover:bg-white hover:text-black"
          @click="goToEditProfile"
        >
          Редактировать
        </button>
      </ProfileMainInfo>

      <div class="md:w-[70%] w-[90%] mx-auto md:mt-0 mt-[10px]">
        <CreateNewPostForm @refreshPost="updateProfile" />
        <div class="flex flex-col gap-[10px] mt-[10px]" v-for="post in profile.posts">
          <Post
            :username="profile.username"
            :createAt="post.createDate.date"
            :content="post.content"
            :avatar="profile.avatar"
            like="0"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped></style>
