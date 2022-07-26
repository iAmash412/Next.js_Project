import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Aafthab Ashraff | Home</title>
      </Head>
      <div>
        <h1>Oooops.....</h1>
        <h2>The page was not found</h2>
        <p>
          Please return to{' '}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
