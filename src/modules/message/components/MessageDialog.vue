<script setup lang="ts">
import { ref } from 'vue'

const dialogMenu = ref(false)

const showDialogMenu = () => {
  dialogMenu.value = true
}
const hideDialogMenu = () => {
  dialogMenu.value = false
}
defineProps({
  messageId: String,
})
</script>

<template>
  <div class="message-dialog flex">
    <div class="user-avatar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3mJbyfF0Pgd2QIpjFCRGUYfbGUaMl9hKSg&s"
        alt="USER-AVATAR"
      />
    </div>
    <div class="text-message-dialog">
      <RouterLink :to="'messages/' + messageId">
        <h1>Диалог с Undefinedoff</h1>
        <p>Ты когда зайдешь в ...</p>
      </RouterLink>
    </div>
    <div class="time-message-dialog">
      <p>22:34</p>
    </div>
    <div class="more-action-message-dialog" @click="showDialogMenu">
      <img src="../../../assets/icons/dots.svg" alt="dots" />
      <div
        :class="['menu-more-action-message-dialog', { 'open-menu': dialogMenu }]"
        @mouseleave="hideDialogMenu"
      >
        <p>Изменить название</p>
        <p>Удалить диалог</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-dialog {
  cursor: pointer;
  width: 49%;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 10px 23px;
  justify-content: space-between;
  align-items: center;
}
.user-avatar {
  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}
.text-message-dialog {
  margin-left: 10px;
  margin-right: auto;
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
}
.time-message-dialog {
  margin-top: 10px;
  margin-bottom: auto;
  font-size: 14px;
  margin-right: 10px;
}
.more-action-message-dialog {
  img {
    width: 25px;
    height: 25px;
  }
  margin-top: 5px;
  margin-bottom: auto;
}
.menu-more-action-message-dialog {
  display: none;
  background-color: black;
  border: 1px solid white;
  border-radius: 10px;
  position: fixed;
  width: 10vw;
  height: auto;
  padding: 10px;
  p {
    width: 100%;
  }
  p:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
.open-menu {
  display: block;
}

@media only screen and (max-width: 900px) {
  .message-dialog {
    width: 95%;
    margin: auto;
  }
}
</style>
