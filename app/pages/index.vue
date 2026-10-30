<template>
  <div class="min-h-screen bg-slate-100 flex items-center justify-center">
  <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-x">
    <h1 class="text-xl font-semibold text-center mb-4">เข้าสู่ระบบ</h1>
    <form @submit.prevent="login" class="grid gap-3">
    <div>
      <label class="text-gray-600 ml-1">Email</label> <br>
      <input v-model="email" type="email" class="w-full border rounded p-2 mb-3" placeholder="Email" required /> <br>
      <label class="text-gray-600 ml-1">Password</label><br>
      <input v-model="password" type="password" class="w-full border rounded p-2" placeholder="password" required /><br>
    </div>
    <button type="submit" class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">เข้าสู่ระบบ</button>
    </form><br>
    <div class="mt-1 text-right">
      ยังไม่มีบัญชีหรอ
      <NuxtLink to="/register" class="text-blue-500">สมัครสมาชิก</NuxtLink>
    </div>
  </div>
</div>  
  </template>
<script setup>
import axios from 'axios';

const email = ref("")
const password = ref("")

const token = useCookie("token")

const login = async () => {
  try {
    const res = await axios.post("http://192.168.12.186:5000/api/auth/login", {
      email:email.value,
      password:password.value,
    });
    token.value = res.data.token;
    await navigateTo('/user/dashboard'); 
  } catch (err) {
    console.error("เกิดข้อผิดพลาด",err);
    alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
  }
}
</script>

<style lang="" scoped>

</style>