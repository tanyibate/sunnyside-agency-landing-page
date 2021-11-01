import React from "react";
import designImageMobile from "../../assets/images/mobile/image-graphic-design.jpg";
import designImageDesktop from "../../assets/images/desktop/image-graphic-design.jpg";
import photographyImageMobile from "../../assets/images/mobile/image-photography.jpg";
import photographyImageDesktop from "../../assets/images/desktop/image-photography.jpg";
import styles from "./services-section-styles.module.scss";
import { useMediaQuery } from "react-responsive";

export default function ServicesSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {isMobile && <img src={designImageMobile} alt="" />}
        {!isMobile && <img src={designImageDesktop} alt="" />}
        <div className={styles.section_text}>
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        {isMobile && <img src={photographyImageMobile} alt="" />}
        {!isMobile && <img src={photographyImageDesktop} alt="" />}
        <div className={styles.section_text}>
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos thay imporves your business image.
          </p>
        </div>
      </div>
    </div>
  );
}
