import Link from "next/link";
import styles from "./header.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";
const Header = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Services",
      path: "/services",
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
    },
    {
      name: "Contact Us",
      path: "/contact_us",
    },
  ];
  return (
    <header className={styles.headerContainer}>
      <nav className={`${styles.navigationbar} bg-white`}>
        <div className={`${styles.navcontainer} flex flex-wrap justify-between items-center mx-auto`}>
          <div className={`${styles.logocontainer}`}>
            <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse px-12">
              <Image src="/images/logo.svg" className="h-10" alt="Logo" width={232} height={37} />
            </Link>
          </div>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div id="mega-menu-full" className={`${styles.megamenufull} items-center justify-between font-medium hidden w-full h-full md:flex md:w-auto pr-16`}>
            <ul className="flex flex-col items-center h-full p-4 md:p-0 mt-4 md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 text-black font-semibold">
              {menuItems.map((menu) => (
                <li className={`${styles.navlink} relative h-full flex items-center`} key={menu.name}>
                  <MenuLink item={menu} key={menu.name} />
                </li>
              ))}
              {/* <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  //   data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between py-2 px-3"
                >
                  Company{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li> */}
            </ul>
          </div>
          <div className={`${styles.headersideimg} px-7 h-full flex items-center`}>
            <img src="/images/coffee.svg" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
