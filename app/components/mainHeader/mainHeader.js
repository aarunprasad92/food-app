'use client';

import Link from "next/link";
import logo from "assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logo} alt="logo" priority/>
            Next level Food
        </Link>
      
      <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined }>
                  Browse Meals
                </Link>
            </li>
            <li>
                <Link href="/community" className={path === '/community' ? classes.active : undefined }>
                  Foodies Community
                </Link>
            </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
