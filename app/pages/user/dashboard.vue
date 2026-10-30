<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Navbar แถบด้านบน -->
    <div class="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div class="flex items-center space-x-2">
        <span class="text-xl font-bold text-blue-600">📊 ระบบประเมินผล</span>
      </div>
      
      <!-- ฝั่งขวา: รูปโปรไฟล์และปุ่ม Logout -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <!-- รูปโปรไฟล์เริ่มต้น (ถ้ามีลิงก์รูปจริงสามารถนำมาใส่ใน src ได้) -->
          <img src="https://unsplash.com" alt="Profile" class="w-9 h-9 rounded-full object-cover border border-gray-200">
          <span class="text-sm font-medium text-gray-700 hidden sm:inline">Username</span>
        </div>
        <!-- ปุ่ม Logout -->
        <button 
          @click="logout" 
          class="flex items-center space-x-1 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl transition duration-200"
        >
          <span>🚪 ออกจากระบบ</span>
        </button>
      </div>
    </div>

    <!-- ส่วนเนื้อหาเดิม (Main Content Area) -->
    <div class="p-6">
      <!-- Header ส่วนหัวภายในหน้า -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">ยินดีต้อนรับสู่ระบบประเมิน</h1>
          <p class="text-sm text-gray-500">ภาพรวมข้อมูลและการทำรายการของคุณในวันนี้</p>
        </div>
        <div class="text-sm text-gray-500">
          วันที่ล็อกอิน: {{ date }}
        </div>
      </div>

      <!-- ส่วนของสถิติ / การ์ดสรุปข้อมูล (Stats Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- การ์ดที่ 1 -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div class="p-3 bg-blue-100 text-blue-600 rounded-xl text-2xl">
            📊
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium">ทำแบบประเมินแล้ว</p>
            <h3 class="text-2xl font-bold text-gray-800">12 ครั้ง</h3>
          </div>
        </div>

        <!-- การ์ดที่ 2 -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div class="p-3 bg-green-100 text-green-600 rounded-xl text-2xl">
            ✅
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium">ประเมินผ่านเกณฑ์</p>
            <h3 class="text-2xl font-bold text-gray-800">10 ครั้ง</h3>
          </div>
        </div>

        <!-- การ์ดที่ 3 -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div class="p-3 bg-amber-100 text-amber-600 rounded-xl text-2xl">
            ⏳
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium">รอการตรวจสอบ</p>
            <h3 class="text-2xl font-bold text-gray-800">2 ครั้ง</h3>
          </div>
        </div>
      </div>

      <!-- ส่วนเนื้อหาหลัก -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- ตารางประวัติการประเมินล่าสุด -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <h2 class="text-lg font-bold text-gray-800 mb-4">ประวัติการประเมินล่าสุด</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-200 text-gray-500 text-sm">
                  <th class="pb-3">ชุดการประเมิน</th>
                  <th class="pb-3">วันที่ทำ</th>
                  <th class="pb-3">คะแนน</th>
                  <th class="pb-3">สถานะ</th>
                </tr>
              </thead>
              <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
                <tr>
                  <td class="py-3 font-medium">แบบประเมินความพึงพอใจทั่วไป</td>
                  <td class="py-3">30 ต.ค. 2569</td>
                  <td class="py-3 text-blue-600 font-bold">85/100</td>
                  <td class="py-3">
                    <span class="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">ผ่าน</span>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">แบบทดสอบทักษะดิจิทัลเบื้องต้น</td>
                  <td class="py-3">28 ต.ค. 2569</td>
                  <td class="py-3 text-blue-600 font-bold">90/100</td>
                  <td class="py-3">
                    <span class="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">ผ่าน</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- เมนูลัด -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-lg font-bold text-gray-800 mb-4">เข้าทำแบบประเมินด่วน</h2>
          <div class="space-y-3">
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition duration-200 text-sm">
              📝 เริ่มทำแบบประเมินใหม่
            </button>
            <NuxtLink to="/user/Dashboard/profile" class="block w-full text-center border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition duration-200 text-sm">
              👤 ตรวจสอบข้อมูลโปรไฟล์
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '#imports';

const userStore = useUserStore()
const token = useCookie("token")

const logout = async () => {
  userStore.Logout()
  token.value = null
  await navigateTo('/')
}

const date = new Date().toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>

<style scoped>
</style>
