import React from 'react'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import '../../global.css'

export default function RootLayout() {
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
