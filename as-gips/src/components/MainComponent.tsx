import React from 'react';
import RepresentComponent from './RepresentComponent';
import ProductionComponent from './ProductionComponent';
import ExamplesComponent from './ExamplesComponent';
import FooterComponent from './FooterComponent';
import ConsultationComponent from './ConsultationComponent';

const MainComponent = () => {
  return (
    <main>
      <RepresentComponent />
      <ProductionComponent />
      <ExamplesComponent />
      <ConsultationComponent />
      <FooterComponent />
    </main>
  );
};

export default MainComponent;
