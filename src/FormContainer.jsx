import React from 'react';

import Form from './Form';

export default function FormContainer() {
  const inputs = [
    { placeholder: '이름', value: '시카고피자' },
    { placeholder: '분류', value: '양식' },
    { placeholder: '주소', value: '이태원동' },
  ];

  return (
    <Form inputs={inputs} />
  );
}
