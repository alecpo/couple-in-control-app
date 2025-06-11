import { faker } from '@faker-js/faker'
import { Expense } from './Expenses.types'

const categories = [
  'Aluguel',
  'Battlenet',
  'Luz',
  'Internet',
  'Jantar fora',
  'Transporte',
  'Saúde',
  'Entretenimento',
  'Compras',
  'Poupança',
] as const

const recurringCategories = ['Aluguel', 'Luz', 'Internet', 'Poupança'] as const

export function generateExpenses(count = 10) {
  return Array.from({ length: count }, () => {
    const newExpense: Expense = {
      id: faker.string.uuid(),
      title: faker.helpers.arrayElement(categories),
      amount: faker.number.int({ min: 20, max: 2000 }),
      date: faker.date.recent({ days: 30 }),
      description: faker.lorem.sentence(),
      isRecurring:
        faker.helpers.arrayElement(categories) in recurringCategories,
    }
    return newExpense
  })
}

export const expenses = generateExpenses()
