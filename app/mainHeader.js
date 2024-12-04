import Link from "next/link";
import logo from "assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logo} alt="logo" priority/>
            Next level Food
        </Link>
      
      <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals">Meals</Link>
            </li>
            <li>
                <Link href="/meals/share">Share Meal</Link>
            </li>
            <li>
                <Link href="/community">Community</Link>
            </li>
        </ul>
      </nav>

    </header>
  );
}
