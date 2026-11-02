<template>
  <div >
    <div class="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-blue-600">📊 ระบบประเมินผล</span>
      </div>
      <!-- ฝั่งขวา: รูปโปรไฟล์และปุ่ม Logout -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11Yp9ac3eFtb8dlDG0Gsgihz5ddDDERdKtTKuM0O5Mw&s=10" alt="Profile" class="w-9 h-9 rounded-full object-cover border border-gray-200">
          <span class="text-sm font-medium text-gray-700 hidden sm:inline">Username</span>
        </div>
        <!-- ปุ่ม Logout -->
        <button @click="logout" class="bg-red-300 hover:bg-red-700 text-white px-4 py-2 rounded-md transition text-sm">
          🚪 ออกจากระบบ
        </button>
      </div>
    </div>
  </div>
  <div class="p-6">
    <!-- กล่องหุ้มตารางแบบมินิมอล มีขอบมนและเงาบางๆ -->
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-600">
        
        <!-- หัวข้อตาราง (Header) -->
        <thead class="bg-slate-100 font-semibold text-gray-700 border-b border-gray-300">
          <tr>
            <th class="px-4 py-3">Header 1</th>
            <th class="px-4 py-3">Header 2</th>
            <th class="px-4 py-3">Header 3</th>
            <th class="px-4 py-3">Header 4</th>
          </tr>
        </thead>
        
        <!-- เนื้อหาตาราง (Body) มีเส้นคั่นแนวนอนบางๆ สบายตา -->
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3">Cell 1</td>
            <td class="px-4 py-3">Cell 2</td>
            <td class="px-4 py-3">Cell 3</td>
            <td class="px-4 py-3">Cell 4</td>
          </tr>
          <tr class="hover:bg-gray-50/50">
            <td class="px-4 py-3">Cell 1</td>
            <td class="px-4 py-3">Cell 2</td>
            <td class="px-4 py-3">Cell 3</td>
            <td class="px-4 py-3">Cell 4</td>
          </tr>
          <tr class="hover:bg-gray-50/50">
            <td class="px-4 py-3">Cell 1</td>
            <td class="px-4 py-3">Cell 2</td>
            <td class="px-4 py-3">Cell 3</td>
            <td class="px-4 py-3">Cell 4</td>
          </tr>
          <tr class="hover:bg-gray-50/50">
            <td class="px-4 py-3">Cell 1</td>
            <td class="px-4 py-3">Cell 2</td>
            <td class="px-4 py-3">Cell 3</td>
            <td class="px-4 py-3">Cell 4</td>
          </tr>
          <tr class="hover:bg-gray-50/50">
            <td class="px-4 py-3">Cell 1</td>
            <td class="px-4 py-3">Cell 2</td>
            <td class="px-4 py-3">Cell 3</td>
            <td class="px-4 py-3">Cell 4</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script setup>
// ปล่อยว่างไว้ได้เลยครับ ไม่ติด Error แน่นอน
</script>

