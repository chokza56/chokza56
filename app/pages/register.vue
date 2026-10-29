<template>
  <div class="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
    <h1 class="text-xl font-semibold mb-4">สมัครสมาชิก</h1>
    <form @submit.prevent="register" class="grid gap-3">
    <div>
        <label for="">ชื่อเล่นผู้สมัคร</label> <br>
        <input v-model="fname" type="text" class="input" placeholder="fname" required /> <br>
        <label for="">ชื่อจริงผู้สมัคร</label><br>
        <input v-model="lname" type="text" class="input" placeholder="lname" required /> <br>
    </div>
    <div>
        <label for="">รหัสผ่าน</label><br>
        <input v-model="password" type="password" class="input" placeholder="password" required /><br>
        <label for="">email</label><br>
        <input v-model="email" type="text" class="input" placeholder="email" required /><br>
        <label for="">ที่อยู่</label><br>
        <input v-model="address" type="text" class="input" placeholder="address" required /><br>
        <label for="">เบอร์โทร</label><br>
        <input v-model="phone" type="number" class="input" placeholder="phone" required /><br>
    </div>
    <button type="submit" class="btn-primary">       ลงทะเบียน      </button>
    </form><br>
    
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

const register = () => {
  console.log('สมัครสมาชิกสำเร็จ!')

  
}
//const register = (fname,lname,password,email,phone,address) => (() => {
//  console.log(fname+" "+lname)
//})
//   try{
//     const res = axios.post("http://192.168.12.240:5000/api/register",{
//         fname:fname,
//         lname:lname,
//         password:password,
//         email:email,
//         address:address,
//         phone:phone   
//   })
//   }catch(err){
//     console.log(err)
//   }
</script>

<style lang="scss" scoped>

</style>
