import React from 'react';

import Input from './Input';

export default function Inputs({
  name, cuisine, location, onChangeName, onChangeCuisine, onChangeLocation,
}) {
  const inputs = [
    {
      id: 'input-restaurant-name',
      inputName: 'name',
      placeholder: '이름',
      value: name,
      onChange: onChangeName,
    },
    {
      id: 'input-restaurant-cuisine',
      inputName: 'category',
      placeholder: '분류',
      value: cuisine,
      onChange: onChangeCuisine,
    },
    {
      id: 'input-restaurant-location',
      inputName: 'address',
      placeholder: '주소',
      value: location,
      onChange: onChangeLocation,
    },
  ];

  return inputs.map(({
    id, inputName, placeholder, value, onChange,
  }) => (
    <Input
      id={id}
      name={inputName}
      title={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      key={id}
    />
  ));
}
