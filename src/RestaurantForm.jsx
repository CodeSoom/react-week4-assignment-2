import React from 'react';

import Input from './Input';

export default function RestaurantForm({
  form: { name, category, address },
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <div>
      <Input />
      <Input />
      <Input />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
