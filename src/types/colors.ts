import { colors } from '@/styles/colors'

// Type for the colors object
export type ColorScheme = typeof colors

// Type for accessing nested color paths
export type ColorPath = {
  [K in keyof ColorScheme]: K extends string
    ? ColorScheme[K] extends { [key: string]: { [key: string]: string } }
      ? `${K}.${keyof ColorScheme[K] & string}.${keyof ColorScheme[K][keyof ColorScheme[K]] & string}`
      : ColorScheme[K] extends { [key: string]: string }
        ? `${K}.${keyof ColorScheme[K] & string}`
        : never
    : never
}[keyof ColorScheme]
