import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import LocationInfo from './components/LocationInfo/LocationInfo';
import ResidentList from './components/ResidentsList/ResidentList';
import rN from './utils/randomNumber';
import axios from 'axios';
import './App.css';
function App() {
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const random = rN(1, 126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => {
        setLocationData(res.data);
        setLoading(false);
      });
  }, []);
  // console.log(locationData);
  return (
    <div className='App'>
      {!loading && (
        <div>
          <SearchBar onSetLocationData={setLocationData} />
          <LocationInfo locationData={locationData} />
          <ResidentList residentList={locationData.residents} />
        </div>
      )}
    </div>
  );
}

export default App;
