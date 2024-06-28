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
      path: "/case_studies",
    },
    {
      name: "Contact Us",
      path: "/contact_us",
    },
  ];
  return (
    <header className={styles.headerContainer}>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/images/logo.svg" className="h-10" alt="Logo" width={165} height={30}/>
          </Link>
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
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto"
          >
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-black font-semibold">
              {menuItems.map((menu) => (
                <li className="relative" key={menu.name}>
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
          <div className="p-3">
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0052 19.185C31.7693 21.7383 30.811 24.1716 29.2426 26.2002C27.6742 28.2288 25.5605 29.7687 23.1488 30.6398C20.7371 31.5109 18.1272 31.6772 15.6245 31.1191C13.1218 30.5611 10.8297 29.3018 9.01656 27.4887C7.20341 25.6755 5.94413 23.3835 5.38608 20.8807C4.82804 18.378 4.9943 15.7681 5.86541 13.3564C6.73653 10.9448 8.27647 8.83105 10.305 7.26263C12.3336 5.69421 14.7669 4.73596 17.3202 4.5C15.8253 6.5224 15.106 9.01417 15.293 11.5221C15.48 14.0301 16.561 16.3876 18.3393 18.1659C20.1176 19.9442 22.4752 21.0252 24.9831 21.2122C27.4911 21.3992 29.9828 20.6799 32.0052 19.185Z"
                stroke="#1D3557"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
