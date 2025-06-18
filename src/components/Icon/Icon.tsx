import { useThemeColors } from '@/hooks/useThemeColors'
import { ColorPath } from '@/types/colors'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export interface IconProps {
  name: keyof typeof MaterialCommunityIcons.glyphMap
  size?: number
  color?: ColorPath
}

export const Icon = ({ name, size = 24, color = 'primary.500' }: IconProps) => {
  const { getColorFromPath } = useThemeColors()
  const colorValue = getColorFromPath(color)

  return <MaterialCommunityIcons name={name} size={size} color={colorValue} />
}
