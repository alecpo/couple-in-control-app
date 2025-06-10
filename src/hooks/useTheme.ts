import { useColorScheme } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const THEME_STORAGE_KEY = '@theme'

type ColorScheme = 'light' | 'dark'

export const useTheme = () => {
  const systemColorScheme = useColorScheme() as ColorScheme
  const [colorScheme, setColorScheme] = useState<ColorScheme>(systemColorScheme)
  const [isLoading, setIsLoading] = useState(true)

  const loadTheme = useCallback(async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY)
      if (savedTheme) {
        setColorScheme(savedTheme as ColorScheme)
      }
    } catch (error) {
      window.console.error('Error loading theme:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTheme()
  }, [loadTheme])

  const toggleTheme = useCallback(async () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light'
    setColorScheme(newTheme)

    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme)
    } catch (error) {
      window.console.error('Error saving theme:', error)
    }
  }, [colorScheme])

  return {
    colorScheme,
    toggleTheme,
    isLoading,
  }
}
