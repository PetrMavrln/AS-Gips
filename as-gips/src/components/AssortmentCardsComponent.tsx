import React from 'react';
import styles from '../scss/css-modules/AssortmentCardsComponent.module.css';
import AssortmentCardComponent from './AssortmentCardComponent';

const AssortmentCardsComponent = () => {
  const assortmentCards = [
    {
      id: 0,
      img: 'prod0.png',
      title: 'Стеновые 3D-панели',
    },
    {
      id: 1,
      img: 'prod1.png',
      title: 'Карнизы',
    },
    {
      id: 2,
      img: 'prod2.png',
      title: 'Молдинги',
    },
    {
      id: 3,
      img: 'prod3.png',
      title: 'Кронштейны',
    },
    {
      id: 4,
      img: 'prod4.png',
      title: 'Розетки',
    },
    {
      id: 5,
      img: 'prod5.png',
      title: 'Колонны',
    },
    {
      id: 6,
      img: 'prod6.png',
      title: 'Пилястры',
    },
    {
      id: 7,
      img: 'prod7.png',
      title: 'Вазоны',
    },
    {
      id: 8,
      img: 'prod8.png',
      title: 'Скульптура',
    },
    {
      id: 9,
      img: 'prod9.png',
      title: 'Бюст',
    },
    {
      id: 10,
      img: 'prod10.png',
      title: 'Портрет в рельефе',
    },
    {
      id: 11,
      img: 'prod11.png',
      title: 'Панно',
    },
  ];

  return (
    <div className={styles.cards}>
      {/* {isLoading ? (
    <LoadingComponent />
  ) : (
    assortmentSorted.map?.((card, index) => (
      <AssortmentCardComponent key={card.id} card={card} index={index} />
    ))
  )} */}
      {assortmentCards.map((card) => (
        <AssortmentCardComponent key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AssortmentCardsComponent;

// w 255
// h 215
