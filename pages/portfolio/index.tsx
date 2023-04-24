import PortfolioComponent from "@/components/portfolio/portfolio.component";
import axios from "axios";
import Head from "next/head";

export async function getStaticProps() {
  const categories = await axios
    .get("https://glorious-jade-whale.cyclic.app/api/image-categories")
    .then(resp => resp.data);
  const images = await axios
    .get("https://glorious-jade-whale.cyclic.app/api/images")
    .then(resp => resp.data);

  return {
    props: {
      categories,
      images,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

const Portfolio = ({ images, categories }: any) => {
  return (
    <>
      <Head>
        <title>Portfolio - Fotograf Natalia Jasionek</title>
        <meta
          name='description'
          content='Fotograf Białystok i okolice, Fotografia portretowa, sesje rodzinne, sesje plenerowe, fotografia okolicznościowa, fotografia produktowa,,  usługi fotograficzne'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PortfolioComponent categories={categories} images={images} />
    </>
  );
};

export default Portfolio;
