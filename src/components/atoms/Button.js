import React from 'react';
import './Button.css';

const Button = ({ onButtonClick, ...props }) => {
  return <button onClick={onButtonClick}>{props.children}</button>;
};

export default Button;
