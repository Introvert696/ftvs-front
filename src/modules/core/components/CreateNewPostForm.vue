<script setup lang="ts">
import { ref } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useFetch } from '@vueuse/core'
import router from '@/router.ts'

const emit = defineEmits(['refreshPost'])
let openCreatePostForm = ref(false)

let openPostForm = () => {
  openCreatePostForm.value = !openCreatePostForm.value
}

const content = ref('')
const userStore = UserStore()
const url = ref(userStore.baseUrl + '/api/post')

function createPost(handler: any) {
  handler.preventDefault()

  const bodyData = ref({
    content: content,
  })

  fetch(url.value, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'Bearer ' + userStore.token,
    },
    body: JSON.stringify(bodyData.value),
  }).then(async (res) => {
    if (res.ok) {
      emit('refreshPost')
      content.value = ''
    } else {
    }
    if (res.status == 401) {
      userStore.token = ''
    }
  })
}
</script>

<template>
  <div
    class="flex items-center text-center w-full h-[50px] rounded-[20px] border-1"
    @click="openPostForm()"
  >
    <p class="m-auto">+ Создать новый пост</p>
  </div>
  <form
    action="#"
    :class="[' w-full border-1 mt-[10px] rounded-[20px] p-[20px]', { hidden: !openCreatePostForm }]"
    @submit="createPost"
  >
    <textarea
      type="text"
      class="w-full h-[240px] text-white bg-transparent box-border p-[10px] rounded-[10px] text-[14px] border-1"
      aria-multiline="true"
      v-model="content"
      placeholder="Введите текст..."
    ></textarea>
    <div class="flex align-center justify-between h-{20%] mt-[10px]">
      <label for="file" class="w-[25px]"><img src="../../../assets/icons/File.svg" alt="" /></label>
      <input type="file" value=";d" name="file" id="file" class="hidden" />
      <input
        type="submit"
        value="СОЗДАТЬ"
        class="w-1/5 h-[40px] rounded-[10px] font-thin text-white bg-transparent border-1 cursor-pointer hover:bg-white hover:text-black"
      />
    </div>
  </form>
</template>
