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
    id: "643d230133e722dd704739c3",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728256/_DSC8194-2_ejlizd.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728256/_DSC8194-2_ejlizd.jpg",
    },
  },
  {
    id: "643d241c33e722dd704739c9",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728325/_DSC1011-2_khjhee.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728325/_DSC1011-2_khjhee.jpg",
    },
  },
  {
    id: "643d23a233e722dd704739c5",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728414/JDR_0944_mwhwxs.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728414/JDR_0944_mwhwxs.jpg",
    },
  },
  {
    id: "643d23d133e722dd704739c6",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728455/IMG_0011_app9iu.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728455/IMG_0011_app9iu.jpg",
    },
  },
  {
    id: "643d23ec33e722dd704739c7",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728486/karo_jy8lws.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728486/karo_jy8lws.jpg",
    },
  },
  {
    id: "643d241133e722dd704739c8",
    formats: {
      full: "https://res.cloudinary.com/dfhpug7jv/image/upload/q_auto:best/v1681728528/oliwia_yklct9.jpg",
      md: "https://res.cloudinary.com/dfhpug7jv/image/upload/t_Instagram%20feed/v1681728528/oliwia_yklct9.jpg",
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
              {images.map((image, index) => (
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
            <div className={styles.btn}>
              <Link href='/portfolio'>
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
    </div>
  );
};

export default RecentPhotosSection;
