import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' />
        <link rel='icon' href='/nficon2016.ico' />
      </Head>

      {/* <h1>Netflix</h1> */}

      <Banner
        title='Clifford the red dog'
        subTitle='a very cute dog'
        imgUrl='/static/clifford.webp'
      />
      <Navbar username="ankita@ank.com" />
     {/* <Card /> */}
    </div>
  );
}
