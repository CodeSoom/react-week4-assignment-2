import React from 'react';

export default function InputReservation({
  values: {
    name, category, address,
  } = { name: '', category: '', address: '' },
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={onChangeName}
      />
      <input
        type="text"
        name="category"
        value={category}
        placeholder="분류"
        onChange={onChangeCategory}
      />
      <input
        type="text"
        name="address"
        value={address}
        placeholder="주소"
        onChange={onChangeAddress}
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
