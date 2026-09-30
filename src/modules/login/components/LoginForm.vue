<script setup lang="ts">
import { UserStore } from '@/stores/userStore.ts'
import { ref } from 'vue'
import router from '@/router.ts'

const emit = defineEmits(['close'])
const userStore = UserStore()

const openAlert = () => {
  emit('open')
}

const loginUrl = ref(userStore.baseUrl + '/api/login')

const username = ref('')
const password = ref('')

function login(handler: any) {
  handler.preventDefault()
  console.log('login')
  const testData = ref({
    username: username,
    password: password,
  })

  fetch(loginUrl.value, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify(testData.value),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json()
      userStore.token = response.token
      router.push('/')
    } else {
      openAlert()
    }
  })
}
</script>

<template>
  <form
    class="border-1 rounded-[20px] md:w-[25%] m-auto box-border md:h-auto flex flex-col gap-[10px]"
    @submit="login"
  >
    <h1 class="text-[32px] uppercase font-bold text-center mt-[35px]">Вход</h1>
    <input
      type="text"
      placeholder="Username"
      id="username"
      required
      v-model="username"
      class="w-[90%] mx-auto h-[40px] border-1 box-border p-[5px] rounded-[10px] mt-[30px] pl-[15px]"
    />
    <input
      type="password"
      placeholder="Пароль"
      v-model="password"
      class="w-[90%] mx-auto h-[40px] border-1 box-border p-[5px] rounded-[10px] pl-[15px]"
    />
    <input
      type="submit"
      class="border-1 w-[30%] h-[40px] rounded-[10px] bg-amber-50 text-black ml-auto mr-[20px] uppercase font-bold"
      value="Войти"
    />
    <div class="flex justify-between mx-[20px] mb-[20px] text-[14px] font-thin mt-[35px]">
      <div><RouterLink to="register">Регистрация</RouterLink></div>
      <div><RouterLink to="forgot-password">Забыли пароль?</RouterLink></div>
    </div>
  </form>
</template>

<style scoped></style>
