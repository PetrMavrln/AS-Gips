import React from 'react';
import styles from '../scss/css-modules/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <div className={styles.fullScreenWr}>
      <div className={styles.wrapper}>
        <div className={styles.container}>AS GIPS © 2001-2024</div>
      </div>
    </div>
  );
};

export default FooterComponent;
