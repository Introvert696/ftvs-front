<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="policy-div">
    <RouterLink to="privacy-policy">Политика конфиденциальности</RouterLink>
  </div>
</template>

<style scoped>
.policy-div {
  width: 256px;
  position: fixed; /* Фиксирует элемент относительно окна браузера */
  bottom: 0; /* Прижимает к низу */
  left: 0;
  font-size: 10px;
}
</style>
