import React from "react";

import styles from './styles.module.scss';


const InputComponent = ({placeholder,errorMessage, onChange, value, type}) => {
  const labelStyles = errorMessage ? `${styles.errorLabel} ${styles.labelWithError}` :  styles.errorLabel;
  const inputStyles = errorMessage ? `${styles.contactFormInput} ${styles.inputWithError}` : styles.contactFormInput;

  return (
    <div className={styles.inputWrapper}>
      <label className={labelStyles}>{errorMessage}</label>
      <input className={inputStyles} placeholder={placeholder} onChange={onChange} value={value} type={type} />
    </div>
  );
};

export default InputComponent;
