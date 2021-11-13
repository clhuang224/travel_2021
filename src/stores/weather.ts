import { defineStore } from 'pinia'
import axios from 'axios'
import { WeatherData } from '../interfaces/WeatherData'

const getWeatherType = (content: string) => {
  if (content.includes('雷')) return 'thunder'
  if (content.includes('雨') && content.includes('雲')) return 'rainy-cloud'
  if (content.includes('雨')) return 'rainy'
  if (content.includes('晴') && content.includes('雲')) return 'sunny-cloud'
  if (content.includes('晴')) return 'sunny'
  return 'cloud'
}

export const useWeather = defineStore('weather', {
  state: () =>  ({
    records: [] as Array<{ regionName: string, averageTemp: number, content: string, type: string }>
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
          content: el.weatherElement.find((item) => item.elementName === 'Wx')?.time[0].parameter.parameterName,
          type: getWeatherType(el.weatherElement.find((item) => item.elementName === 'Wx')?.time[0].parameter.parameterName ?? '')
        })
      })
    }
  }
})
