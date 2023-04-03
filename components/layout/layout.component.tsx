import { ReactNode } from "react";

import Footer from "./footer/footer.component";
import Header from "./header/header.component";

import styles from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
