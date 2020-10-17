import React from 'react';

import Input from './Input';

export default function Form({ inputs, onChange, onClick }) {
  return (
    <p>
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          placeholder={input.placeholder}
          value={input.value}
          onChange={onChange}
        />
      ))}
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
