export interface Expense {
  id: string
  title: string
  amount: number
  date: Date
  description?: string
  isRecurring: boolean
  isPaid: boolean
  piggyBankId?: string
}
