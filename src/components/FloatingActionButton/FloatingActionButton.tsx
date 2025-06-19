import { Pressable, View } from 'react-native'
import { useThemeColors } from '@/hooks/useThemeColors'
import { Icon, IconName } from '../Icon'

export interface FloatingActionButtonProps {
  onPress: () => void
  icon: IconName
  size: number
  color?: string
}

export const FloatingActionButton = ({
  onPress,
  icon,
  size,
  color,
}: FloatingActionButtonProps) => {
  const { colors } = useThemeColors()

  return (
    <View className="absolute bottom-3 right-6 z-50">
      <Pressable
        onPress={onPress}
        className={`w-14 h-14 rounded-full items-center justify-center shadow-lg`}
        style={{ backgroundColor: color ?? colors.primary[500] }}
      >
        <Icon name={icon} size={size} color="background.light" />
      </Pressable>
    </View>
  )
}
