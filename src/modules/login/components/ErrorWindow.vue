<script setup lang="ts">
const emit = defineEmits(['close'])
defineProps({
  text: String,
})
const closeAlert = () => {
  emit('close')
}
</script>

<template>
  <div class="hidden" @click="closeAlert">
    <p class="wrong-pass-text">{{ text }}</p>
  </div>
</template>

<style scoped>
.wrong-pass-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid red; */
  width: 30%;
  height: 200px;
  background-color: #242424;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid white;
}
.wrong-pass-text {
  font-size: 24px;
  text-align: center;
  top: 45%;
  vertical-align: middle;
}
</style>
