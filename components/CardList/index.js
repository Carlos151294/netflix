import Card from '../Card';
import styles from './card-list.module.css';

export default ({ title, videos = [], size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index) => (
          <Card
            key={video.id}
            index={index}
            imgUrl={video.imgUrl}
            size={size}
          />
        ))}
      </div>
    </section>
  );
};
