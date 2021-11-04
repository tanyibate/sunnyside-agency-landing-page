import React from "react";
import styles from "./review-section-styles.module.scss";
import emilyImage from "../../assets/icons/image-emily.jpg";
import thomasImage from "../../assets/icons/image-thomas.jpg";
import jennieImage from "../../assets/icons/image-jennie.jpg";

export default function ReviewSection() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CLIENT TESTIMONIALS</h3>
      <div className={styles.reviews_container}>
        <div className={styles.review}>
          <img src={emilyImage} alt="" />
          <p className={styles.review_text}>
            We put our trust in Sunnyside and they delivered, making sure that
            our needs were met and deadlines were always hit.
          </p>
          <p className={styles.name}>Emily R.</p>
          <p className={styles.role}>Meeting Director</p>
        </div>
        <div className={styles.review}>
          <img src={emilyImage} alt="" />
          <p className={styles.review_text}>
            We put our trust in Sunnyside and they delivered, making sure that
            our needs were met and deadlines were always hit.
          </p>
          <p className={styles.name}>Emily R.</p>
          <p className={styles.role}>Meeting Director</p>
        </div>
        <div className={styles.review}>
          <img src={emilyImage} alt="" />
          <p className={styles.review_text}>
            We put our trust in Sunnyside and they delivered, making sure that
            our needs were met and deadlines were always hit.
          </p>
          <p className={styles.name}>Emily R.</p>
          <p className={styles.role}>Meeting Director</p>
        </div>
      </div>
    </div>
  );
}
