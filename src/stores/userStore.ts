import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const UserStore = defineStore('userStore', () => {
  const token = useLocalStorage('userToken', '')
  const userId = useLocalStorage('userId', '')
  const baseUrl = import.meta.env.VITE_API_ENDPOINT

  function setToken(tkn: string) {
    token.value = tkn
  }

  function getToken() {
    return token.value
  }

  async function getProfileInfo(url: string) {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: '*/*',
          Authorization: 'Bearer ' + token.value,
        },
      })

      if (res.ok) {
        const response = await res.json()
        return response
      } else {
        if (res.status == 401) {
          token.value = ''
        }
        throw new Error(`HTTP error! status: ${res.status}`)
      }
    } catch (error) {
      console.error('Ошибка в getProfileInfo:', error)
      throw error
    }
  }

  async function getFriends() {
    try {
      const res = await fetch(baseUrl + '/api/friend/all', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: '*/*',
          Authorization: 'Bearer ' + token.value,
        },
      })

      if (res.ok) {
        const response = await res.json()
        return response
      } else {
        if (res.status == 401) {
          token.value = ''
        }
        throw new Error(`HTTP error! status: ${res.status}`)
      }
    } catch (error) {
      console.error('Ошибка в fetch:', error)
    }
  }

  return { token, setToken, getToken, getProfileInfo, getFriends, userId, baseUrl }
})
