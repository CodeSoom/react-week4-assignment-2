import React from 'react';

import Form from './Form';

export default function FormContainer() {
  const restaurant = {
    name: '마녀주방',
    classification: '한식',
    location: '서울시 강남구',
  };

  const placeholders = ['이름', '분류', '주소'];

  return (
    <div>
      <Form
        placeholders={placeholders}
        restaurant={restaurant}
      />
    </div>
  );
}
