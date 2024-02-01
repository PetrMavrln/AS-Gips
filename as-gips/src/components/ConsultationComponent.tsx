import React from 'react';
import styles from '../scss/css-modules/ConsultationComponent.module.css';

import contentImg from '../assets/consultant.png';
import ViberLogo from '../assets/Viber-Logo.svg';
import WhatsAppLogo from '../assets/WhatsApp-icon.svg';
import PhoneLogo from '../assets/Phone-Logo.svg';

const ConsultationComponent = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2 className={styles.header2}>Бесплатная консультация</h2>
        <div className={styles.content}>
          <img
            className={styles.contentImg}
            src={contentImg}
            alt="Консультант"
            width="300"
            // height="363"
          />
          <div className={styles.text}>
            <p className={styles.p}>
              Помощь от профессионала по любым вопросам, по декорированию интерьера и другим
              услугам.
            </p>
            <p className={styles.p}>
              Пришлите сообщение с вашим номером телефона и коротко опишите тему обращения через
              приведенные ниже соцсети, чтобы наш специалист связался с вами или позвоните сами по
              указанному ниже номеру телефона.
            </p>
            <div className={styles.connections}>
              <a href="tel:88452758025" className={styles.tel}>
                <img
                  className={styles.phoneLogo}
                  src={PhoneLogo}
                  alt="logo"
                  width="28"
                  height="28"
                />
                <span className={styles.phoneLogoText}>+7(8452)758025</span>
              </a>
              <a
                className={styles.viber}
                href="viber://contact?number=+79878033963"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.viberLogo}
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
                  src={WhatsAppLogo}
                  alt="logo"
                  width="28"
                  height="28"
                />
                <span className={styles.whatsappLogoText}>whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationComponent;
