import React from 'react';
import { useTransaction } from '../../hooks/useTransaction';
import { formatDate, formatPrice } from '../../util/format';
import styles from './styles.module.scss'
import { FiTrash } from 'react-icons/fi'

export default function TableTransactions() {
    const { transactions, removeTransaction } = useTransaction();

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length ? transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td data-label="Descrição">{transaction.description}</td>
                            <td
                                data-label="Valor"
                                className={transaction.type === 'CASH_INCOME' ? styles.cashIncome : styles.cashOutflow}
                            >
                                {formatPrice(transaction.value)}
                            </td>
                            <td data-label="Categoria">{transaction.category}</td>
                            <td data-label="Data">
                                <span>{formatDate(transaction.created)} </span>
                                às
                                <span> {transaction.created.toLocaleTimeString()}</span>
                            </td>
                            <td>
                                <button onClick={() => removeTransaction(transaction.id)} title='Excluir'>
                                    <FiTrash color='var(--red)' size='1rem' />
                                </button>
                            </td>
                        </tr>
                    ))
                        :
                        <tr>
                            <td colSpan={4}>
                                <p style={{ textAlign: 'center' }}>
                                    Você ainda não possui registros!
                                </p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}