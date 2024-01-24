import React from 'react';
import RepresentComponent from './RepresentComponent';
import ProductionComponent from './ProductionComponent';
import ExamplesComponent from './ExamplesComponent';
import FooterComponent from './FooterComponent';

const MainComponent = () => {
  return (
    <main>
      <RepresentComponent />
      <ProductionComponent />
      <ExamplesComponent />
      <FooterComponent />
    </main>
  );
};

export default MainComponent;
