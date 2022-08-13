import Image from 'next/image';
import { useState } from 'react';
import styles from './card.module.css';

const PLACEHOLDER = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80";

const classMap = {
  large: styles.lgItem,
  medium: styles.mdItem,
  small: styles.smItem,
};

const Card = ({ imgUrl = PLACEHOLDER, size = 'medium' }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    setImgSrc(PLACEHOLDER);
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt='image'
          layout='fill'
          className={styles.cardImg}
          onError={handleOnError}
        />
      </div>
    </div>
  );
};

export default Card;
