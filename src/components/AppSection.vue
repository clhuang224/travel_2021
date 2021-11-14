<script setup lang="ts">

defineProps<{ title: string, color: string, link: string }>()
</script>

<template>
  <section>
    <h3 :style="{ backgroundColor: color }">
      {{ title }}
      <router-link :to="link">查看更多</router-link>
    </h3>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 50px;
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 40px 12px 58px;
    color: #fff;
    line-height: 1;
    font-size: 4.8rem;
    a {
      display: block;
      padding: 9px 39px;
      border: 4px solid #fff;
      border-radius: 8px;
      color: #fff;
      font-size: 1.8rem;
      text-decoration: none;
    }
  }
}
</style>
