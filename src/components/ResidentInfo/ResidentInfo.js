import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ResidentInfo.module.css';

export default function ResidentInfo({ resident }) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [origin, setOrigin] = useState('');
  const [episodes, setEpisodes] = useState('');
  const [status, setStatus] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    axios.get(resident).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setSpecies(res.data.species);
      setOrigin(res.data.origin.name);
      setEpisodes(res.data.episode.length);
      setStatus(res.data.status);
      setImg(res.data.image);
    });
  }, []);

  console.dir(resident);
  return (
    <div className={styles.resFlex}>
      <img src={img} alt='' />
      <div>
        <h3>{name}</h3>
        <hr />
        <h4>Species</h4>
        <h5>{species}</h5>
        <h4>Origin</h4>
        <h5>{origin}</h5>
        <h4>Espisodes</h4>
        <h5>{episodes}</h5>
      </div>
    </div>
  );
}
