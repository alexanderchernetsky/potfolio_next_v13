import React from "react";
import Link from "next/link";

import styles from './styles.module.scss';

// todo: remove
function getStylesObjectForColorTheme(theme) {
  switch (theme) {
    case "green":
      return {
        circleBgColor: "green-button-bg-color",
        btnTextColor: "green-button-bg-color"
      };
    default:
      return {
        circleBgColor: "highlight-color",
        btnTextColor: "primary-color"
      };
  }
}

const ButtonComponent = ({
  text,
  disabled,
  href,
  type,
  loading,
  colorTheme
}) => {
  // todo: green btn, classnames?
  // const buttonClassName = colorTheme === 'green' ? styles.greenButton : styles.button;

  return (
    <button
      className={styles.button}
      disabled={disabled || loading}
      // onClick={onClick}
      type={type}
      tabIndex={0}
      // onKeyPress={onClick}
    >
      <span className={styles.circle} aria-hidden="true">
        {loading ? (
          <div className={styles.loaderWrapper}>
            <div className={styles.loader}/>
          </div>
        ) : (
          <span className={styles.icon} />
        )}
      </span>
      <span className={styles.buttonText}>
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
