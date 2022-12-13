import Main from 'components/Main';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stripe property</title>
        <meta name='description' content='Stripe property group' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
    </>
  );
}
