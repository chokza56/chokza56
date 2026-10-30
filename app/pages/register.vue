<template>
<div>
  <div class="min-h-screen bg-slate-100 flex items-center justify-center">
  <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-x">
    <h1 class="text-xl font-semibold text-center mb-4">สมัครสมาชิก</h1>
    <form @submit.prevent="register" class="grid gap-3">
    <div>
        <label class="text-gray-600 ml-1">ชื่อเล่นผู้สมัคร</label> <br>
        <input v-model="fname" type="text" class="w-full border rounded p-2 mb-3" placeholder="First name" required /> 
        <label class="text-gray-600 ml-1">ชื่อจริงผู้สมัคร</label><br>
        <input v-model="lname" type="text" class="w-full border rounded p-2 mb-3" placeholder="Last name" required /> 
        <label class="text-gray-600 ml-1">รหัสผ่าน</label><br>
        <input v-model="password" type="password" class="w-full border rounded p-2 mb-3" placeholder="Password" required />
        <label class="text-gray-600 ml-1">email</label><br>
        <input v-model="email" type="email" class="w-full border rounded p-2 mb-3" placeholder="Email" required />
        <label class="text-gray-600 ml-1">ที่อยู่</label><br>
        <input v-model="address" type="text" class="w-full border rounded p-2 mb-3" placeholder="Address" required />
        <label class="text-gray-600 ml-1">เบอร์โทร</label><br>
        <input v-model="phone" type="tel" maxlength="10" class="w-full border rounded p-2 mb-3" placeholder="Phone" required />   
    </div> 
      <button type="submit" class="btn-primary bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">ลงทะเบียน</button>
    </form>
    <div class="mt-4 text-right">
     อ๋อ มีบัญชีแล้วรึ
      <NuxtLink to="/" class="text-blue-500">เข้าสู่ระบบ</NuxtLink>
    </div>
  </div>
  </div>
</div> 
</template>

<script setup>
import axios from 'axios';

const email = ref("")
const password = ref("")
const fname = ref("")
const lname = ref("")
const phone = ref("")
const address = ref("")

const register = async () => {
  
  try {
     const res = await axios.post("http://192.168.12.186:5000/api/auth/register",{
        fname: fname.value,
        lname: lname.value,
        password: password.value,
        email: email.value,
        address: address.value,
        phone: phone.value   
    });

    alert("สมัครสมาชิกสำเร็จเรียบร้อยแล้ว!");
    await navigateTo("/");
  } catch(err) {
    console.log(err);
    alert("เกิดข้อผิดพลาดในการสมัครสมาชิก");
  }
}
</script>

<style lang="" scoped>

</style>
