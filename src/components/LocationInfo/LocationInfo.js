import React, { useState, useEffect } from 'react';
import styles from './LocationInfo.module.css';

export default function LocationInfo({ locationData }) {
  return (
    <>
      <div>
        <h1>{locationData.name}</h1>
        <div className={styles.des}>
          <div className={styles['container']}>
            <h2>Type:</h2>
            <h3>{locationData.type}</h3>
          </div>
          <div className={styles['container']}>
            <h2>Dimension:</h2>
            <h3>{locationData.dimension}</h3>
          </div>
          <div className={styles['container']}>
            <h2>Population:</h2>
            <h3>{locationData.residents?.length}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
