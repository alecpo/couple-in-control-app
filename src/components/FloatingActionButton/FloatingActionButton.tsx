import { Pressable, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useThemeColors } from '@/hooks/useThemeColors'
import { colors } from '@/styles/colors'
import { Path } from 'react-hook-form'

interface FloatingActionButtonProps {
  onPress: () => void
  icon: keyof typeof MaterialCommunityIcons.glyphMap
  size: number
  color?: string
}

const FloatingActionButton = ({
  onPress,
  icon,
  size,
  color,
}: FloatingActionButtonProps) => {
  const colors = useThemeColors()

  return (
    <View className="absolute bottom-6 right-6">
      <Pressable
        onPress={onPress}
        className={`w-14 h-14 rounded-full items-center justify-center shadow-lg`}
        style={{ backgroundColor: color ?? colors.primary[500] }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={size}
          color={colors.background.light}
        />
      </Pressable>
    </View>
  )
}

export default FloatingActionButton
