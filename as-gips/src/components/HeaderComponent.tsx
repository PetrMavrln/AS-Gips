import React from 'react';
import styles from '../scss/css-modules/header.module.css';
import ViberLogo from '../assets/Viber-Logo.svg';
import WhatsAppLogo from '../assets/WhatsApp-icon.svg';

const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={require('../assets/logo.png')}
            alt="logo"
            width="80"
            height="81"
          />
          <h2 className={styles.logoText}>AS GIPS</h2>
        </div>
        <div className={styles.vl}></div>
        <h2 className={styles.description}>производство и монтаж интерьерного декора</h2>
        <div className={styles.contacts}>
          <a href="tel:89878033963" className={styles.tel}>
            +7(987) 803 39 63
          </a>
          <a href="mailto:as-gips@yandex.ru" className={styles.mail}>
            as-gips@yandex.ru
          </a>
        </div>
        <div className={styles.socials}>
          <div className={styles.viber}>
            <img
              className={styles.viberLogo}
              // src={require('../assets/Viber-Logo.png')}
              src={ViberLogo}
              alt="logo"
              width="28"
              height="28"
            />
            <span className={styles.viberLogoText}>viber</span>
          </div>
          <div className={styles.whatsapp}>
            <img
              className={styles.whatsappLogo}
              // src={require('../assets/WhatsApp-icon.png')}
              src={WhatsAppLogo}
              alt="logo"
              width="28"
              height="28"
            />
            <span className={styles.whatsappLogoText}>whatsapp</span>
          </div>
        </div>
        {/* <button className={styles.callback}>Обратный звонок</button> */}
        <div className={styles.callback}>
          <span className={styles.callbackText}>Обратный звонок</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
