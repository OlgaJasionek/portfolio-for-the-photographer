import classnames from "classnames";
import { ReactNode } from "react";

import styles from "./button.module.scss";

type Props = {
  theme: "contained" | "outline";
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ theme, children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={classnames(styles.btn, styles[theme])}>
      <div className={styles.content}>{children}</div>
    </button>
  );
};

export default Button;
