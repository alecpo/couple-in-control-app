import React, { useEffect } from 'react'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import '../../global.css'
import { getAllPiggyBanks } from '@/service/mocks/piggyBanks'
import { usePiggyBankZustand } from './zustands'

export default function RootLayout() {
  const { setPiggyBanks } = usePiggyBankZustand()

  useEffect(() => {
    getAllPiggyBanks().then(setPiggyBanks)
  }, [setPiggyBanks])

  return (
    <>
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
    </>
  )
}
