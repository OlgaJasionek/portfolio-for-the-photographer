import styles from "./subtitle.module.scss";

type Props = {
  text: string;
};

const Subtitle = ({ text }: Props) => {
  return (
    <div>
      <span className={styles.mark}></span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Subtitle;
