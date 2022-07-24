import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        lorem ipsu morem ipsum lorem ipsu morem ipsumlorem ipsu morem ipsumlorem
        ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu
        morem ipsumlorem ipsu morem ipsumlorem ipsu morem ipsum
      </p>
      <p>
        lorem ipsu morem ipsum lorem ipsu morem ipsumlorem ipsu morem ipsumlorem
        ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu morem ipsumlorem ipsu
        morem ipsumlorem ipsu morem ipsumlorem ipsu morem ipsum
      </p>
      <Link href="/portflio">
        <a>See My Portflio</a>
      </Link>
    </div>
  );
}
