import React from "react";
import styles from "./about-section-styles.module.scss";
import eggImageMobile from "../../assets/images/mobile/image-transform.jpg";
import glassImageMobile from "../../assets/images/mobile/image-stand-out.jpg";
import eggImageDesktop from "../../assets/images/desktop/image-transform.jpg";
import glassImageDesktop from "../../assets/images/desktop/image-stand-out.jpg";
import { useMediaQuery } from "react-responsive";

export default function AboutSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {isMobile && (
          <img src={eggImageMobile} alt="" className={styles.image_cell} />
        )}
        {!isMobile && (
          <img src={eggImageDesktop} alt="" className={styles.image_cell} />
        )}

        <div className={styles.text_cell}>
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engaging your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <h3>LEARN MORE</h3>
        </div>
      </div>
      <div className={styles.row}>
        {isMobile && (
          <img src={glassImageMobile} alt="" className={styles.image_cell} />
        )}
        {!isMobile && (
          <img src={glassImageDesktop} alt="" className={styles.image_cell} />
        )}
        <div className={styles.text_cell}>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, reaserchers,
            photographers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </p>
          <h3 style={{ textDecorationColor: "red" }}>LEARN MORE</h3>
        </div>
      </div>
    </div>
  );
}
