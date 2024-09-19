"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menulink.module.css";
interface MenuLinkProps {
  item: { name: string; link: string; children?: any };
  toggleMenu?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item, toggleMenu }) => {
  const pathname = usePathname();
  const isActive =
    pathname === item.link ||
    (item?.children.length > 0 &&
      item?.children.map((i: any) => i.link === pathname).includes(true));
  return (
    <Link
      href={item.link}
      className={`py-2 px-5 uppercase ${
        isActive &&
        `bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-variant-one)] inline-block text-transparent bg-clip-text ${styles.active}`
      }`}
      onClick={toggleMenu}
    >
      {item.name}
    </Link>
  );
};

export default MenuLink;
