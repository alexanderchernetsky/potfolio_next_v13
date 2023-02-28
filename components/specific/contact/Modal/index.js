import React from "react";
import Image from "next/image";

import close from "@/public/icons/close.svg";

import styles from './styles.module.scss';


const ModalComponent = ({
  title,
  visible,
  onCloseHandler,
  children,
  // todo: do we need isFooter ?
}) => {
  const backgroundClickHandler = event => {
    if (event.target.id === "modal_background_id") {
      onCloseHandler();
    }
  };

  return (
    <div
      onClick={backgroundClickHandler}
      id="modal_background_id"
      className={visible ? `${styles.modalBackground} ${styles.modalVisible}` : styles.modalBackground}
    >
      <div className={styles.modalWindow}>
        <div
          onClick={onCloseHandler}
          tabIndex={0}
          onKeyPress={onCloseHandler}
          className={styles.close}
        >
          <Image src={close} alt="close-icon" width={20} height={20} />
        </div>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
