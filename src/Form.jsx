import React from 'react';

import Input from './Input';

export default function Form(
  {
    placeholders,
    restaurant: { name, classification, location },
    onChange,
    onClick,
  },
) {
  return (
    <p>
      <Input
        placeholder={placeholders[0]}
        value={name}
        onChange={onChange}
      />
      <Input
        placeholder={placeholders[1]}
        value={classification}
        onChange={onChange}
      />
      <Input
        placeholder={placeholders[2]}
        value={location}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
