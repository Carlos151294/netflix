import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Login.module.css';

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();

    console.log('Submitted');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Sign in</title>
        <link rel='icon' href='/nficon2016.ico' />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href='/'>
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src='/static/netflix.svg'
                  width={128}
                  height={34}
                  alt='Netflix logo'
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <form className={styles.mainWrapper} onSubmit={handleLogin}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            className={styles.emailInput}
            type='text'
            placeholder='Email address'
          />
          {/* <p className={styles.emailError}>Error</p> */}
          <button className={styles.loginBtn} type='submit'>
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
