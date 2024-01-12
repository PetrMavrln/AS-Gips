import React from 'react';
import RepresentComponent from './RepresentComponent';
import ProductionComponent from './ProductionComponent';
// import styles from '../scss/css-modules/main.module.css';

const MainComponent = () => {
  return (
    // className={styles.main}
    <main>
      <RepresentComponent />
      <ProductionComponent />
    </main>
  );
};

export default MainComponent;
