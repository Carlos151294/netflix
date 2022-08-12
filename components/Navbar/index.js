import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './navbar.module.css';

export default ({ username }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const handleMyListClick = (e) => {
    e.preventDefault();
    router.push('/browse/my-list');
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src='/static/netflix.svg'
              width={128}
              height={34}
              alt='Netflix logo'
            />
          </div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleHomeClick}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleMyListClick}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={toggleDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src='/static/expand_more.svg'
                width={25}
                height={25}
                alt='expand dropdown'
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href='/login'>
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
