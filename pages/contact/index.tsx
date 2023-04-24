import ContactComponent from "@/components/contact/contact.component";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt - Fotograf Natalia Jasionek</title>
        <meta
          name='description'
          content='Fotograf Białystok i okolice, Fotografia portretowa, sesje rodzinne, sesje plenerowe, fotografia okolicznościowa, fotografia produktowa,,  usługi fotograficzne'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactComponent />
    </>
  );
};

export default Contact;
