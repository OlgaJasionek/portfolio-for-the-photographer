import classnames from "classnames";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { getAllPhotos, getPhotosWithCategory } from "@/common/api/get-photos";
import ImageModal from "@/common/components/full-screen-image-modal/full-screen-image-modal.component";
import { lockScroll } from "@/common/helpers-function/lock-scroll";
import { useIsMount } from "@/common/hooks/useIsMount";
import { Category, Photo } from "@/common/types/api.types";

import styles from "./portfolio.module.scss";

type Props = {
  categories: Category[];
  images: {
    total: number;
    items: Photo[];
    page: number;
    perPage: number;
  };
};

const PortfolioComponent = ({ categories: initCategories, images }: Props) => {
  const [categories] = useState<Category[]>([
    { name: "Wszystkie" },
    ...initCategories,
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");

  const [page, setPage] = useState<number>(images.page);
  const [photos, setPhotos] = useState<Photo[]>(images.items);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [openImageFullScreenModal, setOpenImageFullScreenModal] =
    useState<boolean>(false);

  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      getPhotos();
    }
  }, [selectedCategory]);

  useEffect(() => {
    lockScroll(openImageFullScreenModal);
  }),
    [openImageFullScreenModal];

  const closeImageFullScreenModalHandler = () => {
    setOpenImageFullScreenModal(false);
  };

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
    setHasMore(true);
    setPage(0);
  };

  const getPhotos = async (scroll?: boolean) => {
    const resp =
      selectedCategory && selectedCategory !== "Wszystkie"
        ? await getPhotosWithCategory(selectedCategory, page)
        : await getAllPhotos(page);

    const newPhotos = scroll ? [...photos, ...resp.items] : resp.items;
    setPhotos(newPhotos);
    setPage(resp.page);
    newPhotos.length === resp.total ? setHasMore(false) : setHasMore(true);
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
                  onClick={() => changeCategory(filter.name)}
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
              getPhotos(true);
            }}
            dataLength={photos.length}
            hasMore={hasMore}
            loader={<p className={styles.scrollLoader}>Ładowanie...</p>}>
            <div className={styles.photos}>
              {photos.map(photo => (
                <div
                  onClick={() => {
                    setOpenImageFullScreenModal(true),
                      setSelectedPhotoId(photo.id);
                  }}
                  className={styles.photoWrapper}
                  key={photo.formats.md}>
                  <div
                    style={{
                      backgroundImage: `url('${photo.formats.md}')`,
                    }}
                    className={styles.photo}></div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
        {openImageFullScreenModal && (
          <ImageModal
            selectedCategory={selectedCategory}
            imageId={selectedPhotoId}
            page={page}
            images={photos}
            onClose={closeImageFullScreenModalHandler}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioComponent;
