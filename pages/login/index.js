import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/Login.module.css';

export default function Login() {
  const router = useRouter();

  const handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Enter a valid email address';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // When email does not exist, navigate to dashboard
    try {
      router.push('/');
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
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
        <Formik
          initialValues={{ email: '' }}
          validate={handleValidation}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form className={styles.mainWrapper}>
              <h1 className={styles.signinHeader}>Sign In</h1>
              <Field
                className={styles.emailInput}
                placeholder='Email address'
                type='text'
                name='email'
              />
              <ErrorMessage
                className={styles.emailError}
                name='email'
                component='div'
              />
              <button
                className={styles.loginBtn}
                type='submit'
                disabled={props.isSubmitting}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
