import { ColorPath, ColorScheme } from '@/types/colors'
import { colors } from '@/styles/colors'

const getColorFromPath = (path?: ColorPath): string => {
  if (!path) return colors.primary[500]

  const parts = path.split('.')
  if (parts.length === 2) {
    const [category, shade] = parts
    return colors[category as keyof ColorScheme][
      shade as keyof (typeof colors)[keyof ColorScheme]
    ] as string
  } else {
    const [category, theme, shade] = parts
    return colors[category as keyof ColorScheme][
      theme as keyof (typeof colors)[keyof ColorScheme]
    ][
      shade as keyof (typeof colors)[keyof ColorScheme][keyof (typeof colors)[keyof ColorScheme]]
    ] as string
  }
}

export function useThemeColors() {
  return { colors, getColorFromPath }
}
