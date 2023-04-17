import PortfolioComponent from "@/components/portfolio/portfolio.component";
import axios from "axios";

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
      <PortfolioComponent categories={categories} images={images} />
    </>
  );
};

export default Portfolio;
