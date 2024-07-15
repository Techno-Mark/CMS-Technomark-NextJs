"use client";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`py-2 px-3 uppercase ${
        pathname === item.path &&
        `bg-gradient-to-r from-[#168944] to-[#40AA46] inline-block text-transparent bg-clip-text ${styles.active}`
      }`}
    >
      {item.name}
    </Link>
  );
};
export default MenuLink;
