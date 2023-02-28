import React from "react";
import Image from "next/image";

import styles from './styles.module.scss';



const SocIconComponent = ({ iconSrc, iconName, linkTo }) => {
  return (
      <a href={linkTo} target="_blank">
        <div className={styles.iconWrapper}>
          <Image src={iconSrc} alt={iconName} className={styles.icon} />
        </div>
      </a>
  );
};

export default SocIconComponent;
