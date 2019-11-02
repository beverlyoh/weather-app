// import { ICON_NAME } from "react-icons/wi";
import React from 'react';

const  WeatherIcon = ({icon, ...props}) => {
       return (
           <div>
               <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"/>
           </div>
       )
}
// export default class WeatherIcon extends Component {
//   render() {
//     return (
//       <div>
//          <ICON_NAME />
//       </div>
//     )
//   }
// }

export default WeatherIcon;