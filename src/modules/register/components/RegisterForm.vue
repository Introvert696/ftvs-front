<script setup lang="ts">
import { UserStore } from '@/stores/userStore.ts'
import { ref } from 'vue'
import router from '@/router.ts'

const emit = defineEmits(['close'])

const openAlert = (message: string) => {
  emit('registerError', message)
}

const username = ref('')
const password = ref('')
const retrPassword = ref('')
const email = ref('')
const fullName = ref('')
const birthday = ref('')
const userStore = UserStore()
const registerUrl = ref(userStore.baseUrl + '/api/register')

function register(handler: any) {
  handler.preventDefault()
  console.log('login')

  const splicedFullName = fullName.value.split(' ')
  const surname = splicedFullName[0]
  const name = splicedFullName[1]
  const pathronymic = splicedFullName[2]

  const bodyData = ref({
    username: username,
    password: password,
    email: email,
    birthday: birthday,
    surname: surname,
    name: name,
    pathronymic: pathronymic,
  })

  fetch(registerUrl.value, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify(bodyData.value),
  }).then(async (res) => {
    if (res.ok) {
      router.push('/login')
    } else {
      const message = (await res.json()).message
      console.log(message)
      await openAlert(message)
    }
  })
}
</script>

<template>
  <form
    class="border-1 rounded-[20px] md:w-[25%] w-[95vw] m-auto box-border md:h-auto pb-[15px] flex flex-col gap-[10px] mt-[50px]"
    @submit="register"
  >
    <h1 class="text-[32px] uppercase font-bold text-center mt-[35px]">Регистрация</h1>
    <input
      type="email"
      placeholder="Email"
      id="email"
      required
      v-model="email"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px] mt-[30px]"
    />
    <input
      type="password"
      placeholder="Пароль"
      required
      v-model="password"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px]"
    />
    <input
      type="password"
      placeholder="Повторите пароль"
      required
      v-model="retrPassword"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px]"
    />
    <input
      type="text"
      placeholder="Никнейм"
      required
      v-model="username"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px]"
    />
    <input
      type="text"
      placeholder="ФИО"
      required
      v-model="fullName"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px]"
    />
    <input
      type="date"
      placeholder="Дата рождения"
      required
      v-model="birthday"
      class="w-[90%] mx-auto h-[40px] border-1 box-border py-[5px] px-[15px] rounded-[10px]"
    />
    <div class="w-[90%] mx-auto">
      <input type="checkbox" placeholder="" required class="" />
      Я согласен на обработку персональных данных и ознакомлен с
      <RouterLink class="text-blue-500" to="privacy-policy">Политика конфиденциальности</RouterLink>
    </div>

    <div class="w-[90%] flex m-auto">
      <RouterLink
        to="/login"
        class="flex justify-center items-center border-1 w-[30%] h-[40px] rounded-[10px] bg-amber-50 text-black ml-auto mr-[20px] uppercase font-bold"
        >Назад</RouterLink
      >
      <input
        type="submit"
        value="ДАЛЕе"
        class="border-1 w-[30%] h-[40px] rounded-[10px] bg-amber-50 text-black ml-auto mr-[20px] uppercase font-bold"
      />
    </div>
  </form>
</template>

<style scoped></style>
