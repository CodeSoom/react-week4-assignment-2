import React from 'react';

export default function Input({
  value,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <p>
      <input
        name="name"
        type="text"
        placeholder="이름"
        value={value.name}
        onChange={onChangeName}
      />
      <input
        name="category"
        type="text"
        placeholder="분류"
        value={value.category}
        onChange={onChangeCategory}
      />
      <input
        name="address"
        type="text"
        placeholder="주소"
        value={value.address}
        onChange={onChangeAddress}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
