import { useThemeColors } from '@/hooks/useThemeColors'
import { ColorPath } from '@/types/colors'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export type IconName = keyof typeof MaterialCommunityIcons.glyphMap

// Function overloads for better autocomplete
export function Icon(props: {
  name: IconName
  size?: number
  color: ColorPath
}): JSX.Element
export function Icon(props: {
  name: IconName
  size?: number
  color?: string
}): JSX.Element
export function Icon({
  name,
  size = 24,
  color = 'primary.500',
}: {
  name: IconName
  size?: number
  color?: ColorPath | string
}) {
  const { getColorFromPath } = useThemeColors()

  // Check if color is a ColorPath or custom string
  const colorValue = color.includes('.')
    ? getColorFromPath(color as ColorPath)
    : color

  return <MaterialCommunityIcons name={name} size={size} color={colorValue} />
}
