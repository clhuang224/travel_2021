<script setup lang="ts">
import { computed, ref } from 'vue-demi'
import { useWeather } from '../stores/weather'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons'

const Weather = useWeather()
Weather.getWeatherRecords()

const records = computed(() => {
  return Weather.records.map((record) => ({
    ...record,
    src: new URL(`../assets/weather/${record.type}.png`, import.meta.url).href
  }))
})

const list = ref<HTMLUListElement | null>(null)
const scroll = (isLeft: boolean) => {
  if (!list.value) return
  list.value.scrollTo({ left: list.value.scrollLeft + (isLeft ? -175 : 175), behavior: 'smooth' })
}

</script>

<template>
  <section>
    <p>台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！<br>到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!</p>
    <div class="container">
      <button
        class="left-button"
        @click="scroll(true)"
      >
        <ArrowLeftBold />
      </button>
      <ul ref="list">
        <li
          v-for="record in records"
          :key="record.regionName"
        >
          <div class="title">{{ record.regionName }}</div>
          <el-image
            class="image"
            :src="record.src"
            :alt="record.content"
            lazy
            fit="contain"
          />
          <div class="degree">
            {{ record.averageTemp }}
            <span>°C</span>
          </div>
        </li>
      </ul>
      <button
        class="right-button"
        @click="scroll(false)"
      >
        <ArrowRightBold />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: linear-gradient(180deg, #A7D4DA 0%, rgba(167, 212, 218, 0) 100%);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0 80px;

  button {
    margin: 0 16px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: none;
    background-color: rbga(220, 220, 220, 0.5);
    cursor: pointer;
    &:active, &:hover {
      background-color: #DCDCDC;
    }
    svg {
      width: 15px;
      height: 25px;
    }
  }
}
p {
  font-size: 1.6rem;
  color: var(--text-color-paragraph);
  text-align: center;
  font-weight: bold;
}
ul {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  flex: 1;
  li {
    padding: 0 36px;
    flex: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 1.8rem;
      width: 56px;
    }
    .image {
      margin-top: 12px;
      width: 100%;
      height: 55px;
    }
    .degree {
      color: var(--text-color-paragraph);
      font-size: 4.8rem;
      display: flex;
      margin-top: 12px;
      span {
        font-size: 2.4rem;
      }
    }
  }
}
</style>
