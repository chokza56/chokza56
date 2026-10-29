<!-- <template>
  <div style="padding: 20px;">
    <h1>ทดสอบเชื่อมต่อ Backend</h1>
    <button @click="fetchData">ดึงข้อมูลจากเพื่อน</button>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
 import axios from 'axios';
 
const fetchData = async () => {
  try {
   
// หรือถ้าใช้ CommonJS: const axios = require('axios');

axios.post('http://192.168.12.207:5000/api/submit')
  .then(response => {
    console.log('ข้อมูลที่ได้:', response.data);
  })
  .catch(error => {
    console.error('เกิดข้อผิดพลาด:', error);
  });
  } catch (error) {
    console.error('เชื่อมต่อ Backend ไม่สำเร็จ:', error)
    alert('เชื่อมต่อไม่สำเร็จ ดูรายละเอียดที่ Console (F12)')
  }
}
</script> -->