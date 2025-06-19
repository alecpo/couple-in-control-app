import { Tabs } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useThemeColors } from '@/hooks/useThemeColors'

import { Icon } from '@/components'

export default function TabsLayout() {
  const { colors } = useThemeColors()

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
        initialRouteName="(cash-flow-tabs)"
      >
        <Tabs.Screen
          name="PiggyBanks"
          options={{
            title: 'Cofrinhos',
            tabBarIcon: ({ color, size }) => (
              <Icon name="piggy-bank-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(cash-flow-tabs)"
          options={{
            title: 'Fluxo de Caixa',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cash-multiple" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
