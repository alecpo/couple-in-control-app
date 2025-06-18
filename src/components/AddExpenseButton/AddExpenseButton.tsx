import { useRouter } from 'expo-router'
import { FloatingActionButton } from '../FloatingActionButton'
import { useThemeColors } from '@/hooks/useThemeColors'

const AddExpenseButton = () => {
  const router = useRouter()
  const { colors } = useThemeColors()
  return (
    <FloatingActionButton
      onPress={() => router.push('/expense/new')}
      icon="cash-minus"
      size={28}
      color={colors.warning[400]}
    />
  )
}

export default AddExpenseButton
