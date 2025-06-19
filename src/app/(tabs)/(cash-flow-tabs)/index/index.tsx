import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import ExpenseItem from './components/ExpenseItem'
import { generateExpenses } from '../../../../service/mocks/Expenses'
import AddExpenseButton from '@/components/AddExpenseButton'
import { Expense } from './Expenses.types'

import { BalanceSection } from '../../components/BalanceSection'

export default function ExpensesScreen() {
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
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingVertical: 12 }}
      >
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            {...(index !== expenses.length - 1 && {
              className: 'mb-3',
            })}
          />
        ))}
      </ScrollView>
      <BalanceSection />
      <AddExpenseButton />
    </>
  )
}
