import React from 'react';

import Input from './Input';

export default function Form({
  inputs,
  onClickAddRestautant,
  onChangeInputText,
}) {
  return (
    <div>
      {
        inputs.map(({ name, placeholder, value }) => (
          <Input
            key={name}
            name={name}
            placeholderText={placeholder}
            value={value}
            onChange={onChangeInputText}
          />
        ))
      }

      <button type="button" onClick={onClickAddRestautant}>
        등록
      </button>
    </div>
  );
}
