import { PiggyBankModel } from '@/data/models/piggyBank'
import { create } from 'zustand'

interface BaseState {
  piggyBanks: PiggyBankModel[]
  setPiggyBanks: (piggyBank: PiggyBankModel[]) => void
}

export const usePiggyBankZustand = create<BaseState>(set => ({
  piggyBanks: [],
  setPiggyBanks: (piggyBanks: PiggyBankModel[]) => set({ piggyBanks }),
}))
