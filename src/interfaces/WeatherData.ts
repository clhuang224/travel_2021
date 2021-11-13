export interface WeatherData {
  locationName: string,
  weatherElement: Array<{
    elementName: 'Wx' | 'PoP' | 'CI' | 'MinT' | 'MaxT',
    time: Array<{
      startTime: string, // "2021-11-13 12:00:00"
      endTime: string,
      parameter: {
        parameterName: string, // "多雲短暫雨"
        parameterValue: string //"8"
      }
    }>
  }>
}