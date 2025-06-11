import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useThemeColors } from '@/hooks/useThemeColors'

export default function TabsLayout() {
  const colors = useThemeColors()
  const backgroundColor = colors.background.light

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor,
            borderTopWidth: 1,
            borderTopColor: colors.neutral[200],
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: colors.primary[500],
          tabBarInactiveTintColor: colors.neutral[500],
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
