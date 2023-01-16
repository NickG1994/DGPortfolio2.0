import { Card, CardContent } from "@mui/material";
import footerStyles from "../styles/Footer.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PageLink } from "../data/PageLinks";
import Navigation from "./Navigation/Navigation";
import Button from "./Button";

function Footer() {
  return (
    <>
      <ul className={footerStyles.cardContainer}>
        <li className={footerStyles.cards}>
          <div className={footerStyles.imageContainer}>
            <Image
              style={footerStyles.footerImage}
              src={require("../public/img/LOGO.png").default}
            />
          </div>
          <div className={footerStyles.footerContentContainer}>
            <h2>about me</h2>
            <p>
              An inspired and creative new web developer. Willing to work
              alongside Web developers and other IT Professionals. As well as
              able to be self-sufficient alone. Building, learning and deploying
              web pages...
            </p>
            <Button
              layout={{ marginTop: "1em", marginLeft: "1em" }}
              string={"About me"}
              location={"/about"}
            />
          </div>
        </li>

        <li className={footerStyles.cards}>
          <h2 style={{ display: "inline-block" }}>sitemap</h2>
          <nav className={footerStyles.siteMap}>
            <ul>
              {PageLink.map((page, index) => (
                <li key={index}>
                  <Link className={footerStyles.link} href={page.path}>
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </li>
        <li className={footerStyles.cards}>
          <h2>External Links</h2>
        </li>
      </ul>
    </>
  );
}

export default Footer;
