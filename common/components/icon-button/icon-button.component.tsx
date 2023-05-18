import Image from "next/image";

import styles from "./icon-button.module.scss";

type Props = {
  onClick: () => void;
  src: string;
  alt: string;
  width: number;
  height: number;
  padding: string;
};

const IconButton = ({ onClick, src, alt, width, height, padding }: Props) => {
  return (
    <button
      className={styles.iconBtn}
      style={{
        padding: `${padding}`,
      }}
      onClick={onClick}>
      <Image
        className={styles.iconBtn}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </button>
  );
};
export default IconButton;
