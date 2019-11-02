import React from 'react';

const CurrentTemperature = ({ temperature, ...props }) => {
  return <div>{Math.round(temperature)} &deg;</div>;
};

export default CurrentTemperature;
