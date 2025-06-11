import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Expense } from '../../Expenses.types'
import { useThemeColors } from '../../../../../../hooks/useThemeColors'

interface ExpenseItemProps {
  expense?: Expense
  onPress?: () => void
}

const ExpenseItem = ({ expense, onPress }: ExpenseItemProps) => {
  const colors = useThemeColors()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-3 rounded-xl overflow-hidden bg-background-light"
      activeOpacity={0.7}
    >
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name={expense?.isRecurring ? 'repeat' : 'cash'}
              size={20}
              color={colors.neutral[500]}
            />
            <Text className="ml-2 text-base font-medium text-text-light-primary">
              {expense?.title}
            </Text>
          </View>
          <Text className="text-lg font-semibold text-text-light-primary">
            {formatCurrency(expense?.amount ?? 0)}
          </Text>
        </View>

        {expense?.description && (
          <Text
            className="text-sm mb-2 text-text-light-secondary"
            numberOfLines={2}
          >
            {expense?.description}
          </Text>
        )}

        <View className="flex-row justify-between items-center">
          <Text className="text-xs text-text-light-tertiary">
            {formatDate(expense?.date ?? new Date())}
          </Text>
          {expense?.isRecurring && (
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="repeat"
                size={14}
                color={colors.neutral[500]}
              />
              <Text className="ml-1 text-xs text-text-light-tertiary">
                Recorrente
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ExpenseItem
