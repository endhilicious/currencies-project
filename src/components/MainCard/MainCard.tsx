import React from 'react'
import styles from '../../../styles/MainCard.module.css';

const MainCard: React.FC = () => {
  return (
    <div className={styles['MainCard__wrapper']}>
        <div className={styles['MainCard__mainTitle']}>
            USD - UNITED STATE DOLLARS
        </div>
        <div className={styles['MainCard__currencyInfo']}>
            <span className={styles['MainCard__currencyName']}>USD</span>
            <span className={styles['MainCard__currencyAmount']}>10,000.00</span>
        </div>
    </div>
  )
}

export default MainCard;
