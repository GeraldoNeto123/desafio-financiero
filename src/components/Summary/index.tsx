import styles from './styles.module.scss'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import { useTransaction } from '../../hooks/useTransaction'
import { formatPrice } from '../../util/format';

export default function Summary() {
    const { transactions } = useTransaction();
    const summary = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === 'CASH_INCOME') {
            accumulator.cashIncome += transaction.value;
            accumulator.total += transaction.value;
        } else {
            accumulator.cashOutflow += transaction.value;
            accumulator.total -= transaction.value;
        }

        return accumulator;
    }, {
        cashIncome: 0,
        cashOutflow: 0,
        total: 0
    })


    return (
        <div className={styles.summaryContainer}>
            <div className={styles.summaryContent}>
                <div className={styles.card}>
                    <header>
                        <span>Entradas</span>
                        <FiArrowDownLeft size='2rem' color='var(--green)' />
                    </header>
                    <strong>{formatPrice(summary.cashIncome)}</strong>
                </div>

                <div className={styles.card}>
                    <header>
                        <span>Saídas</span>
                        <FiArrowUpRight size='2rem' color='var(--red)' />
                    </header>
                    <strong>{formatPrice(summary.cashOutflow)}</strong>
                </div>

                <div className={styles.card}>
                    <header>Saldo Toal</header>
                    <strong>{formatPrice(summary.total)}</strong>
                </div>
            </div>
        </div>
    )
}