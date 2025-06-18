import { useRouter } from 'expo-router'
import { FloatingActionButton } from '../FloatingActionButton'
import { useThemeColors } from '@/hooks/useThemeColors'

const AddExpenseButton = () => {
  const router = useRouter()
  const { colors } = useThemeColors()
  return (
    <FloatingActionButton
      onPress={() => router.push('/expense/new')}
      icon="plus"
      size={28}
      color={colors.neutral[500]}
    />
  )
}

export default AddExpenseButton
