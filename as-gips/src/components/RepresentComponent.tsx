import React from 'react';
import styles from '../scss/css-modules/RepresentComponent.module.css';

import reprImg from '../assets/RepresentComponent/representImg.png';

const RepresentComponent = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <img
          className={styles.reprImg}
          src={reprImg}
          alt="ИЗображение карниза"
          width="765"
          // height="363"
        />
        <div className={styles.text}>
          <h2 className={styles.header2}>О нас</h2>
          <p className={styles.par}>Занимаемся производством лепного декора с 2001-го года.</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Изготавливаем интерьерный декор из гипса, пластикрита и литьевого камня, для
              интерьеров коттеджей, квартир, частных домов и общественных зданий.
            </li>
            <li className={styles.li}>
              Наличие квалифицированного персонала и индивидуальный подход к авторским проектам
              позволяет оптимизировать производство под максимально короткие сроки.
            </li>
            <li className={styles.li}>
              Производство проходит этапы от работы с дизайн-проектом и моделирования, до финишного
              покрытия
            </li>
          </ul>
          <p className={styles.par}>Конечный результат говорит сам за себя.</p>
        </div>
      </section>
    </div>
  );
};

export default RepresentComponent;
