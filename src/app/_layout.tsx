import React from 'react'

import { Stack } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1e293b' : 'white',
          },
          headerTintColor: colorScheme === 'dark' ? 'white' : 'black',
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1e293b' : 'white',
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
