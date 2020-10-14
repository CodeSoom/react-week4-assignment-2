import React from 'react';

import Input from './Input';

export default function Form() {
  const inputs = [
    { placehoder: '이름' },
    { placehoder: '분류' },
    { placehoder: '주소' },
  ];

  return (
    <div>
      {inputs.map((input) => <Input placeholderText={input.placehoder} />)}
    </div>
  );
}
