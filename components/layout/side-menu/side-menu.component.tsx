import { lockScroll } from "@/common/helpers-function/lock-scroll";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "./side-menu.module.scss";

const navLinks = [
  { name: "Home", id: 2, path: "/" },
  { name: "Portfolio", id: 1, path: "/portfolio" },
  { name: "O mnie", id: 4, path: "/about-me" },
  // { name: "Oferta", id: 5, path: "/offer" },
  { name: "Kontakt", id: 3, path: "/contact" },
];

type Props = {
  isOpen: boolean;
  onCloseSideMenu: () => void;
};

const SideMenu = ({ isOpen, onCloseSideMenu }: Props) => {
  const router = useRouter();
  const pathName = router.pathname;

  useEffect(() => {
    lockScroll(isOpen);
  }, [isOpen]);

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles["wrapper--visible"]]: isOpen,
      })}>
      <div className={styles.btn}>
        <button className={styles.close} onClick={onCloseSideMenu}>
          <Image
            src='/icons/close.svg'
            alt='close-button'
            width={20}
            height={20}
          />
        </button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map(link => (
            <li key={link.id} onClick={onCloseSideMenu}>
              <Link
                className={classnames(styles.linkUnderline, {
                  [styles.active]: link.path === pathName,
                })}
                href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
