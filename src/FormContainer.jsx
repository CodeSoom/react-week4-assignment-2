import React from 'react';

import { useSelector } from 'react-redux';

import Form from './Form';

export default function FormContainer() {
  const { restaurant, placeholders } = useSelector((state) => ({
    restaurant: state.restaurant,
    placeholders: state.placeholders,
  }));

  return (
    <div>
      <Form
        placeholders={placeholders}
        restaurant={restaurant}
      />
    </div>
  );
}
