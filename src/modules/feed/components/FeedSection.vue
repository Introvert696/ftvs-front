<script setup lang="ts">
import CreateNewPostForm from '@/modules/core/components/CreateNewPostForm.vue'
import Post from '@/modules/core/components/Post.vue'
import { ref, onMounted, reactive } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useRouter } from 'vue-router'

const userStore = UserStore()
const posts = ref(null)
const getPostUrl = ref(userStore.baseUrl + '/api/feed')
const router = useRouter()

async function getPosts(url: string) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: '*/*',
        Authorization: 'Bearer ' + userStore.token,
      },
    })

    if (res.ok) {
      const response = await res.json()
      console.log(response)
      posts.value = response
    } else {
      if (res.status == 401) {
        userStore.token = ''
      }
      router.push('/')
    }
  } catch (error) {
    console.error('Ошибка в getProfileInfo:', error)
  }
}

onMounted(async () => {
  getPosts(getPostUrl.value)
})
</script>

<template>
  <section>
    <CreateNewPostForm />
    <div class="flex flex-col gap-y-[10px] mt-[10px]" v-for="post in posts">
      <Post
        :content="post.content"
        :avatar="post.avatarUrl"
        :username="post.creator"
        :createAt="post.createDate.date"
      />
    </div>
  </section>
</template>
