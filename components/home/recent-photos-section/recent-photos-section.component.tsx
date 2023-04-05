import classnames from "classnames";
import { useState } from "react";
import Image from "next/image";

import Marker from "@/common/components/marker/marker.component";
import Button from "@/common/components/button/button.component";

import styles from "./recent-photos-section.module.scss";

const filters = [
  { title: "Wszystko" },
  { title: "Portrety" },
  { title: "Zdjęcia z drona" },
  { title: "Sesje plenerowe" },
  { title: "Natura" },
];

const photos = [
  { id: 1, imgUrl: "/img/karo.jpg" },
  { id: 2, imgUrl: "/img/olga.jpg" },
  { id: 3, imgUrl: "/img/remek.jpg" },
  { id: 4, imgUrl: "/img/oliwia.jpg" },
  { id: 5, imgUrl: "/img/oliwia.jpg" },
  { id: 6, imgUrl: "/img/oliwia.jpg" },
];

const RecentPhotosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystko");

  return (
    <div>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.marker}>
                <Marker text='PORTFOLIO' />
              </div>
              <h2 className={classnames("title", "text-center")}>
                NAJNOWSZE ZDJĘCIA
              </h2>
              <nav>
                <ul className={styles.categories}>
                  {filters.map(filter => (
                    <li
                      onClick={() => setSelectedCategory(filter.title)}
                      className={classnames(styles.item, {
                        [styles.active]: filter.title === selectedCategory,
                      })}
                      key={filter.title}>
                      {filter.title}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={styles.photos}>
              {photos.map(photo => (
                <div className={styles.photoWrapper} key={photo.id}>
                  <div
                    style={{
                      backgroundImage: `url('${photo.imgUrl}')`,
                    }}
                    className={styles.photo}></div>
                </div>
              ))}
            </div>
            <div className={styles.btn}>
              <Button theme='contained' onClick={() => {}}>
                ZOBACZ MOJE PORTFOLIO{" "}
                <img
                  className={styles.arrowIcon}
                  src='/icons/arrow.svg'
                  alt='arrow icon'
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPhotosSection;
