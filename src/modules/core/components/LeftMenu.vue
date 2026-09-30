<script setup lang="ts">

</script>

<template>
<div class="left-menu-overlay">
  <div class="item-left-menu">
    <RouterLink to="profile">Профиль</RouterLink>
    <img src="@/assets/icons/Home.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="feed">Новости</RouterLink>
    <img src="@/assets/icons/Feed.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="messages">Сообщения</RouterLink>
    <img src="@/assets/icons/Mail.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="friends">Друзья</RouterLink>
    <img src="@/assets/icons/Friend.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="groups">Группы</RouterLink>
    <img src="@/assets/icons/Group.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="music">Музыка</RouterLink>
    <img src="@/assets/icons/Music.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="videos">Видео</RouterLink>
    <img src="@/assets/icons/Video.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="settings">Настройки</RouterLink>
    <img src="@/assets/icons/Setting.svg" alt="/d">
  </div>
  <div class="item-left-menu">
    <RouterLink to="logout">Выход</RouterLink>
    <img src="@/assets/icons/Exit.svg" alt="/d">
  </div>
</div>
</template>

<style scoped>
.left-menu-overlay {
  text-align: right;
  line-height: 29px;

  .item-left-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    img {
      width: 20px;
      margin-left: 10px;
    }
    a {
      font-size: 15px;
      font-weight: 200;
    }
  }
}
</style>
