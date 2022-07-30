import React, { useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image'
import ModalNewTransaction from '../Modal/NewTransaction'

export default function Header() {
    const [modalNewTransactionIsOpen, setModalNewTransactionIsOpen] = useState(false);

    const handleOpenModalNewTransaction = () => {
        setModalNewTransactionIsOpen(true);
    }

    const handleCloseModalNewTransaction = () => {
        setModalNewTransactionIsOpen(false);
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContainerContent}>
                    <div>
                        <Image
                            className={styles.logo}
                            src='/images/logo-branca.svg'
                            alt='Logo'
                            height={46}
                            width={180}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.newTransactionButton}
                            onClick={handleOpenModalNewTransaction}
                        >
                            NOVA TRANSAÇÃO
                        </button>
                    </div>
                </div>
            </header>

            <ModalNewTransaction
                isOpne={modalNewTransactionIsOpen}
                onRequestClose={handleCloseModalNewTransaction}
            />
        </>
    )
}