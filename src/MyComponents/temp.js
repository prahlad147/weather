// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=d89edec2d5e2ba7f118f2b2ab5822b9d

import Weatherinfo from './weatherinfo';

import React, { useEffect, useState } from 'react';

import './style.css';

const Temp = () => {

    const[searchValue, setSearchValue] = useState("pune");
    const[tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d89edec2d5e2ba7f118f2b2ab5822b9d`;

      const res =await fetch(url);
      const data = await res.json();

      const{temp, humidity, pressure} = data.main;
      const{main : weathermood} = data.weather[0];
      const {name} = data;
      const{speed} = data.wind;
      const{country, sunset} = data.sys;

      const myNewWeatherInfo = {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
      };

      


      setTempInfo(myNewWeatherInfo);

      // console.log(temp);


      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    
    }

      useEffect(() => {
        getWeatherInfo();
      }, [])
      

  return (
    <>
        <div className="wrap">

            <div className='search'>
             <input type="search" placeholder="Search..." autofocus id="search" className ="searchTerm"
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}>
              </input>
             <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        
        {/* Our Temperature Template */}
        <Weatherinfo tempInfo = {tempInfo}/>


    </>
  )
}

export default Temp