import { defineStore } from 'pinia'
import axios from 'axios'
import { WeatherData } from '../interfaces/WeatherData'

import Sunny from '../assets/home/weather/sunny.png'
import Rainy from '../assets/home/weather/rainy.png'
import SunnyCloud from '../assets/home/weather/sunny-cloud.png'
import Thunder from '../assets/home/weather/thunder.png'
import RainyCloud from '../assets/home/weather/rainy-cloud.png'
import Cloud from '../assets/home/weather/cloud.png'

const getWeatherImage = (content: string) => {
  if (content.includes('雷')) return Thunder
  if (content.includes('雨') && content.includes('雲')) return RainyCloud
  if (content.includes('雨')) return Rainy
  if (content.includes('晴') && content.includes('雲')) return SunnyCloud
  if (content.includes('晴')) return Sunny
  return Cloud
}

export const useWeather = defineStore('weather', {
  state: () =>  ({
    records: [] as Array<{ regionName: string, averageTemp: number, content: string, image: string }>
  }),
  actions: {
    async getWeatherRecords () {
      const res = await axios.get(
        `https://opendata.cwb.gov.tw/api//v1/rest/datastore/F-C0032-001?Authorization=${import.meta.env.VITE_WEATHER_AUTH}`
      )
      const data = (res.data?.records?.location || []) as Array<WeatherData>
      this.records = data.map((el) => {
        return ({
          regionName: el.locationName,
          averageTemp: (Number(el.weatherElement.find((item) => item.elementName === 'MinT')?.time[0].parameter.parameterName) + Number(el.weatherElement.find((item) => item.elementName === 'MinT')?.time[0].parameter.parameterName)) * 0.5,
          content: el.weatherElement.find((item) => item.elementName === 'Wx')?.time[0].parameter.parameterName ?? '',
          image: getWeatherImage(el.weatherElement.find((item) => item.elementName === 'Wx')?.time[0].parameter.parameterName ?? '')
        })
      })
    }
  }
})
