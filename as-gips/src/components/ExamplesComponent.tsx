import React from 'react';
import styles from '../scss/css-modules/ExamplesComponent.module.css';
import CarouselComponent from './CarouselComponent';

const ExamplesComponent = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2 className={styles.header2}>Примеры работ</h2>
        <div className={styles.examples}>
          <CarouselComponent />
        </div>
      </section>
    </div>
  );
};

export default ExamplesComponent;
