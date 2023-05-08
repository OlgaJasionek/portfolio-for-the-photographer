import classnames from "classnames";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import { Photo } from "@/common/types/api.types";
import { getAllPhotos, getPhotosWithCategory } from "@/common/api/get-photos";
import { useKeyDown } from "@/common/hooks/useKeyDown";

import styles from "./full-screen-image-modal.module.scss";
import IconButton from "../icon-button/icon-button.component";

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
      const resp =
        selectedCategory && selectedCategory !== "Wszystkie"
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
        <IconButton
          onClick={onClose}
          src='/icons/close-white.svg'
          alt='close-icon'
          width={20}
          height={20}
          padding='20px'
        />
      </div>
      <div className={classnames(styles.content)}>
        <div className={classnames(styles.nextPageBtn, styles.leftSide)}>
          <IconButton
            onClick={previousImage}
            src='/icons/left-next-page.svg'
            alt='next-page-button'
            width={25}
            height={25}
            padding='100px 0px'
          />
        </div>
        <div className={classnames(styles.imageWrapper)}>
          {selectedPhoto && (
            <motion.img
              className={styles.image}
              key={selectedPhoto?.id}
              src={selectedPhoto?.formats.full}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ bounce: 0, type: "spring", duration: 1 }}
            />
          )}
        </div>
        <div className={classnames(styles.nextPageBtn, styles.rightSide)}>
          <IconButton
            onClick={nextImage}
            src='/icons/right-next-page.svg'
            alt='next-page-button'
            width={25}
            height={25}
            padding='100px 0px'
          />
        </div>
      </div>
    </div>,

    document.body
  );
};

export default ImageModal;
