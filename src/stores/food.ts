import { defineStore } from 'pinia'
import axios from 'axios'
import jsSHA from 'jssha'
import { taiwanRegionNameMapType } from '../consts/taiwanRegionMaps'

function GetAuthorizationHeader() {
  let date = new Date().toUTCString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(import.meta.env.VITE_TRAVEL_APP_KEY, 'TEXT')
  ShaObj.update('x-date: ' + date)
  return {
    Authorization: `hmac username="${import.meta.env.VITE_TRAVEL_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${ShaObj.getHMAC('B64')}"`,
    'X-date': date
  }
}

const localStorageKeys = {
  subscribed: 'subscribed-foods'
}

export const useFood = defineStore('food', {
  state: () =>  ({
    foods: [] as Array<{
      id: string,
      name: string,
      location: string,
      address: string,
      image: string,
      time: string,
      phone: string
    }>,
    subscribedIds: JSON.parse(localStorage.getItem(localStorageKeys.subscribed) ?? '[]') as Array<string>
  }),
  actions: {
    async getFoods (perPage: number = 6, page: number = 1) {
      const res: { data: Array<{
        Address: string,
        ID: string,
        Name: string,
        Picture: {
          PictureUrl1: string
        },
        OpenTime: string,
        Phone: string
      }> } = await axios.get(
        'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant',
        {
          headers: GetAuthorizationHeader(),
          params: {
            '$top': perPage,
            '$skip': perPage * (page - 1),
            '$format': 'JSON'
          }
        }
      )
      this.foods = res.data.map((el) => ({
        id: el.ID,
        name: el.Name,
        address: el.Address,
        location: Object.keys(taiwanRegionNameMapType).find((name) => el.Address.includes(name)) ?? '',
        image: el.Picture.PictureUrl1,
        time: el.OpenTime,
        phone: el.Phone
      }))
    },
    async toggleSubscribe (id: string, isSubscribe: boolean) {
      if (isSubscribe) this.subscribedIds.push(id)
      else this.subscribedIds.splice(this.subscribedIds.findIndex((subscribed) => subscribed === id))
      localStorage.setItem(localStorageKeys.subscribed, JSON.stringify(this.subscribedIds))
    }
  }
})
