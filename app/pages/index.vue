<template>
  <div class="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
    <h1 class="text-xl font-semibold mb-4">เข้าสู่ระบบ</h1>
    <form @submit.prevent="submit" class="grid gap-3">
      <label for="">email</label> <br>
      <input v-model="email" type="email" class="input" placeholder="Email" required /> <br>
      <label for="">password</label><br>
      <input v-model="password" type="password" class="input" placeholder="รหัสผ่าน" required /><br>
      <button class="btn-primary" onclick="login(email,password)">เข้าสู่ระบบ</button>
    </form><br>
    <nuxt-link to="register">ลงทะเบียน</nuxt-link>
  </div>
</template>

<script setup>
import axios from 'axios';

const email = ref("")
const password = ref("")

const login = (username,password) => (async() => {
  const res = await axios.post("http://192.168.12.207:5000/api/login",{
      username: username,
      password: password,
  })
})
</script>

<style lang="scss" scoped>

</style>