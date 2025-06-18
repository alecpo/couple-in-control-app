import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import ExpenseItem from './components/ExpenseItem'
import { generateExpenses } from '../../../../service/mocks/Expenses'
import AddExpenseButton from '@/components/AddExpenseButton'
import { Expense } from './Expenses.types'
import { usePiggyBankZustand } from '@/app/zustands'

export default function ExpensesScreen() {
  const { piggyBanks } = usePiggyBankZustand()

  const [expenses, setExpenses] = useState<Expense[]>([])

  const fetchExpenses = async () => {
    const expenses = await generateExpenses(10)
    setExpenses(expenses)
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

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
