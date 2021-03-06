/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_WEATHER_AUTH: string
  readonly VITE_TRAVEL_APP_ID: string
  readonly VITE_TRAVEL_APP_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
