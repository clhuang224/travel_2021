<script setup lang="ts">
import WeatherBlock from '../components/WeatherBlock.vue'
import MenuBlock from '../components/MenuBlock.vue'
</script>

<template>
  <div class="primary">
    <img
      class="background"
      src="../assets/home/background.png"
      alt="background"
    />
    <img
      class="logo"
      src="../assets/logo.png"
      alt="logo"
    />
  </div>
  <WeatherBlock />
  <MenuBlock />
</template>


<style lang="scss" scoped>
.primary {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    width: 100%;
    height: auto;
  }
  .logo {
    width: 22.1875%;
    position: absolute;
    bottom: 62.4614%;
    left: 38.9062%;
  }
}
</style>
