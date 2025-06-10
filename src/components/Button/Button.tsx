import { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface ButtonProps extends PropsWithChildren<TouchableOpacityProps> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 p-4 rounded-lg mt-4"
      activeOpacity={0.8}
      {...props}
    >
      <Text className="text-white text-center font-semibold">{children}</Text>
    </TouchableOpacity>
  )
}
