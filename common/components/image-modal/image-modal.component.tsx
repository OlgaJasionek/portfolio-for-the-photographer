import classnames from "classnames";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Photo } from "@/common/types/api.types";
import { getAllPhotos, getPhotosWithCategory } from "@/common/api/get-photos";
import { useKeyDown } from "@/common/hooks/useKeyDown";

import styles from "./image-modal.module.scss";

type Props = {
  images: Photo[];
  selectedCategory: string;
  page: number;
  photo: Photo;
  onClose: () => void;
};

const ImageModal = ({
  onClose,
  images,
  page,
  photo,
  selectedCategory,
}: Props) => {
  const [photos, setPhotos] = useState<Photo[]>(images);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(photo);

  useEffect(() => {
    morePhotos();
  }, [selectedPhoto]);

  useKeyDown(
    e => {
      if (e.code === "ArrowRight") {
        nextImage();
        console.log("next");
      }

      if (e.code === "ArrowLeft") {
        previousImage();
        console.log("previous");
      }

      if (e.code === "Escape") {
        onClose();
      }
    },
    [selectedPhoto]
  );

  const nextImage = () => {
    const next = photos.find(
      (_, index) => index === photos.indexOf(selectedPhoto) + 1
    );
    next && setSelectedPhoto(next);
  };

  const previousImage = () => {
    const previous = photos.find(
      (_, index) => index === photos.indexOf(selectedPhoto) - 1
    );
    previous && setSelectedPhoto(previous);
  };

  const morePhotos = async () => {
    if (photos.indexOf(selectedPhoto) === photos.length - 2) {
      getPhotos();
    }
  };

  const getPhotos = async () => {
    const resp = selectedCategory
      ? await getPhotosWithCategory(selectedCategory, currentPage)
      : await getAllPhotos(currentPage);

    const newPhotos = [...photos, ...resp.items];

    setPhotos(newPhotos);
    setCurrentPage(resp.page);
  };

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src='/icons/close-white.svg' alt='close-button' />
        </button>
      </div>
      <div className={classnames(styles.content)}>
        <button
          onClick={previousImage}
          className={classnames(styles.nextPageBtn, styles.leftSide)}>
          <img src='/icons/left-next-page.svg' alt='next-page-button' />
        </button>
        <div className={classnames(styles.imageWrapper)}>
          <img
            className={styles.image}
            src={selectedPhoto?.formats.full}
            alt='photo'
          />
        </div>
        <button
          onClick={nextImage}
          className={classnames(styles.nextPageBtn, styles.rightSide)}>
          <img src='/icons/right-next-page.svg' alt='next-page-button' />
        </button>
      </div>
    </div>,

    document.body
  );
};

export default ImageModal;
