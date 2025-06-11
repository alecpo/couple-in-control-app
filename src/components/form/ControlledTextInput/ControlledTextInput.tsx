import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { TextInput, View, Text, TextInputProps } from 'react-native'
import { useThemeColors } from '../../../hooks/useThemeColors'

export interface ControlledTextInputProps<T extends FieldValues>
  extends TextInputProps {
  name: Path<T>
  label?: string
  control?: Control<T>
  placeholder: string
  error?: string
}

export const ControlledTextInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  error,
  ...rest
}: ControlledTextInputProps<T>) => {
  const colors = useThemeColors()

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-medium text-text-light-primary mb-1">
          {label}
        </Text>
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className={`px-4 py-2 rounded-lg border ${
              error ? 'border-error-500' : 'border-neutral-200'
            } bg-background-light`}
            placeholderTextColor={colors.neutral[400]}
            selectionColor={colors.primary[500]}
            autoCapitalize="none"
            autoCorrect={false}
            {...rest}
          />
        )}
      />
      {error && <Text className="text-sm text-error-500 mt-1">{error}</Text>}
    </View>
  )
}
