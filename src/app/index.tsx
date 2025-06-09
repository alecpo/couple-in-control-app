import React from "react";
import { View, Text } from "react-native";
import Container from "../components/Container";
import ControlledTextInput from "../components/form/ControlledTextInput/ControlledTextInput";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/Button";

interface CreateIncomeCashForm {
  firstName: string;
}

export default function CashFlow() {
  const form = useForm<CreateIncomeCashForm>({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = (data: CreateIncomeCashForm) => {
    console.log(data);
  };

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
  );
}
