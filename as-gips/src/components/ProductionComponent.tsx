import React from 'react';
import styles from '../scss/css-modules/ProductionComponent.module.css';
import AssortmentCardsComponent from './AssortmentCardsComponent';

const ProductionComponent = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <h2 className={styles.header2}>Что мы производим</h2>
          <AssortmentCardsComponent />
        </section>
      </div>
    </div>
  );
};

export default ProductionComponent;
