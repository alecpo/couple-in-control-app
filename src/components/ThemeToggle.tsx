import { Pressable } from 'react-native'
import { useColorScheme } from 'nativewind'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useCallback } from 'react'

const THEME_STORAGE_KEY = '@couple_in_control_theme'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const rotation = useSharedValue(0)

  console.log('Current colorScheme:', colorScheme)

  const handlePress = useCallback(async () => {
    console.log('Before toggle - colorScheme:', colorScheme)
    // Animate rotation
    rotation.value = withSpring(rotation.value + 180, {
      damping: 15,
      stiffness: 100,
    })

    // Update theme
    toggleColorScheme()
    console.log('After toggle - colorScheme:', colorScheme)
  }, [rotation, toggleColorScheme, colorScheme])

  useEffect(() => {
    console.log('colorScheme changed:', colorScheme)
  }, [colorScheme])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    }
  })

  return (
    <AnimatedPressable
      onPress={handlePress}
      className="h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800"
      style={animatedStyle}
    >
      <MaterialCommunityIcons
        name={colorScheme === 'dark' ? 'weather-sunny' : 'weather-night'}
        size={24}
        className="text-neutral-800 dark:text-neutral-200"
      />
    </AnimatedPressable>
  )
}
