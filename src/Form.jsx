import React from 'react';

import Input from './Input';

export default function Form({
  inputInfos,
  onClickAddRestautant,
  onChangeInput,
}) {
  return (
    <div>
      {
        inputInfos.map(({ name, placeholder, value }) => (
          <Input
            key={name}
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
