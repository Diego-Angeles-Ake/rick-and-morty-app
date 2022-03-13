import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { locations } from '../../utils/autocomplete';
import styles from './SearchBar.module.css';
import axios from 'axios';

export default function SearchBar({ onSetLocationData }) {
  const [inputValue, setInputValue] = useState('');

  const searchLocationHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${inputValue}`)
      .then((res) => {
        onSetLocationData(res.data.results[0]);
      });
  };
  return (
    <div>
      <div className={styles['bg-img']}></div>
      <form onSubmit={searchLocationHandler}>
        <Autocomplete
          disablePortal
          id='combo-box'
          style={{ background: 'white' }}
          options={locations}
          sx={{ width: '80vw' }}
          renderInput={(params) => <TextField {...params} label='Location' />}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            let formatted = newInputValue.replace(/ID: \d+, /, '');
            setInputValue(formatted);
          }}
        />

        <button type='submit' className={styles.btn}>
          Search
        </button>
      </form>
    </div>
  );
}
