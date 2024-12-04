import Link from "next/link";
import logo from "assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <img src={logo.src} alt="logo" />
      <nav>
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
