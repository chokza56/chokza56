import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  actions: {
    async LoadUser() {
      const token = useCookie('token')
      const { public: { apiBase } } = useRuntimeConfig()
      if (!token.value) return

      const res = await axios.get(`${apiBase}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token.value}` }
      })
      this.user = res.data
    },

    Logout() {
      this.user = null
    }
  }
})