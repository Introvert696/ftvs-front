<script setup lang="ts">
import MainHeader from '@/modules/core/components/MainHeader.vue'
import LeftMobileMenu from '@/modules/core/components/LeftMobileMenu.vue'
import { ref } from 'vue'
import LeftMenu from '@/modules/core/components/LeftMenu.vue'
import { onMounted } from 'vue'
import { UserStore } from '@/stores/userStore.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const visibleSwitcher = ref(false)
const userStore = UserStore()

const toggleSwitcher = () => {
  visibleSwitcher.value = !visibleSwitcher.value
}
defineProps({
  page_title: String,
})

onMounted(() => {
  if (userStore.token == '') {
    router.push('/')
  }
})
</script>

<template>
  <LeftMobileMenu
    :class="[
      'fixed',
      { hidden: !visibleSwitcher },
      { 'block animate-open-left-menu': visibleSwitcher },
    ]"
  />
  <div
    @click="toggleSwitcher()"
    :class="['block fixed w-[50vw] left-auto right-0 h-[100vh]', { hidden: !visibleSwitcher }]"
  ></div>
  <MainHeader :page_title="page_title" @open-menu-mobile="toggleSwitcher()" />
  <div class="md:w-[60%] flex content-between mx-auto gap-[30px] mt-[10px]">
    <LeftMenu class="hidden md:block" />
    <slot> </slot>
  </div>
</template>

<style scoped></style>
