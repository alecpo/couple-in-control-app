import { PiggyBankModel } from '@/data/models/piggyBank'

export const getAllPiggyBanks = async (): Promise<PiggyBankModel[]> => {
  return [
    {
      id: '1',
      title: 'Reserva de emergência',
      percentage: 40,
      amount: 100,
      color: 'crimson',
    },
    {
      id: '2',
      title: 'Viagens',
      percentage: 15,
      amount: 200,
      color: 'emerald',
    },
    {
      id: '3',
      title: 'Mesada João',
      percentage: 15,
      amount: 300,
      color: 'indigo',
    },
    {
      id: '4',
      title: 'Mesada Samyla',
      percentage: 15,
      amount: 400,
      color: 'amber',
    },
    {
      id: '5',
      title: 'Filhos',
      percentage: 15,
      amount: 400,
      color: 'fuchsia',
    },
  ]
}
