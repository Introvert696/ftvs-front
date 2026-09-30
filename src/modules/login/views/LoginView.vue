<script setup lang="ts">
import ref, { onMounted } from 'vue'
import Logo from '@/modules/core/components/Logo.vue'
import LoginForm from '@/modules/login/components/LoginForm.vue'
import ErrorWindow from '@/modules/login/components/ErrorWindow.vue'

function openAlert() {
  document.getElementById('password-wrong-component').classList = 'wrong-pass-form'
}
function closeAlert() {
  document.getElementById('password-wrong-component').classList = 'hidden'
}
</script>

<template>
  <ErrorWindow
    @close="closeAlert()"
    id="password-wrong-component"
    text="Неправильный логин или пароль"
  />
  <Logo class="logo" />
  <LoginForm @open="openAlert" class="login-form" />
</template>

<style scoped>
.logo {
  margin-top: 60px;
}
.login-form {
  margin-top: 140px;
}
@media only screen and (max-width: 900px) {
  .login-form {
    width: 90vw;
  }
}
</style>
