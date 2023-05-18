import AboutMeComponent from "@/components/about-me/about-me.component";
import Head from "next/head";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>O mnie - Fotograf Natalia Jasionek</title>
        <meta
          name='description'
          content='Fotograf Białystok i okolice, Fotografia portretowa, sesje rodzinne, sesje plenerowe, fotografia okolicznościowa, fotografia produktowa, usługi fotograficzne'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutMeComponent />
    </>
  );
};

export default AboutMe;
