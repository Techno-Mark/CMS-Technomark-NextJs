import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const [isTechnologiesSubMenuOpen, setIsTechnologiesSubMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noscroll);
    } else {
      document.body.classList.remove(styles.noscroll);
    }
  }, [isMenuOpen]);

  const menuItems = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        {
          name: "Product engineering",
          path: "/productengineering",
          icons: "/images/product.svg",
        },
        {
          name: "Testing & Automation",
          path: "/testing",
          icons: "/images/testing.svg",
        },
        {
          name: "AI & ML Development",
          path: "/aiml",
          icons: "/images/aiml.svg",
        },
        {
          name: "Software development",
          path: "/swift",
          icons: "/images/swift.svg",
        },
        {
          name: "Software development",
          path: "/Software development",
          icons: "/images/Software.svg",
        },
        {
          name: "Consultation",
          path: "/Consultation",
          icons: "/images/Consultation.svg",
        },
        {
          name: "Blockchain",
          path: "/Blockchain",
          icons: "/images/Blockchain.svg",
        },
        {
          name: "Mobile Apps",
          path: "/Mobile Apps",
          icons: "/images/Mobileapp.svg",
        },
        {
          name: "Digital transformation",
          path: "/Digital transformation",
          icons: "/images/digital.svg",
        },
        {
          name: "UI & UX Design",
          path: "/uiux",
          icons: "/images/uiux.svg",
        },
        {
          name: "Cloud engineering & Devops",
          path: "/cloud",
          icons: "/images/cloud.svg",
        },
        {
          name: "migration & modernization",
          path: "/migration",
          icons: "/images/migration.svg",
        },
        // Add more technology items as needed
      ],
    },
    {
      name: "Start-up Services",
      path: "/start_up_services",
    },
    {
      name: "Case Studies",
      path: "/casestudylist",
    },
    {
      name: "Technologies",
      path: "/technology",
      submenu: [
        {
          name: "Android",
          path: "/android",
          icons: "/images/android.svg",
        },
        {
          name: "iOS",
          path: "/ios",
          icons: "/images/ios.svg",
        },
        {
          name: "Kotlin",
          path: "/kotlin",
          icons: "/images/kotlin.svg",
        },
        {
          name: "Swift",
          path: "/swift",
          icons: "/images/swift.svg",
        },
        {
          name: "React native",
          path: "/reactnative",
          icons: "/images/reactnative.svg",
        },
        {
          name: "flutter",
          path: "/flutter",
          icons: "/images/flutter.svg",
        },
        {
          name: "react",
          path: "/react",
          icons: "/images/react.svg",
        },
        {
          name: "next js",
          path: "/nextjs",
          icons: "/images/nextjs.svg",
        },
        {
          name: "angular",
          path: "/angular",
          icons: "/images/angular.svg",
        },
        {
          name: "js",
          path: "/js",
          icons: "/images/js.svg",
        },
        {
          name: "jquery",
          path: "/jquery",
          icons: "/images/jquery.svg",
        },
        {
          name: "html5",
          path: "/html",
          icons: "/images/html5.svg",
        },
        {
          name: "nodejs",
          path: "/nodejs",
          icons: "/images/nodejs.svg",
        },
        {
          name: "php",
          path: "/php",
          icons: "/images/php.svg",
        },
        {
          name: "python",
          path: "/python",
          icons: "/images/python.svg",
        },
        {
          name: ".net",
          path: "/dotnet",
          icons: "/images/dotnet.svg",
        },
        {
          name: "laravel",
          path: "/laravel",
          icons: "/images/laravel.svg",
        },
        {
          name: "rubyonrails",
          path: "/rubyonrails",
          icons: "/images/rubyonrails.svg",
        }
        // Add more technology items as needed
      ],
    },
    {
      name: "Contact Us",
      path: "/contact_us",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesSubMenu = () => {
    setIsServicesSubMenuOpen(!isServicesSubMenuOpen);
    if (isTechnologiesSubMenuOpen) {
      setIsTechnologiesSubMenuOpen(false);
    }
  };

  const toggleTechnologiesSubMenu = () => {
    setIsTechnologiesSubMenuOpen(!isTechnologiesSubMenuOpen);
    if (isServicesSubMenuOpen) {
      setIsServicesSubMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.headerContainer} ${isMenuOpen ? styles.responsiveheader : ""}`}>
      <nav className={`${styles.navigationbar} bg-white`}>
        <div className={`${styles.navcontainer} flex flex-wrap justify-between items-center mx-auto`}>
          <div className={`${styles.logocontainer}`}>
            <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse px-12">
              <Image src="/images/logo.svg" className="h-10" alt="Logo" width={232} height={37} />
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className={` ${styles.togglebtn} inline-flex items-center w-10 mr-5 justify-center text-sm rounded-lg md:hidden`}
            aria-controls="mega-menu-full"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M8.5 25.5L25.4999 8.50011" stroke="#1D3557" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.4999 25.4999L8.5 8.5" stroke="#1D3557" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M4.25 9.91797H29.75" stroke="#1D3557" strokeWidth="2.125" strokeLinecap="round" />
                <path d="M4.25 17H29.75" stroke="#1D3557" strokeWidth="2.125" strokeLinecap="round" />
                <path d="M4.25 24.082H29.75" stroke="#1D3557" strokeWidth="2.125" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <div id="mega-menu-full" className={`${styles.megamenufull} items-center justify-between font-medium ${isMenuOpen ? "flex" : "hidden"} w-full h-full md:flex md:w-auto pr-16`}>
            <ul className="flex flex-col items-center h-full p-4 md:p-0 mt-4 md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 text-black font-semibold">
              {menuItems.map((menu) => (
                <li className={`${styles.navlink} h-full flex items-center ${(menu.name === "Technologies" && isTechnologiesSubMenuOpen && isMenuOpen) || (menu.name === "Services" && isServicesSubMenuOpen && isMenuOpen) ? styles.active: ""}`} key={menu.name}>
                  <div onClick={menu.submenu ? (menu.name === "Technologies" ? toggleTechnologiesSubMenu : toggleServicesSubMenu) : undefined} className={`${styles.cursorpointer} cursor-pointer`}>
                    <MenuLink item={menu} key={menu.name} />
                    {menu.submenu && (
                      <ul
                        className={`${styles.submenu} ${
                          (menu.name === "Technologies" && isTechnologiesSubMenuOpen) ||
                          (menu.name === "Services" && isServicesSubMenuOpen)
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        {menu.submenu.map((submenu) => (
                          <li
                            key={submenu.name}
                            className={`${styles.submenulink} p-2 ${
                              menu.name === "Services" ? "md:w-1/3" : "md:w-1/4"
                            }`}
                          >
                            <Link href={submenu.path}>
                              <img src={submenu.icons} alt={submenu.name} className="inline-block mr-2" />
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
          <div className={`${styles.headersideimg} px-7 h-full flex items-center`}>
            <div className={`${styles.themebtn} flex justify-center h-full`}>
              <img src="/images/coffee.svg" alt="" />
            </div>
            <Link href="#" className={styles.projectbtn}>
              Start a project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
