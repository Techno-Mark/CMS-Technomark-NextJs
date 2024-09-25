import React, { useEffect, useState } from "react";
import Close from "@/assets/icon/close";
import Hamburger from "@/assets/icon/hamburger";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import MenuLink from "./menuLink/MenuLink";

interface SubmenuItem {
  name: string;
  link: string;
  logo: string;
}

interface MenuItem {
  name: string;
  link: string;
  children?: SubmenuItem[];
}

interface HeaderProps {
  onShowDrawer: () => void;
  headerData: Array<MenuItem>;
}

const Header: React.FC<HeaderProps> = ({ onShowDrawer, headerData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const [isTechnologiesSubMenuOpen, setIsTechnologiesSubMenuOpen] =
    useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles.noscroll, isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSubMenu = (menuType: string) => {
    if (menuType === "services") {
      setIsServicesSubMenuOpen((prev) => !prev);
      if (isTechnologiesSubMenuOpen) setIsTechnologiesSubMenuOpen(false);
    } else if (menuType === "technologies") {
      setIsTechnologiesSubMenuOpen((prev) => !prev);
      if (isServicesSubMenuOpen) setIsServicesSubMenuOpen(false);
    }
  };

  return (
    <header
      className={`${styles.headerContainer} ${
        isSticky ? styles.stickyHeader : ""
      } ${isMenuOpen ? styles.responsiveheader : ""}`}
    >
      <nav className={`${styles.navigationbar} bg-white`}>
        <div
          className={`${styles.navcontainer} flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto`}
        >
          <div className={styles.logocontainer}>
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse px-6 lg:px-14"
            >
              <Image
                src="/images/logo.svg"
                className="h-10"
                alt="Logo"
                width={232}
                height={40}
                loading="lazy"
              />
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className={` ${styles.togglebtn} items-center w-10 mr-5 justify-center text-sm rounded-lg`}
            aria-controls="mega-menu-full"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <Close className="closeicon" color="#1D3557" />
            ) : (
              <Hamburger className="hamburgericon" color="#1D3557" />
            )}
          </button>
          <div
            id="mega-menu-full"
            className={`${
              styles.megamenufull
            } items-center justify-between font-medium ${
              isMenuOpen ? "flex" : styles.headerRemoveResponsive
            } w-full h-full lg:flex md:w-auto`}
          >
            <ul
              className={`${styles.megamenuul} flex flex-col items-center h-full p-4 md:p-0 md:space-x-5 rtl:space-x-reverse md:flex-row text-black font-semibold`}
            >
              {headerData?.map((menu) => (
                <li
                  className={`${styles.navlink} h-full flex items-center ${
                    ((menu.name === "Technologies" &&
                      isTechnologiesSubMenuOpen) ||
                      (menu.name === "Services" && isServicesSubMenuOpen)) &&
                    isMenuOpen
                      ? styles.active
                      : ""
                  }`}
                  key={menu.name}
                >
                  <div
                    onClick={
                      menu.children && menu.children.length
                        ? () => toggleSubMenu(menu.name.toLowerCase())
                        : () => closeMenu() // Close the menu if no children
                    }
                    className={styles.cursorpointer}
                  >
                    <MenuLink
                      item={menu}
                      key={menu.name}
                      toggleMenu={menu.children ? undefined : closeMenu}
                    />
                    {menu.children && menu.children.length > 0 && (
                      <ul
                        className={`${styles.submenu} ${
                          (menu.name === "Technologies" &&
                            isTechnologiesSubMenuOpen) ||
                          (menu.name === "Services" && isServicesSubMenuOpen)
                            ? "customblock"
                            : styles.defaultsubmenu
                        }`}
                      >
                        {menu.children.map((submenu) => (
                          <li
                            key={submenu.name}
                            className={`${styles.submenulink} p-2 ${
                              menu.name === "Services" ? "md:w-1/3" : "md:w-1/4"
                            } flex items-center gap-x-3 rounded`}
                          >
                            <Link
                              href={submenu.link}
                              className="md:whitespace-nowrap flex items-center"
                              onClick={closeMenu} // Close the menu when the submenu link is clicked
                            >
                              <Image
                                src={submenu.logo!}
                                alt={submenu.name}
                                width={48}
                                height={48}
                                className="inline-block mr-2"
                              />
                              <span>{submenu.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.headersideimg} px-5 h-full flex items-center`}
          >
            <div className={`${styles.themebtn} flex justify-center h-full`}>
              <Image src="/images/coffee.svg" alt="" width={90} height={90} />
            </div>
            <div className={styles.projectbtn}>
              <button onClick={onShowDrawer}>START A PROJECT</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
