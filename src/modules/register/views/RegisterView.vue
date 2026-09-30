<script setup lang="ts">
import Logo from '@/modules/core/components/Logo.vue'
import ErrorWindow from '@/modules/login/components/ErrorWindow.vue'
import RegisterForm from '@/modules/register/components/RegisterForm.vue'
import { ref } from 'vue'

const errorText = ref('')

function openError(message: string) {
  openAlert()
  console.log('open allert')
  errorText.value = message
}

function openAlert() {
  console.log('open')
  document.getElementById('password-wrong-component').classList = 'wrong-pass-form'
}
function closeAlert() {
  document.getElementById('password-wrong-component').classList = 'hidden'
}
</script>

<template>
  <ErrorWindow @close="closeAlert()" id="password-wrong-component" :text="errorText" />

  <div class="mt-[60px]">
    <Logo />
  </div>

  <RegisterForm @registerError="openError" />
</template>

<style scoped></style>
