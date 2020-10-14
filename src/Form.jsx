import React from 'react';

import Input from './Input';

export default function Form() {
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
        />
      ))}
      <button type="button" onClick={() => {}}>등록</button>
    </div>
  );
}
