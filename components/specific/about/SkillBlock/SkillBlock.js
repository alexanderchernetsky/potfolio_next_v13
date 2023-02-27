import React from "react";

import styles from './styles.module.scss';


const SkillBlock = ({ title }) => {
  return (
    <div className={styles.skillBlockWrapper}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SkillBlock;
