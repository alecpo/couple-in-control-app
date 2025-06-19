import { PropsWithChildren } from 'react'
import { View } from 'react-native'

export const TabContainer = ({ children }: PropsWithChildren) => {
  return <View className="flex-1 pb-[84px]">{children}</View>
}
