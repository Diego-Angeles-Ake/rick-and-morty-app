import React from 'react';
import ResidentInfo from '../ResidentInfo/ResidentInfo';
import styles from './ResidentList.module.css';

export default function ResidentList({ residentList }) {
  return (
    <div className={styles.flex}>
      {residentList.map((resident, index) => {
        // return <ResidentInfo key={index} resident={resident}></ResidentInfo>;
      })}
    </div>
  );
}
