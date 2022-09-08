import Head from 'next/head';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';
import { getPopularVideos, getVideos } from '../lib/videos';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos('travel');

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' />
        <link rel='icon' href='/nficon2016.ico' />
      </Head>

      <div className={styles.main}>
        <Banner
          title='Clifford the red dog'
          subTitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />
        <Navbar username='ankita@ank.com' />
        <div className={styles.cardListWrapper}>
          <CardList title='Disney' videos={disneyVideos} size='large' />
          <CardList title='Travel' videos={travelVideos} size='small' />
          <CardList
            title='Productivity'
            videos={productivityVideos}
            size='medium'
          />
          <CardList title='Popular' videos={popularVideos} size='small' />
        </div>
      </div>
    </div>
  );
}
