import axios from "axios";
import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.scss";

type Category = {
  name: string;
};

type Photo = {
  url: string;
};

type Props = {
  categories: Category[];
  images: {
    total: number;
    items: Photo[];
    page: number;
  };
};

export const useIsMount = () => {
  const isMountRef = useRef(true);

  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const PortfolioComponent = ({ categories: initCategories, images }: Props) => {
  const [categories] = useState<Category[]>(initCategories);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystko");
  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      getPhotos();
    }
  }, [selectedCategory]);

  useEffect(() => {
    setPhotos(images.items);
  }, [images]);

  const getPhotos = async () => {
    const resp = await axios.get(
      "https://glorious-jade-whale.cyclic.app/api/images",
      {
        params: { category: selectedCategory },
      }
    );
    setPhotos(resp.data.items);
  };

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className='title'>PORTFOLIO</h2>
          <nav>
            <ul className={styles.categories}>
              {categories.map(filter => (
                <li
                  onClick={() => setSelectedCategory(filter.name)}
                  className={classnames(styles.item, {
                    [styles.active]: filter.name === selectedCategory,
                  })}
                  key={filter.name}>
                  {filter.name}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.photos}>
            {photos.map(photo => (
              <div className={styles.photoWrapper} key={photo.url}>
                <div
                  style={{
                    backgroundImage: `url('${photo.url}')`,
                  }}
                  className={styles.photo}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
