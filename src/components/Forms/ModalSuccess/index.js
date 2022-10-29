import React from "react";
import cx from "classnames";
import styles from "./ModalSuccess.module.scss";

const ModalSuccess = (props) => {
  const { modalSucces, setModalSucces } = props;
  const modalActive = cx(styles.modal_wrapper, {
    [styles.modal_wrapper_active]: modalSucces,
  });
  return (
    <div className={modalActive}>
      <h4 onClick={() => setModalSucces(false)}>X</h4>
      <p>ваша заявка приянята</p>
    </div>
  );
};

export default ModalSuccess;
