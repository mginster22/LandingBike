import React from "react";
import inst from "../../assets/images/inst.svg";
import faceb from "../../assets/images/faceb.svg";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wraper}>
        <a href="/" className={styles.info_politic}>
          Политика конфиденциальности
        </a>
        <div className={styles.social}>
          <img src={inst} alt="inst" />
          <img src={faceb} alt="faceb" />
        </div>
        <div className={styles.connection}>
          <div className={styles.connection_item}>
            <img src={phone} alt="phone" />
            <span className={styles.phone}>+38 050 677 77 77</span>
          </div>
          <div className={styles.connection_item}>
            <img src={email} alt="email" />
            <span>elektrobikeukr@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
