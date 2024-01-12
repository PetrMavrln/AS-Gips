import React from 'react';
import styles from '../scss/css-modules/RepresentComponent.module.css';
import NavComponent from './NavComponent';
import reprImg1 from '../assets/RepresentComponent/represent3.png';
import reprImg2 from '../assets/RepresentComponent/represent2.png';
import reprImg3 from '../assets/RepresentComponent/represent1.png';

const RepresentComponent = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <NavComponent />
        <h1 className={styles.header1}>Интерьерный лепной декор</h1>
        <p className={styles.par1}>Полный цикл от проекта до монтажа и финишной покраски</p>
        <p className={styles.par2}>Работаем по всей территории России</p>
        <div className={styles.buttons}>
          <div className={styles.examplesButton}>
            <span className={styles.examplesButtonText}>Посмотреть примеры</span>
          </div>
          <div className={styles.paymentButton}>
            <span className={styles.paymentButtonText}>Заявка на расчет</span>
          </div>
        </div>
        <img
          className={styles.reprImg1}
          src={reprImg1}
          alt="ИЗображение карниза"
          // width="529"
          height="363"
        />
        <img
          className={styles.reprImg2}
          src={reprImg2}
          alt="ИЗображение карниза"
          // width="393"
          height="380"
        />
        <img
          className={styles.reprImg3}
          src={reprImg3}
          alt="ИЗображение карниза"
          // width="256"
          height="222"
        />
      </section>
    </div>
  );
};

export default RepresentComponent;
