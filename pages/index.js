import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
