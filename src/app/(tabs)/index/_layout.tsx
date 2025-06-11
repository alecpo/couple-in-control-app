import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs'
import { withLayoutContext } from 'expo-router'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

const { Navigator } = createMaterialTopTabNavigator()

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator)

export default function TopTabsLayout() {
  const { colorScheme } = useColorScheme()
  const screenWidth = Dimensions.get('window').width
  const tabWidth = screenWidth / 2

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1e293b' : 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: colorScheme === 'dark' ? '#334155' : '#e5e7eb',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: 'none',
          color: colorScheme === 'dark' ? 'white' : 'black',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#3b82f6',
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#94a3b8' : '#64748b',
        tabBarItemStyle: {
          width: tabWidth,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      initialRouteName="index"
    >
      <MaterialTopTabs.Screen
        name="index"
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
