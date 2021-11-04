import React from "react";
import styles from "./footer-styles.module.scss";
import logo from "../../assets/icons/logo-dark.svg";
import faceBookIcon from "../../assets/icons/icon-facebook.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../assets/icons/icon-pinterest.svg";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.links}>
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </div>
      <div className={styles.social_icons}>
        <img src={faceBookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={pinterestIcon} alt="" />
      </div>
    </div>
  );
}
