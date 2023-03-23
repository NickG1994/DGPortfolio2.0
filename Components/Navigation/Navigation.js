import React, { useEffect, useState } from "react";
import styles from "../../styles/Navigation.module.css";
import Link from "next/link";
//import useRouter to get route path url
import { useRouter } from "next/router";
//page links with svgs
import { PageLink } from "../../data/PageLinks";
//social links svg
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

function Navigation() {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  function ToggleMenu() {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  useEffect(() => {
    setToggle(false);
  }, [router]);

  return (
    <header id={styles.nav} className={styles.navContainer}>
      <aside className={styles.innerNav}>
        <div className={styles.navTop}>
          <Image
            width={100 + "%"}
            height={100 + "%"}
            className={styles.logo}
            alt="Dominic's Logo"
            loading="eager"
            src={require("../../public/img/DominicGaonaTabLogo.png")}
          />
        </div>

        <div className={styles.navMiddle}>
          {PageLink.map((link, index) => (
            <div
              key={index}
              className={
                styles.linkContainer +
                " " +
                (router.pathname == link.path ? styles.activeBackground : "")
              }
            >
              <div
                className={
                  router.pathname == link.path
                    ? styles.active
                    : styles.iconContainer
                }
              >
                {link.icon}
              </div>
              <Link href={link.path}>{link.title}</Link>
            </div>
          ))}
        </div>

        <div className={styles.navBottom}>
          <a>
            <LinkedInIcon />
          </a>
          <FacebookIcon />
          <WebAssetIcon />
          <YouTubeIcon />
        </div>
      </aside>

      <nav className={styles.mobileNav}>
        <ul className={toggle ? styles.navLinkContainer : styles.toggleClose}>
          {PageLink.map((page, index) => (
            <li key={index} className={styles.linkWrapper}>
              <Link className={styles.link} href={page.path}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>

        <MenuIcon
          onClick={() => {
            ToggleMenu();
          }}
        />
      </nav>
    </header>
  );
}

export default Navigation;
