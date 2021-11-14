<script setup lang="ts">
import { Location, CollectionTag } from '@element-plus/icons'
import { computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { useSpot } from '../../stores/spot'

const props = defineProps<{
  id: string
  title: string,
  location: string,
  image: string
}>()

const Spot = useSpot()
const router = useRouter()
const isSubscribed = computed(() => Spot.subscribedIds.includes(props.id))

</script>

<template>
<div
  class="card"
  :style="{ backgroundImage: `url(${image})` }"
  @click.stop="router.push(`/spot/${id}`)"
>
  <button
    :class="{ active: isSubscribed }"
    @click.stop="Spot.toggleSubscribe(id, !isSubscribed)"
  >
    <CollectionTag />
  </button>
  <h4>
    <div class="title">{{ title }}</div>
    <div class="location">
      <div class="icon"><Location /></div>
      {{ location }}
    </div>
  </h4>
</div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 420px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  button {
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    top: 18px;
    right: 18px;
    border: none;
    padding: 5px;
    cursor: pointer;
    &.active, &:active, &:hover {
      color: #f8f8f8;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 3.6rem;
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    padding: 22px 12px;
    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      min-width: 80px;
      .icon {
        height: 24px;
        width: 24px;
      }
    }
  }
}
</style>
