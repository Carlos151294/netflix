import Head from 'next/head';
import Banner from '../components/Banner';
import Card from '../components/Card';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: "/static/clifford.webp",
    },
    {
      imgUrl: "/static/clifford.webp",
    },
    {
      imgUrl: "/static/clifford.webp",
    },
  ];

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
      <Navbar username="ankita@ank.com" />
      <div className={styles.cardListWrapper}>
        <CardList title="Disney" videos={disneyVideos} size='large' />
        <CardList title="My List" videos={disneyVideos} size='medium' />
        <CardList title="My List" videos={disneyVideos} size='small' />
      </div>
    </div>
  );
}
