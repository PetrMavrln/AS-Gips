import React from 'react';
import styles from '../scss/css-modules/navComponent.module.css';

const NavComponent = () => {
  return (
    <nav className={styles.nav}>
      {/* TODO сделать ссылки якори */}
      <ul className={styles.navUl}>
        <li>
          <a href="#production" className={styles.link}>
            Что мы производим
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            О нас
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Примеры работ
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Расчет стоимости
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
