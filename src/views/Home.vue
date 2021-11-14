<script setup lang="ts">
import WeatherBlock from '../components/home/WeatherBlock.vue'
import MenuBlock from '../components/home/MenuBlock.vue'
import AppSection from '../components/AppSection.vue'
import SpotCard from '../components/spot/BaseCard.vue'
import { useSpot } from '../stores/spot'

const Spot = useSpot()
Spot.getSpots(3)
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
  <AppSection
    title="熱門景點"
    color="#6E9292"
    link="/spot"
  >
    <div class="spot-cards">
      <SpotCard
        v-for="spot in Spot.spots"
        :key="spot.id"
        :id="spot.id"
        :title="spot.name"
        :image="spot.image"
        :location="spot.location"
        class="card"
      />
    </div>
  </AppSection>
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

.spot-cards {
  display: flex;
  justify-content: space-between;
  padding: 0 54px;
  > div {
    width: calc(33% - 23px);
  }
}
</style>
