import React from 'react';

import Input from './Input';

export default function Form({ onClickAddRestautant, onChangeInput }) {
  const inputs = [
    { placeholder: '이름', value: '마녀주방' },
    { placeholder: '분류', value: '한식' },
    { placeholder: '주소', value: '서울시 강남구' },
  ];

  return (
    <div>
      {inputs.map(({ placeholder, value }) => (
        <Input
          key={placeholder}
          placeholderText={placeholder}
          value={value}
          onChange={onChangeInput}
        />
      ))}
      <button type="button" onClick={onClickAddRestautant}>등록</button>
    </div>
  );
}
