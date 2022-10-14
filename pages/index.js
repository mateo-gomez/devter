import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>
          <a href="https://nextjs.org">Devter!</a>
        </h1>
      </Layout>

      <style jsx>{`
        nav {
          background-color: blue;
        }
      `}</style>
    </div>
  );
}
