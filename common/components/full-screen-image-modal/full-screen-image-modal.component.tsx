import classnames from "classnames";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import { Photo } from "@/common/types/api.types";
import { getAllPhotos, getPhotosWithCategory } from "@/common/api/get-photos";
import { useKeyDown } from "@/common/hooks/useKeyDown";

import styles from "./full-screen-image-modal.module.scss";

type Props = {
  images: Photo[];
  selectedCategory?: string;
  page?: number;
  imageId: string;
  onClose: () => void;
};

const ImageModal = ({
  onClose,
  images,
  page,
  imageId,
  selectedCategory,
}: Props) => {
  const [photos, setPhotos] = useState<Photo[]>(images);
  const [currentPage, setCurrentPage] = useState<number | undefined>(page);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | undefined>(
    photos.find(photo => photo.id === imageId)
  );
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    morePhotos();
  }, [selectedPhoto]);

  useKeyDown(e => {
    if (e.code === "ArrowRight") {
      nextImage();
    }

    if (e.code === "ArrowLeft") {
      previousImage();
    }

    if (e.code === "Escape") {
      onClose();
    }
  });

  const nextImage = () => {
    if (selectedPhoto) {
      const next = photos.find(
        (_, index) => index === photos.indexOf(selectedPhoto) + 1
      );

      if (photos.indexOf(selectedPhoto) === photos.length - 1) {
        setSelectedPhoto(photos[0]);
      }

      next && setSelectedPhoto(next);
    }
  };

  const previousImage = () => {
    if (selectedPhoto) {
      const previous = photos.find(
        (_, index) => index === photos.indexOf(selectedPhoto) - 1
      );

      if (selectedPhoto === photos[0]) {
        setSelectedPhoto(photos[photos.length - 1]);
      }

      previous && setSelectedPhoto(previous);
    }
  };

  const morePhotos = async () => {
    if (
      selectedPhoto &&
      photos.indexOf(selectedPhoto) === photos.length - 2 &&
      hasMore
    ) {
      getPhotos();
    }
  };

  const getPhotos = async () => {
    if (currentPage) {
      const resp = selectedCategory
        ? await getPhotosWithCategory(selectedCategory, currentPage)
        : await getAllPhotos(currentPage);
      const newPhotos = [...photos, ...resp.items];

      setPhotos(newPhotos);
      setCurrentPage(resp.page);

      newPhotos.length === resp.total ? setHasMore(false) : setHasMore(true);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <button className={styles.closeBtn} onClick={onClose}>
          <Image
            src='/icons/close-white.svg'
            alt='close-button'
            width={25}
            height={25}
          />
        </button>
      </div>
      <div className={classnames(styles.content)}>
        <button
          onClick={previousImage}
          className={classnames(styles.nextPageBtn, styles.leftSide)}>
          <Image
            src='/icons/left-next-page.svg'
            alt='next-page-button'
            width={25}
            height={25}
          />
        </button>
        <div className={classnames(styles.imageWrapper)}>
          {selectedPhoto && (
            <img
              className={styles.image}
              src={selectedPhoto?.formats.full}
              alt='photo'
            />
          )}
        </div>
        <button
          onClick={nextImage}
          className={classnames(styles.nextPageBtn, styles.rightSide)}>
          <Image
            src='/icons/right-next-page.svg'
            alt='next-page-button'
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>,

    document.body
  );
};

export default ImageModal;
