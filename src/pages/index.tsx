import Head from 'next/head'
import Header from '../components/Header';
import Summary from '../components/Summary'
import TableTransactions from '../components/TableTransactions';
import { TransactionProvider } from '../hooks/useTransaction';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Desafio Financeiro</title>
      </Head>

      <TransactionProvider>
        <Header />
        <div className='container'>
          <Summary />
          <TableTransactions />
        </div>
      </TransactionProvider>
    </>
  );
}
