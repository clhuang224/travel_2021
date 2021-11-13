import { defineStore } from 'pinia'

export const useCounter = defineStore('couter', {
  state: () =>  ({
    count: 0
  }),
  actions: {
    increment () {
      this.count++
    }
  }
})