import React from "react";
import styles from "./header-styles.module.scss";
import logo from "../../assets/icons/logo.svg";
import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import burgerMenu from "../../assets/icons/icon-hamburger.svg";

export default function Header() {
  return (
    <div className={styles.header_container}>
      {/*<img src={mobileHeaderImage} alt="" className={styles.mobile_image} />*/}
      <div className={styles.scroll_challenge}>
        <p>WE ARE CREATIVES</p>
        <img src={arrowDown} alt="" />
      </div>
      <header className={styles.header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.header_links}>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <div className={styles.contact_button}>CONTACT</div>
        </div>
        <div className={styles.burger_menu}>
          <img src={burgerMenu} alt="" />
        </div>
      </header>
      <div className={styles.mobile_menu_container}>
        <div className={styles.triangle_container}>
          <div className={styles.triangle}></div>
        </div>

        <div className={styles.mobile_menu}>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <div className={styles.contact_button_mobile}>CONTACT</div>
        </div>
      </div>
    </div>
  );
}
