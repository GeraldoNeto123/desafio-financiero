import React from 'react';
import NewTransactionbutton from '../NewTransactionButton/index';
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Header() {
    return (
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
                    <NewTransactionbutton />
                </div>
            </div>
        </header>
    )
}