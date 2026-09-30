<script setup lang="ts">
import MainLayout from '@/modules/core/layout/MainLayout.vue'
import FriendCard from '@/modules/friend/components/FriendCard.vue'
import RequestToFriend from '@/modules/friend/components/RequestToFriend.vue'
import { UserStore } from '@/stores/userStore.ts'
import { ref, onMounted, reactive } from 'vue'

const userStore = UserStore()
const friends = ref(null)

onMounted(async () => {
  friends.value = await userStore.getFriends()
  await console.log(friends.value)
})
</script>

<template>
  <MainLayout>
    <div class="w-[100%]">
      <RequestToFriend />
      <div
        class="mt-[15px] w-[100%] flex flex-wrap md:justify-between justify-center gap-[15px]"
        v-for="friend in friends"
      >
        <FriendCard
          :username="
            friend.targetId.id != userStore.userId
              ? friend.targetId.username
              : friend.sourceId.username
          "
          :id="friend.targetId.id != userStore.userId ? friend.targetId.id : friend.sourceId.id"
        />
      </div>
    </div>
  </MainLayout>
</template>

<style scoped></style>
