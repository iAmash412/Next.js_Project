import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aafthab Ashraff | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          lorem ipsu morem ipsum lorem ipsu morem ipsumlorem ipsu morem
          ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem
          ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem
          ipsum
        </p>
        <p className={styles.text}>
          lorem ipsu morem ipsum lorem ipsu morem ipsumlorem ipsu morem
          ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem
          ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem
          ipsum
        </p>
        <Link href="/portfolio">
          <a className={styles.btn}>See My Portfolio</a>
        </Link>
      </div>
    </>
  );
}
