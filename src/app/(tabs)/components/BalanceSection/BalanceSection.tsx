import { View, Text } from 'react-native'

export const BalanceSection = () => {
  return (
    <View className="w-full bg-background-light h-20 border-t border-neutral-200">
      <View className="flex-1 flex-col">
        <View className="flex-1 p-2 flex-row items-center border-b border-neutral-200 gap-1">
          <Text className="text-sm font-medium text-neutral-500">
            Saldo total:
          </Text>
          <Text className="text-sm font-medium text-neutral-500">
            R$ 1000,00
          </Text>
        </View>
        <View className="flex-1 p-2 flex-row items-center">
          <Text className="text-sm font-medium text-neutral-500">
            Saldo do mês:
          </Text>
          <Text className="text-sm font-medium text-neutral-500">
            R$ 150,00
          </Text>
        </View>
      </View>
    </View>
  )
}
