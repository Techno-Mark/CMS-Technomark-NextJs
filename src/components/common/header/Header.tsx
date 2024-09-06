import Close from "@/assets/icon/close";
import Hamburger from "@/assets/icon/hamburger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleSubMenu = (menuType: string) => {
    if (menuType === "services") {
      setIsServicesSubMenuOpen((prev) => !prev);
      if (isTechnologiesSubMenuOpen) setIsTechnologiesSubMenuOpen(false);
    } else if (menuType === "technologies") {
      setIsTechnologiesSubMenuOpen((prev) => !prev);
      if (isServicesSubMenuOpen) setIsServicesSubMenuOpen(false);
    }
  };

  // const menuItems: any[] = [
  //   {
  //     name: "Home",
  //     path: "/home",
  //   },
  //   {
  //     name: "Services",
  //     path: "/productengineering",
  //     submenu: [
  //       {
  //         name: "Product engineering",
  //         path: "/productengineering",
  //         icons: "/images/product.svg",
  //       },
  //       {
  //         name: "Testing & Automation",
  //         path: "/testingautomation",
  //         icons: "/images/testing.svg",
  //       },
  //       {
  //         name: "AI & ML Development",
  //         path: "/aiml",
  //         icons: "/images/aiml.svg",
  //       },
  //       {
  //         name: "Software development",
  //         path: "/softwaredevelopment",
  //         icons: "/images/software.svg",
  //       },
  //       {
  //         name: "Consultation",
  //         path: "/consultation",
  //         icons: "/images/consultation.svg",
  //       },
  //       {
  //         name: "Blockchain",
  //         path: "/blockchain",
  //         icons: "/images/blockchain.svg",
  //       },
  //       {
  //         name: "Mobile Apps",
  //         path: "/mobileapps",
  //         icons: "/images/mobileapp.svg",
  //       },
  //       {
  //         name: "Digital transformation",
  //         path: "/digitaltransformation",
  //         icons: "/images/digital.svg",
  //       },
  //       { name: "iop app", path: "/iotservice", icons: "/images/iot.svg" },
  //       { name: "UI & UX Design", path: "/uiux", icons: "/images/uiux.svg" },
  //       {
  //         name: "Cloud engineering & Devops",
  //         path: "/cloudengineering",
  //         icons: "/images/cloud.svg",
  //       },
  //       // {
  //       //   name: "migration & modernization",
  //       //   path: "/migrationmodernization",
  //       //   icons: "/images/migration.svg",
  //       // },
  //     ],
  //   },
  //   {
  //     name: "Start-up Services",
  //     path: "/start-up-services",
  //   },
  //   {
  //     name: "Case Studies",
  //     path: "/casestudylist",
  //   },
  //   {
  //     name: "Blogs",
  //     path: "/blogs/list",
  //   },
  //   // {
  //   //   name: "Technologies",
  //   //   path: "/technology",
  //   //   submenu: [
  //   //     { name: "Android", path: "/android", icons: "/images/android.svg" },
  //   //     { name: "iOS", path: "/ios", icons: "/images/ios.svg" },
  //   //     { name: "Kotlin", path: "/kotlin", icons: "/images/kotlin.svg" },
  //   //     { name: "Swift", path: "/swift", icons: "/images/swift.svg" },
  //   //     {
  //   //       name: "React native",
  //   //       path: "/reactnative",
  //   //       icons: "/images/reactnative.svg",
  //   //     },
  //   //     { name: "flutter", path: "/flutter", icons: "/images/flutter.svg" },
  //   //     { name: "react", path: "/react", icons: "/images/react.svg" },
  //   //     { name: "next js", path: "/nextjs", icons: "/images/nextjs.svg" },
  //   //     { name: "angular", path: "/angular", icons: "/images/angular.svg" },
  //   //     { name: "js", path: "/js", icons: "/images/js.svg" },
  //   //     { name: "jquery", path: "/jquery", icons: "/images/jquery.svg" },
  //   //     { name: "html5", path: "/html", icons: "/images/html5.svg" },
  //   //     { name: "nodejs", path: "/nodejs", icons: "/images/nodejs.svg" },
  //   //     { name: "php", path: "/php", icons: "/images/php.svg" },
  //   //     { name: "python", path: "/python", icons: "/images/python.svg" },
  //   //     { name: ".net", path: "/dotnet", icons: "/images/dotnet.svg" },
  //   //     { name: "laravel", path: "/laravel", icons: "/images/laravel.svg" },
  //   //     {
  //   //       name: "rubyonrails",
  //   //       path: "/rubyonrails",
  //   //       icons: "/images/rubyonrails.svg",
  //   //     },
  //   //   ],
  //   // },
  //   {
  //     name: "Contact Us",
  //     path: "/contact-us",
  //   },
  // ];

  return (
    <header
      className={`${styles.headerContainer} ${
        isSticky ? styles.stickyHeader : ""
      } ${isMenuOpen ? styles.responsiveheader : ""}`}
    >
      <nav className={`${styles.navigationbar} bg-white`}>
        <div
          className={`${styles.navcontainer} flex flex-wrap justify-between items-center mx-auto`}
        >
          <div className={styles.logocontainer}>
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse px-14"
            >
              <Image
                src="/images/logo.svg"
                className="h-10"
                alt="Logo"
                width={232}
                height={37}
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
              isMenuOpen ? "flex" : "hidden"
            } w-full h-full lg:flex md:w-auto`}
          >
            <ul
              className={`${styles.megamenuul} flex flex-col items-center h-full p-4 md:p-0 mt-4 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 text-black font-semibold`}
            >
              {headerData?.map((menu) => (
                <li
                  className={`${styles.navlink} h-full flex items-center ${
                    (menu.name === "Technologies" &&
                      isTechnologiesSubMenuOpen &&
                      isMenuOpen) ||
                    (menu.name === "Services" &&
                      isServicesSubMenuOpen &&
                      isMenuOpen)
                      ? styles.active
                      : ""
                  }`}
                  key={menu.name}
                >
                  <div
                    onClick={
                      menu.children && menu.children.length
                        ? () => toggleSubMenu(menu.name.toLowerCase())
                        : undefined
                    }
                    className={styles.cursorpointer}
                  >
                    <MenuLink item={menu} key={menu.name} />
                    {menu.children && menu.children.length > 0 && (
                      <ul
                        className={`${styles.submenu} ${
                          (menu.name === "Technologies" &&
                            isTechnologiesSubMenuOpen) ||
                          (menu.name === "Services" && isServicesSubMenuOpen)
                            ? "customblock"
                            : "hidden"
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
                              className="whitespace-nowrap"
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
              {/* <img src="/images/coffee.svg" alt="" /> */}
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
