import React from "react";
import Link from "next/link";

import styles from './styles.module.scss';


const ButtonComponent = ({
  text,
  disabled,
  href,
  type,
  loading,
  colorTheme
}) => {
  const bgColor = colorTheme === 'green' ? styles.greenBg : styles.pinkBg;
  const txtColor = colorTheme === 'green' ? styles.greenText : styles.whiteText;

  return (
    <button
      className={styles.button}
      disabled={disabled || loading}
      // onClick={onClick}
      type={type}
      tabIndex={0}
      // onKeyPress={onClick}
    >
      <span className={`${styles.circle} ${bgColor}`} aria-hidden="true">
        {loading ? (
          <div className={styles.loaderWrapper}>
            <div className={styles.loader}/>
          </div>
        ) : (
          <span className={styles.icon} />
        )}
      </span>
      <span className={`${styles.buttonText} ${txtColor}`}>
        {type === "submit" ? (
          <span>{text}</span>
        ) : (
          <Link href={href}>
            {text}
          </Link>
        )}
      </span>
    </button>
  );
};

export default ButtonComponent;
