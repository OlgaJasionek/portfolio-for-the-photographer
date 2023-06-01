import classnames from "classnames";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import Subtitle from "@/common/components/subtitle/subtitle.component";
import Button from "@/common/components/button/button.component";
import ImageModal from "@/common/components/full-screen-image-modal/full-screen-image-modal.component";

import styles from "./recent-photos-section.module.scss";

const images = [
  {
    id: "646d1a729dd61d58abc210c0",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684871787/_DSC8194-2_txzxok.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684871787/_DSC8194-2_txzxok.jpg",
    },
  },
  {
    id: "646d30f609371e072c779323",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684877533/_DSC1012_lvu8ab.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684877533/_DSC1012_lvu8ab.jpg",
    },
  },
  {
    id: "646d2d7b674af5c2e4e56853",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684876440/_DSC2374_i2qhnm.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684876440/_DSC2374_i2qhnm.jpg",
    },
  },
  {
    id: "646d2b8b674af5c2e4e5684e",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684876160/_DSC7848_ijngom.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684876160/_DSC7848_ijngom.jpg",
    },
  },
  {
    id: "646d31e509371e072c77932c",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684877757/JDR_1435_tocnec.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684877757/JDR_1435_tocnec.jpg",
    },
  },
  {
    id: "646d1a9c9dd61d58abc210c1",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/v1684871834/JDR_0908-Edit_gykqxv.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1684871834/JDR_0908-Edit_gykqxv.jpg",
    },
  },
];

const RecentPhotosSection = () => {
  const [selectedImageId, setSelectedImageId] = useState<string>("");
  const [openImageFullScreenModal, setOpenImageFullScreenModal] =
    useState<boolean>(false);

  const closeImageFullScreenModalHandler = () => {
    setOpenImageFullScreenModal(false);
  };

  return (
    <div>
      {openImageFullScreenModal && (
        <ImageModal
          imageId={selectedImageId}
          images={images}
          onClose={closeImageFullScreenModalHandler}
        />
      )}

      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.marker}>
                <Subtitle text='PORTFOLIO' />
              </div>
              <h2 className={classnames("title", "text-center")}>
                NAJNOWSZE ZDJĘCIA
              </h2>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { when: "beforeChildren", staggerChildren: 0.15 },
                },
                hidden: { opacity: 0, transition: { when: "afterChildren" } },
              }}
              className={styles.photos}>
              {images.map(image => (
                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  transition={{ duration: 1 }}
                  onClick={() => {
                    setOpenImageFullScreenModal(true);
                    setSelectedImageId(image.id);
                  }}
                  className={styles.photoWrapper}
                  key={image.id}>
                  <div
                    style={{
                      backgroundImage: `url('${image.formats.md}')`,
                    }}
                    className={styles.photo}></div>
                </motion.div>
              ))}
            </motion.div>
            <Link className={styles.btn} href='/portfolio'>
              <Button theme='contained'>
                ZOBACZ MOJE PORTFOLIO
                <Image
                  className={styles.arrowIcon}
                  src='/icons/arrow-white.svg'
                  alt='arrow icon'
                  height={20}
                  width={20}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPhotosSection;
