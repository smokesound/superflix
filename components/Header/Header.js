import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="navbar  bg-black">
      <div className="container-fluid">
        <Link href="/">
          <a href="/" className={`px-4 ${styles.textnav}`}>
            SUPERFLIX
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
