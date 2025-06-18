import { ColorPath } from '@/types/colors'
import { TDate } from '@/types/utils'

export interface PiggyBankModel {
  id: string
  title: string
  percentage: number
  amount?: number
  created_at?: TDate
  updated_at?: TDate
  color?: ColorPath
}
