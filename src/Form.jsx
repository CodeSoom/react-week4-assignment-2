import React from 'react';

import Input from './Input';

export default function Form({ onClickAddRestautant, onChangeInput }) {
  const inputs = [
    { placehoder: '이름', value: '마녀주방' },
    { placehoder: '분류', value: '한식' },
    { placehoder: '주소', value: '서울시 강남구' },
  ];

  return (
    <div>
      {inputs.map((input) => (
        <Input
          key={input.placehoder}
          placeholderText={input.placehoder}
          value={input.value}
          onChange={onChangeInput}
        />
      ))}
      <button type="button" onClick={onClickAddRestautant}>등록</button>
    </div>
  );
}
