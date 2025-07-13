<template>
  <div v-show="loading" id="preloder">
    <div class="loader"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // Simulate loading time (e.g., for fetching initial data)
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>

<style scoped>
#preloder {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #f36100;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
