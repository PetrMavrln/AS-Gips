import React from 'react';
import { IAssortmentCard } from '../models/IAssortmentCard';
import styles from '../scss/css-modules/AssortmentCardComponent.module.css';

const AssortmentCardComponent = ({ card }: { card: IAssortmentCard }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.imgContainer}>
        <img
          src={require(`../assets/AssortmentCardsComponent/${card.img}`)}
          className={styles.img}
          alt={card.title}
        />
      </div>
      <div className={styles.cardHeader}>{card.title}</div>
    </div>
  );
};

export default AssortmentCardComponent;
