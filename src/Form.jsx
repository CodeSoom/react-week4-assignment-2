import React from 'react';

import Input from './Input';

export default function Form(
  {
    restaurant: { name, classification, location },
    onChange,
    onClick,
  },
) {
  return (
    <p>
      <Input
        placeholder='이름'
        value={name}
        onChange={onChange}
      />
      <Input
        placeholder='분류'
        value={classification}
        onChange={onChange}
      />
      <Input
        placeholder='주소'
        value={location}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
