import Modal from 'react-modal'
import styles from './styles.module.scss'
import { FaTimes } from 'react-icons/fa'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { FormEvent, useState } from 'react';
import { useTransaction } from '../../../hooks/useTransaction';

interface NewTransactionProps {
    isOpne: boolean;
    onRequestClose: () => any;
}

export default function NewTransaction({ isOpne, onRequestClose }: NewTransactionProps) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState<number>(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState<'CASH_INCOME' | 'CASH_OUTFLOW'>('CASH_INCOME');
    const { addTransaction } = useTransaction();


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const data = {
            description,
            value,
            category,
            type
        };

        addTransaction(data);
        onRequestClose();

        setDescription('');
        setValue(0);
        setCategory('');
        setType('CASH_INCOME');
    }
    
    return (
        <Modal
            isOpen={isOpne}
            onRequestClose={onRequestClose}
            overlayClassName='modal-overlay'
            className='modal-content'
        >
            <button className={styles.btnClose} onClick={onRequestClose}>
                <FaTimes size={24} />
            </button>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder='Descrição'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />

                <input
                    placeholder='Valor'
                    type='number'
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                    required
                />

                <div className={styles.typeTransactionContainer}>
                    <button
                        className={type === 'CASH_INCOME' ? styles.cashIncome : ''}
                        type='button'
                        onClick={() => setType('CASH_INCOME')}
                    >
                        <FiArrowUpCircle size='1.5rem' color='var(--green)' />
                        <span>Entrada</span>
                    </button>

                    <button
                        className={type === 'CASH_OUTFLOW' ? styles.cashOutflow : ''}
                        type='button'
                        onClick={() => setType('CASH_OUTFLOW')}
                    >
                        <FiArrowDownCircle size='1.5rem' color='var(--red)' />
                        <span>Saída</span>
                    </button>
                </div>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                />

                <button type="submit">CADASTRAR</button>
            </form>

        </Modal>
    )
}