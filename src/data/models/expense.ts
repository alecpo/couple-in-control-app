import { TDate } from '@/types/utils'

export interface Expense {
  id?: string
  userId?: string
  title: string
  amount: number
  date: TDate
  description?: string
  isRecurring: boolean
  isPaid: boolean
  piggyBankId?: string
  createdAt?: TDate
  updatedAt?: TDate
}
