import React from 'react';

import Input from './Input';

export default function Inputs({
  restaurant, onChange,
}) {
  const inputs = [
    {
      id: 'input-restaurant-name',
      name: 'name',
      placeholder: '이름',
      value: restaurant && restaurant.name,
    },
    {
      id: 'input-restaurant-category',
      name: 'category',
      placeholder: '분류',
      value: restaurant && restaurant.category,
    },
    {
      id: 'input-restaurant-address',
      name: 'address',
      placeholder: '주소',
      value: restaurant && restaurant.address,
    },
  ];

  return inputs.map(({
    id, name, placeholder, value,
  }) => (
    <Input
      id={id}
      name={name}
      title={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      key={id}
    />
  ));
}
