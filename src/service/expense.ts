import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { Expense } from '@/data/models/expense'
import { formatDateToISOString } from '@/utils/date'

const ALESSANDRO_ID = 'wEaxcRGQm3GQbzD4fnmT'

// Expense operations
export const addExpense = async (
  expense: Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>,
  userId = ALESSANDRO_ID
) => {
  try {
    const payload: Expense & { userId: string } = {
      ...expense,
      userId,
      date: formatDateToISOString(expense.date),
      createdAt: formatDateToISOString(),
      updatedAt: formatDateToISOString(),
    }
    const docRef = await addDoc(collection(db, 'expenses'), payload)
    return docRef.id
  } catch (error) {
    console.error('Error adding expense:', error)
    throw error
  }
}

export const getExpenses = async (
  userId = ALESSANDRO_ID
): Promise<Expense[]> => {
  try {
    console.log('Fetching expenses for userId:', userId)

    const q = query(
      collection(db, 'expenses'),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    )
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    })) as Expense[]
  } catch (error) {
    console.error('Error getting expenses:', error)
    throw error
  }
}

export const updateExpense = async (id: string, updates: Partial<Expense>) => {
  try {
    const expenseRef = doc(db, 'expenses', id)
    await updateDoc(expenseRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error('Error updating expense:', error)
    throw error
  }
}

export const deleteExpense = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'expenses', id))
  } catch (error) {
    console.error('Error deleting expense:', error)
    throw error
  }
}

// Debug function to check all documents in the collection
export const debugGetAllExpenses = async () => {
  try {
    console.log('Debug: Fetching ALL expenses without filters')
    const querySnapshot = await getDocs(collection(db, 'expenses'))
    console.log(
      'Debug: Total documents in collection:',
      querySnapshot.docs.length
    )
    querySnapshot.docs.forEach((doc, index) => {
      console.log(`Debug: Document ${index + 1}:`, {
        id: doc.id,
        data: doc.data(),
      })
    })
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Debug: Error getting all expenses:', error)
    throw error
  }
}

// Test function to add a sample expense
export const addTestExpense = async () => {
  try {
    const testExpense = {
      title: 'Test Expense',
      amount: 100,
      date: new Date(),
      description: 'This is a test expense',
      isRecurring: false,
      isPaid: true,
    }

    const expenseId = await addExpense(testExpense)
    console.log('Test expense added with ID:', expenseId)
    return expenseId
  } catch (error) {
    console.error('Error adding test expense:', error)
    throw error
  }
}
