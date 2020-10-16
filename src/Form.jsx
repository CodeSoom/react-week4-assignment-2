import React from 'react';

import Input from './Input';

export default function Form({
  inputs,
  onClickAddRestautant,
  onChangeInput,
}) {
  return (
    <div>
      {
        inputs.map(({ name, placeholder, value }) => (
          <Input
            key={placeholder}
            name={name}
            placeholderText={placeholder}
            value={value}
            onChange={onChangeInput}
          />
        ))
      }

      <button type="button" onClick={onClickAddRestautant}>
        등록
      </button>
    </div>
  );
}
