<script setup lang="ts">

import Spot from '../assets/home/menu/spot.png'
import Food from '../assets/home/menu/food.png'
import Accommodation from '../assets/home/menu/accommodation.png'
import Transportation from '../assets/home/menu/transportation.png'

const list = [
  {
    text: '景點',
    image: Spot,
    path: '/spot'
  },
  {
    text: '美食',
    image: Food,
    path: '/food'
  },
  {
    text: '住宿',
    image: Accommodation,
    path: '/accommodation'
  },
  {
    text: '交通',
    image: Transportation,
    path: '/transportation'
  }
]

</script>

<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.text"
    >
      <router-link :to="item.path">
        <img :src="item.image" :alt="item.text">
        <div>{{ item.text }}</div>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  padding: 0 34px;
  li {
    width: calc(25% - 18px);
    max-width: 285px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    a {
      color: rgba(0, 0, 0, 0.8);
    }
    img {
      width: 100%;
    }
    div {
      position: absolute;
      right: 4px;
      top: -10px;
      box-shadow: -4px 4px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: #fff;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 10px 5px;
      font-weight: bold;
      font-size: 3rem;
      writing-mode: vertical-rl;
    }
  }
}
</style>
