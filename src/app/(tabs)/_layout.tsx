import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'

import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabsLayout() {
  const { colorScheme } = useColorScheme()
  const backgroundColor = colorScheme === 'dark' ? '#1e293b' : 'white'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1e293b' : 'white',
            borderTopWidth: 1,
            borderTopColor: colorScheme === 'dark' ? '#334155' : '#e5e7eb',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor:
            colorScheme === 'dark' ? '#94a3b8' : '#6b7280',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="piggyBanks"
          options={{
            title: 'Cofrinhos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="piggy-bank-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(top-tabs)"
          options={{
            title: 'Fluxo de Caixa',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cash-multiple"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
