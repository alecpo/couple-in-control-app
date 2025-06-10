import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContainerProps {
  children: React.ReactNode
  scrollable?: boolean
  className?: string
}

const Container = ({
  children,
  scrollable = false,
  className = '',
}: ContainerProps) => {
  const baseClasses = 'flex-1 bg-primary-500 p-4'
  const contentClasses = 'flex-1 px-4 py-6'

  const Content = () => (
    <View className={`${contentClasses} ${className}`}>{children}</View>
  )

  return (
    <SafeAreaView className={baseClasses}>
      {scrollable ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Content />
        </ScrollView>
      ) : (
        <Content />
      )}
    </SafeAreaView>
  )
}

export default Container
