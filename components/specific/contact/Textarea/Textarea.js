import React from "react";

import styles from './styles.module.scss';

const TextareaComponent = ({placeholder, errorMessage, value,  onChange}) => {
  const labelStyles = errorMessage ? `${styles.errorLabel} ${styles.labelWithError}` :  styles.errorLabel;
  const textareaStyles = errorMessage ? `${styles.contactFormTextarea} ${styles.textareaWithError}` : styles.contactFormTextarea;

  return (
    <div className={styles.textareaWrapper}>
      <label className={labelStyles}>{errorMessage}</label>
      <textarea className={textareaStyles} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextareaComponent;
