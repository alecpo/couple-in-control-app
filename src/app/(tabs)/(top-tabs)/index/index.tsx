import React from 'react'
import { ScrollView } from 'react-native'
import ExpenseItem from './components/ExpenseItem'
import { expenses } from './Expenses.mock'
import AddExpenseButton from '@/components/AddExpenseButton'

export default function ExpensesScreen() {
  return (
    <>
      <ScrollView className="flex-1 p-4">
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ScrollView>
      <AddExpenseButton />
    </>
  )
}
