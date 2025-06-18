import { faker } from '@faker-js/faker'
import { Expense } from '../../app/(tabs)/(top-tabs)/index/Expenses.types'
import { getAllPiggyBanks } from './piggyBanks'

const titles = [
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

export async function generateExpenses(count = 10): Promise<Expense[]> {
  const piggyBanks = await getAllPiggyBanks()
  const piggyBanksIds = piggyBanks.map(piggyBank => piggyBank.id)
  return Array.from({ length: count }, (_, index) => {
    const newExpense: Expense = {
      id: faker.string.uuid(),
      title: titles[index],
      amount: faker.number.int({ min: 20, max: 2000 }),
      date: faker.date.recent({ days: 30 }),
      description: faker.lorem.sentence(),
      isRecurring: index % 2 === 0,
      isPaid: faker.datatype.boolean(),
      piggyBankId:
        index === count - 1
          ? undefined
          : piggyBanksIds[index % piggyBanksIds.length],
    }
    return newExpense
  })
}
