import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import cls from 'classnames';
import styles from './card.module.css';

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80';

const classMap = {
  large: styles.lgItem,
  medium: styles.mdItem,
  small: styles.smItem,
};

const Card = ({ imgUrl = PLACEHOLDER, size = 'medium', index }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    setImgSrc(PLACEHOLDER);
  };

  const scale = index === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={imgSrc}
          alt='image'
          layout='fill'
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;
