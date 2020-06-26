import React from 'react';

export default function Input({ information, onChangeHandlers }) {
  const { name, category, address } = information;

  const {
    handleChangeName,
    handleChangeCategory,
    handleChangeAddress,
  } = onChangeHandlers;

  return (
    <p>
      <input
        type="text"
        placeholder="이름"
        data-testid="name"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="분류"
        data-testid="category"
        value={category}
        onChange={handleChangeCategory}
      />
      <input
        type="text"
        placeholder="주소"
        data-testid="address"
        value={address}
        onChange={handleChangeAddress}
      />
      <button type="button">등록</button>
    </p>
  );
}
