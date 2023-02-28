import React from "react";

import styles from './styles.module.scss';


const PageTitle = ({title}) => {
  const headingStyle = title === "Contact" ? `${styles.heading} ${styles.white}` : `${styles.heading} ${styles.dark}`;
  const stripeStyle = title === "Contact" ? `${styles.stripe} ${styles.whiteBg}` : `${styles.stripe} ${styles.darkBg}`;

  return (
      <div className={styles.pageTitleWrapper}>
          <h1 className={headingStyle}>{title}</h1>
          <div className={stripeStyle} />
      </div>
  )
}

export default PageTitle;
