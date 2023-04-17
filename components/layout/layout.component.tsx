import { ReactNode, useState } from "react";

import Footer from "./footer/footer.component";
import Header from "./header/header.component";
import SideMenu from "./side-menu/side-menu.component";

import styles from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openSideMenuHandler = () => {
    setOpenSideMenu(true);
  };

  const closeSideMenuHandler = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={styles.wrapper}>
      <SideMenu isOpen={openSideMenu} onCloseSideMenu={closeSideMenuHandler} />
      <Header onOpenSideMenu={openSideMenuHandler} />
      <div className={styles.main}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
