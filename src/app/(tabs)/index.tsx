import React from 'react'
import { View } from 'react-native'
import Container from '@/components/Container'
import ControlledTextInput from '@/components/form/ControlledTextInput/ControlledTextInput'
import Button from '@/components/Button'
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
          <Button onPress={form.handleSubmit(onSubmit)}>Submit</Button>
        </View>
      </FormProvider>
    </Container>
  )
}
