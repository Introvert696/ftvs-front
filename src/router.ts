import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/core/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/login/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/register/views/RegisterView.vue'),
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('@/modules/feed/views/FeedView.vue'),
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/modules/message/views/MessageView.vue'),
    },
    {
      path: '/messages/:id',
      name: 'show_message',
      component: () => import('@/modules/message/views/DialogView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/modules/profile/views/MyProfileView.vue'),
    },
    {
      path: '/profile/:id',
      name: 'userprofile',
      component: () => import('@/modules/profile/views/ProfileView.vue'),
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('@/modules/friend/views/FriendView.vue'),
    },
    {
      path: '/groups',
      name: 'groups',
      component: () => import('@/modules/group/views/GroupsView.vue'),
    },
    {
      path: '/group/:id',
      name: 'group_view',
      component: () => import('@/modules/group/views/GroupProfileView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/modules/music/views/MusicView.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/modules/video/views/VideosView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/modules/profile/views/SettingView.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/modules/logout/views/LogoutView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      component: () => import('@/modules/privacy_policy/view/policyView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not_found',
      component: () => import('@/modules/core/views/NotFoundView.vue'),
    },
  ],
})

export default router
