import Link from "next/link";
import logo from "assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";

export default function MainHeader() {
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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
