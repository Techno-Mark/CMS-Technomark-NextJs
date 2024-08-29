"use client";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.link}
      className={`py-2 px-5 uppercase ${
        pathname === item.link &&
        `bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-variant-one)] inline-block text-transparent bg-clip-text ${styles.active}`
      }`}
    >
      {item.name}
    </Link>
  );
};
export default MenuLink;
