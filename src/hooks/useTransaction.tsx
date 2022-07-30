import { createContext, ReactNode, useContext, useState } from 'react';

interface TransactionProviderProps {
  children: ReactNode;
}

interface Transaction {
  id?: number;
  description: string;
  value: number;
  category: string;
  type: 'CASH_INCOME' | 'CASH_OUTFLOW';
  created?: Date;
}

interface TransactionContextData {
  transactions: Transaction[];
  addTransaction: (newTransaction: Transaction) => void;
  removeTransaction: (transactionId: number) => void;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = async (newTransaction: Transaction) => {
    let newTransactions = [...transactions];

    newTransactions.push({
      ...newTransaction,
      id: Math.floor(Math.random() * Date.now()),
      created: new Date()
    });

    setTransactions(newTransactions);
  };

  const removeTransaction = (TransactionId: number) => {
    const transactionRemoved = transactions.filter((transaction) => transaction.id !== TransactionId);

    setTransactions(transactionRemoved);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);

  return context;
}
