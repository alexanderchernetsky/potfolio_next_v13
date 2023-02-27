import React from "react";

import styles from './styles.module.scss';


const PageTitle = ({title}) => {
  return (
      <div className={styles.pageTitleWrapper}>
          <h1 className={styles.heading}>{title}</h1>
          <div className={styles.stripe} />
      </div>
  )
}

export default PageTitle;
