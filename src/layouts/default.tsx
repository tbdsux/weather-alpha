import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '../components/header';

type DefaultLayoutProps = {
  title?: string;
  children: ReactNode;
};
const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}Weather Alpha</title>
      </Head>

      <main className="py-20">
        <Header />

        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
