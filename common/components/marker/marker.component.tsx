import styles from "./marker.module.scss";

type Props = {
  text: string;
};

const Marker = ({ text }: Props) => {
  return (
    <div>
      <span className={styles.mark}></span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Marker;
