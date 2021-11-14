<script setup lang="ts">
import { Location, CollectionTag } from '@element-plus/icons'
import { computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { useFood } from '../../stores/food'

const props = defineProps<{
  id: string
  title: string,
  location: string,
  image: string,
  time: string,
  phone: string,
  address: string
}>()

const Food = useFood()
const router = useRouter()
const isSubscribed = computed(() => Food.subscribedIds.includes(props.id))

</script>

<template>
<div
  class="card"
  :style="{ backgroundImage: `url(${image})` }"
  @click.stop="router.push(`/spot/${id}`)"
>
  <button
    :class="{ active: isSubscribed }"
    @click.stop="Food.toggleSubscribe(id, !isSubscribed)"
  >
    <CollectionTag />
  </button>
  <div class="information">
    <div class="title">
      <div>{{ title }}</div>
      <div class="location">
        <div class="icon"><Location /></div>
        {{ location }}
      </div>
    </div>
    <div class="address">{{ address }}</div>
    <div>{{ `營業時間：${time}` }}</div>
    <div>{{ `電話：${phone}` }}</div>
  </div>
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
  .information {
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 0 0 20px 20px;
    border-top: none;
    color: rgba(0, 0, 0, 0.3);
    font-size: 1.4rem;
    position: absolute;
    width: 100%;
    background-color: #fff;
    bottom: 0;
    padding: 8px 16px 18px;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 3.2rem;
      color: #000;
      margin-bottom: 20px;
      > div:first-child {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      min-width: 80px;
      color: rgba(0, 0, 0, 0.5);
      margin-left: 10px;
      .icon {
        height: 24px;
        width: 24px;
      }
    }
    .address {
      font-weight: bold;
      font-size: 1.6rem;
    }
  }
}
</style>
