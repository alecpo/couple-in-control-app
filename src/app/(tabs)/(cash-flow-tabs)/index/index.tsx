import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import ExpenseItem from './components/ExpenseItem'
import AddExpenseButton from '@/components/AddExpenseButton'
import { Expense } from '@/data/models/expense'

import { BalanceSection } from '../../components/BalanceSection'
import { getExpenses, debugGetAllExpenses } from '@/service/expense'

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const fetchExpenses = async () => {
    try {
      // First, let's debug what's in the database
      // await debugGetAllExpenses()

      // Then try to get expenses with the filter
      const expenses = await getExpenses() // This will use the default ALESSANDRO_ID
      console.log('expenses', expenses)
      setExpenses(expenses)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  useEffect(() => {
    console.log('expenses', expenses)
  }, [expenses])

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
