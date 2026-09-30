<script setup lang="ts"></script>

<template>
  <div class="request-to-friend-btn">
    <p>Заявки - 0</p>
  </div>
</template>

<style scoped>
.request-to-friend-btn {
  display: flex;
  height: 40px;
  width: 250px;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
}
.request-to-friend-btn:hover {
  animation: select 0.1s ease-in both;
}
@media only screen and (max-width: 900px) {
  .request-to-friend-btn {
    width: 90%;
    margin: auto;
  }
}
</style>
