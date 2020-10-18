import React from 'react';

export default function RestaurantForm({
  form: { name, category, address },
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={onChangeCategory}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={onChangeAddress}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
