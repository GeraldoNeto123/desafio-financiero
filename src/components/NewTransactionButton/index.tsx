import styles from './styles.module.scss'

export default function NewTransactionbutton() {
    return (
        <button
            type="button"
            className={styles.newTransactionButton}
        >
            NOVA TRANSAÇÃO
        </button>
    )
}