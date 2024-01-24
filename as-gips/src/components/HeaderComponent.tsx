import React from 'react';
import styles from '../scss/css-modules/header.module.css';
import ViberLogo from '../assets/Viber-Logo.svg';
import WhatsAppLogo from '../assets/WhatsApp-icon.svg';

const HeaderComponent = () => {
  return (
    <div className={styles.fullScreenWr}>
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
          {/* <div className={styles.vl}></div> */}
          {/* <h2 className={styles.description}>производство интерьерного декора</h2> */}
          <h1 className={styles.header1}>
            Интерьерный <br /> лепной декор
          </h1>
          <div className={styles.contacts}>
            <a href="tel:88452758025" className={styles.tel}>
              +7(8452)758025
            </a>
            <a href="mailto:AS-GIPS@yandex.ru" className={styles.mail}>
              AS-GIPS@yandex.ru
            </a>
          </div>
          <div className={styles.socials}>
            <a
              className={styles.viber}
              href="viber://contact?number=+79878033963"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.viberLogo}
                // src={require('../assets/Viber-Logo.png')}
                src={ViberLogo}
                alt="logo"
                width="28"
                height="28"
              />
              <span className={styles.viberLogoText}>viber</span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=79878033963"
              className={styles.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.whatsappLogo}
                // src={require('../assets/WhatsApp-icon.png')}
                src={WhatsAppLogo}
                alt="logo"
                width="28"
                height="28"
              />
              <span className={styles.whatsappLogoText}>whatsapp</span>
            </a>
          </div>
          {/* <button className={styles.callback}>Обратный звонок</button> */}
          {/* <div className={styles.callback}>
          <span className={styles.callbackText}>Обратный звонок</span>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
