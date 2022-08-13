import Head from 'next/head';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';
import { getVideos } from '../lib/videos';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const disneyVideos = await getVideos();

  return { props: { disneyVideos } };
}

export default function Home({ disneyVideos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' />
        <link rel='icon' href='/nficon2016.ico' />
      </Head>

      <Banner
        title='Clifford the red dog'
        subTitle='a very cute dog'
        imgUrl='/static/clifford.webp'
      />
      <Navbar username='ankita@ank.com' />
      <div className={styles.cardListWrapper}>
        <CardList title='Disney' videos={disneyVideos} size='large' />
        <CardList title='My List' videos={disneyVideos} size='medium' />
        <CardList title='My List' videos={disneyVideos} size='small' />
      </div>
    </div>
  );
}
