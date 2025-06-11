import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs'
import { withLayoutContext } from 'expo-router'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import { useThemeColors } from '../../../hooks/useThemeColors'

const { Navigator } = createMaterialTopTabNavigator()

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator)

export default function TopTabsLayout() {
  const colors = useThemeColors()
  const screenWidth = Dimensions.get('window').width
  const tabWidth = screenWidth / 2

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background.light,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          height: 52,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: 'none',
          color: colors.text.light.primary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary[500],
          height: 3,
        },
        tabBarActiveTintColor: colors.text.light.primary,
        tabBarInactiveTintColor: colors.text.light.tertiary,
        tabBarItemStyle: {
          width: tabWidth,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index/index"
        options={{
          title: 'Despesas',
        }}
      />
      <MaterialTopTabs.Screen
        name="gains"
        options={{
          title: 'Ganhos',
        }}
      />
    </MaterialTopTabs>
  )
}
