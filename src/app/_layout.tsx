import React, { useCallback, useEffect, useState } from 'react'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Entypo from '@expo/vector-icons/Entypo'
import * as Font from 'expo-font'
import '../../global.css'
import { getAllPiggyBanks } from '@/service/mocks/piggyBanks'
import { usePiggyBankZustand } from './zustands'

import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import { Container } from '@/components'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)

  const { setPiggyBanks } = usePiggyBankZustand()

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  useEffect(() => {
    getAllPiggyBanks().then(setPiggyBanks)
  }, [setPiggyBanks])

  if (!appIsReady) {
    return null
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'bg-background-light',
          },
          headerTintColor: 'text-text-light-primary',
          contentStyle: {
            backgroundColor: 'bg-background-light',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  )
}
