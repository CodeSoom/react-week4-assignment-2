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
      <Input
        placehoder="이름"
        value={name}
        onChage={onChangeName}
      />
      <Input
        placehoder="분류"
        value={category}
        onChage={onChangeCategory}
      />
      <Input
        placehoder="주소"
        value={address}
        onChage={onChangeAddress}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
