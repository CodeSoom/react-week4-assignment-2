import React from 'react';

export default function Input({
  restaurant,
  onChangeName, onChangeCategory, onChangeAddress,
  onClick,
}) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="이름"
        onChange={onChangeName}
      />
      <input
        type="text"
        value={category}
        placeholder="분류"
        onChange={onChangeCategory}
      />
      <input
        type="text"
        value={address}
        placeholder="주소"
        onChange={onChangeAddress}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
