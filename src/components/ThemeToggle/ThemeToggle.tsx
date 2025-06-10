import React from 'react'
import { Pressable } from 'react-native'
import Animated, {
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/hooks/useTheme'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const ThemeToggle = () => {
  const { colorScheme, toggleTheme } = useTheme()
  const isDark = colorScheme === 'dark'
  const progress = useSharedValue(isDark ? 1 : 0)
  const scale = useSharedValue(1)

  const handlePress = () => {
    // First animate the press
    scale.value = withSequence(
      withTiming(0.9, { duration: 100 }),
      withTiming(1, { duration: 100 })
    )

    // Then update the progress value
    progress.value = withSpring(isDark ? 0 : 1, {
      damping: 15,
      stiffness: 100,
    })

    // Finally toggle the theme
    toggleTheme()
  }

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#F1F3F5', '#343A40'] // neutral-100 to neutral-800
    )

    const rotate = progress.value * 180

    return {
      backgroundColor,
      transform: [{ rotate: `${rotate}deg` }, { scale: scale.value }],
    }
  })

  const iconStyle = useAnimatedStyle(() => {
    const iconScale = withSpring(progress.value === 1 ? 1 : 0, {
      damping: 15,
      stiffness: 100,
    })

    return {
      transform: [{ scale: iconScale }],
      opacity: iconScale,
    }
  })

  const sunIconStyle = useAnimatedStyle(() => {
    const iconScale = withSpring(progress.value === 0 ? 1 : 0, {
      damping: 15,
      stiffness: 100,
    })

    return {
      transform: [{ scale: iconScale }],
      opacity: iconScale,
    }
  })

  return (
    <AnimatedPressable
      onPress={handlePress}
      className="p-2 rounded-full items-center justify-center w-10 h-10 active:opacity-80"
      style={animatedStyle}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true }}
    >
      <Animated.View style={sunIconStyle} className="absolute">
        <Ionicons
          name="sunny"
          size={24}
          color="#FFB900" // warning-500
          className="text-warning-500"
        />
      </Animated.View>
      <Animated.View style={iconStyle} className="absolute">
        <Ionicons
          name="moon"
          size={24}
          color="#0066FF" // primary-500
          className="text-primary-500"
        />
      </Animated.View>
    </AnimatedPressable>
  )
}

export default ThemeToggle
