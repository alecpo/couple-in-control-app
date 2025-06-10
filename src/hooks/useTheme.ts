import { useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'nativewind'

const THEME_STORAGE_KEY = '@theme'

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme()

  const loadTheme = useCallback(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then(savedTheme => {
        if (savedTheme) {
          setColorScheme(savedTheme as 'light' | 'dark')
        }
      })
      .catch(error => {
        window.console.error('Error loading theme:', error)
      })
  }, [setColorScheme])

  useEffect(() => {
    loadTheme()
  }, [loadTheme])

  const toggleTheme = useCallback(() => {
    const newTheme = colorScheme === 'dark' ? 'light' : 'dark'
    AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme)
      .then(() => {
        setColorScheme(newTheme)
      })
      .catch(error => {
        window.console.error('Error saving theme:', error)
      })
  }, [colorScheme, setColorScheme])

  return {
    colorScheme,
    toggleTheme,
  }
}
