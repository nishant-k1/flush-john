import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { SidebarContext } from "../../contexts/SidebarContext";
import { useRouter } from "next/router";
import Image from "next/image";

// import { Event } from "../lib/analytics";
import { Divide as Hamburger } from "hamburger-react";
import { QuickQuoteContext } from "../../contexts/QuickQuoteContext/index";

const Navbar = () => {
  const { active, setActive } = React.useContext(SidebarContext);
  const router = useRouter();

  const { quickQuoteViewStatus, setQuickQuoteViewStatus } =
    React.useContext(QuickQuoteContext);

  const [activeLink, setActiveLink] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      }
      if (window.pageYOffset < 50) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled ? `${styles.navbar} ${styles.scrolled}` : `${styles.navbar}`
      }
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/reliable_portable_logo.svg"
              alt="porta-potty"
              height={64}
              width={100}
            />
          </Link>
          <div className={styles.hamburger}>
            <Hamburger
              toggled={active}
              toggle={() => {
                setActive(!active);
                !active && setQuickQuoteViewStatus(false);
              }}
              color="white"
              size={20}
            />
          </div>
          <div className={styles.navLinks}>
            <Link
              href="/"
              className={router.route === "/" ? styles.activeLink : ""}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={router.route === "/products" ? styles.activeLink : ""}
            >
              Portables
            </Link>
            <Link
              href="/quote"
              className={router.route === "/quote" ? styles.activeLink : ""}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
