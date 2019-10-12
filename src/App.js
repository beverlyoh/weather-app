import React from 'react';
import CurrentWeather from './CurrentWeather'; 

function App() {
  return (
    <div className="App">
      <CurrentWeather country="UK" city="London" temperature="13"/>
      <CurrentWeather country="Australia" city="Perth" temperature="21"/>
      <CurrentWeather country="Singapore" city="Singapore" temperature="31"/>
    </div>
  );
}

export default App;
