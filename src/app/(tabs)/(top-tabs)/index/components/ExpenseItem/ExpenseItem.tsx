import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Expense } from '../../Expenses.types'
import { useThemeColors } from '../../../../../../hooks/useThemeColors'
import { usePiggyBankZustand } from '@/app/zustands'
import { Icon } from '@/components'

interface ExpenseItemProps {
  expense?: Expense
  onPress?: () => void
}

const ExpenseItem = ({ expense, onPress }: ExpenseItemProps) => {
  const { colors, getColorFromPath } = useThemeColors()

  const { piggyBanks } = usePiggyBankZustand()

  const piggyBank = piggyBanks.find(
    piggyBank => piggyBank.id === expense?.piggyBankId
  )

  const piggyBankColor = piggyBank?.color
  const piggyBankTailwindColor =
    piggyBank?.color?.replaceAll('.', '-') ?? 'primary-500'

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
          <View className="flex-row items-center gap-1">
            {expense?.isRecurring && (
              <MaterialCommunityIcons
                name="repeat"
                size={14}
                color={colors.neutral[500]}
              />
            )}
            <Text className="text-base font-medium text-text-light-primary">
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
          {piggyBank && (
            <View
              className="flex-row items-center rounded-full px-2 py-1"
              style={{ backgroundColor: getColorFromPath(piggyBank?.color) }}
            >
              <Icon name="piggy-bank" color="neutral.50" size={14} />
              <Text className="text-sm font-bold text-neutral-50 ml-1">
                {piggyBank?.title}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ExpenseItem
