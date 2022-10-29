import React from "react";
import styles from "./ModalWindow.module.scss";
import cx from "classnames";
const ModalWindow = (props) => {
  const { modal, setModal } = props;
  const modalClass = cx(styles.modal_container, {
    [styles.modal_container_active]: modal,
  });
  return (
    <div className={modalClass}>
      <div onClick={() => setModal(false)}>X</div>
      <p>Успей заказать,осталось 5 штук</p>
    </div>
  );
};

export default ModalWindow;
