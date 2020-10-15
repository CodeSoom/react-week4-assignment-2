import React from 'react';

const Button = ({ text = '등록', onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
