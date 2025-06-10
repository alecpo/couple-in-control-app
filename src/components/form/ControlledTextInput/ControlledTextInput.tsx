import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { TextInput, View, Text, TextInputProps } from 'react-native'

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
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-500 text-xs mb-1">{label}</Text>}
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
            className={`px-4 py-3 rounded-lg border ${
              error ? 'border-red-500' : 'border-gray-300'
            } bg-white text-gray-900 text-base`}
            placeholderTextColor="#9CA3AF"
            selectionColor="#3b82f6"
            autoCapitalize="none"
            autoCorrect={false}
            {...rest}
          />
        )}
      />
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  )
}
