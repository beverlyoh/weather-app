import React from 'react';  // note: only head div allowed

const CurrentWeather = ({country, city, temperature, ...props}) => { // arrowKey is shorthand for function
  return (
      <div> 
          <div>{country}</div>
          <div>{city}</div>
          <div>{temperature}</div>
      </div>
  );  
};

export default CurrentWeather; 