import React from 'react';
import './CurrentTemperature.css';

const CurrentTemperature = ({ temperature, ...props }) => {
  return <div>{Math.round(temperature)} &deg;</div>;
};

export default CurrentTemperature;
