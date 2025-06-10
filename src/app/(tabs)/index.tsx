import React from 'react'
import { View, Text } from 'react-native'
import { Container, ControlledTextInput, Button } from '@/components'
import { useForm, FormProvider } from 'react-hook-form'

interface CreateIncomeCashForm {
  firstName: string
}

export default function CashFlow() {
  const form = useForm<CreateIncomeCashForm>({
    defaultValues: {
      firstName: '',
    },
  })

  const onSubmit = (data: CreateIncomeCashForm) => {
    window.console.log(data)
  }

  return (
    <Container>
      <FormProvider {...form}>
        <View>
          <ControlledTextInput
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
          />
          <Button onPress={form.handleSubmit(onSubmit)}>
            <Text>Submit</Text>
          </Button>
        </View>
      </FormProvider>
    </Container>
  )
}
