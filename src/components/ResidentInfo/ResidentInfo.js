import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import styles from './ResidentInfo.module.css';

export default function ResidentInfo({ resident }) {
  const { status, data } = useQuery(`test${resident}`, () =>
    axios.get(resident)
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;
  console.log(data.data.image);
  return (
    <div className={styles.resFlex}>
      <img src={data.data.image} alt='' />
      <div>
        <h3>{data.data.name}</h3>
        <hr />
        <h4>Species</h4>
        <h5>{data.data.species}</h5>
        <h4>Origin</h4>
        <h5>{data.data.origin.name}</h5>
        <h4>Espisodes</h4>
        <h5>{data.data.episode.length}</h5>
        <h4>Status</h4>
        <h5>{data.data.status}</h5>
      </div>
    </div>
  );
}
