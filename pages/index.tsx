import Head from "next/head";

import HomeComponent from "../components/home/home.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fotograf Natalia Jasionek</title>
        <meta
          name='description'
          content='Fotograf Białystok i okolice, Fotografia portretowa, sesje rodzinne, sesje plenerowe, fotografia okolicznościowa, fotografia produktowa,,  usługi fotograficzne'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeComponent />
    </>
  );
}
