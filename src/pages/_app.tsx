import { AppProps } from 'next/app'
import '../styles/global.scss'
import Modal from 'react-modal';

function MyApp({ Component, pageProps }: AppProps) {
  Modal.setAppElement("#__next");
  
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
