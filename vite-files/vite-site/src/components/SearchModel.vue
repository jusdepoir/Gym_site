<template>
  <div class="search-model" v-show="isVisible">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div class="search-close-switch" @click="close">+</div>
      <form class="search-model-form" @submit.prevent="search">
        <input type="text" v-model="query" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)
const query = ref('')

function close() {
  isVisible.value = false
}

function search() {
  console.log('Searching for:', query.value)
  close()
}

// Optionally expose controls to parent via defineExpose
defineExpose({ isVisible })
</script>

<style scoped>
.search-model {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-close-switch {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 36px;
  color: #fff;
  cursor: pointer;
}

.search-model-form input {
  width: 400px;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
}
</style>