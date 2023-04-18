import axios from "axios";
import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
    perPage: number;
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
  const [page, setPage] = useState<number>(images.page);
  const [photos, setPhotos] = useState<Photo[]>(images.items);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);
  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      getPhotos();
    }
  }, [selectedCategory]);

  useEffect(() => {
    setPhotos(images.items);
  }, [images]);

  const getPhotos = async (page?: number) => {
    const resp = selectedCategory
      ? await axios.get("https://glorious-jade-whale.cyclic.app/api/images", {
          params: {
            category: selectedCategory,
            page: page ? page + 1 : images.page,
          },
        })
      : await axios.get("https://glorious-jade-whale.cyclic.app/api/images", {
          params: {
            page: page ? page + 1 : images.page,
          },
        });
    page
      ? setPhotos(prev => [...prev, ...resp.data.items])
      : setPhotos(resp.data.items);
    page && setPage(resp.data.page);

    photos.length === resp.data.total && setHasMore(false);
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
          <InfiniteScroll
            next={() => {
              getPhotos(page);
            }}
            dataLength={photos.length}
            hasMore={hasMore}
            loader={<p className={styles.scrollLoader}>Ładowanie...</p>}>
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
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
