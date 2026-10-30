
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  actions: {
    LoadUser() {
      console.log('กำลังโหลดข้อมูลผู้ใช้')
    },

    Logout() {
      this.user = null
    }
  }
})
