import React from 'react';
import './TextInput.css';
import './TextArea.css';

const TextArea = ({value, onChange, name, ...props}) => {
  return <textarea className="TexrInput TextArea" name={name} value={value} onChange={onChange}/>;
};

export default TextArea;
