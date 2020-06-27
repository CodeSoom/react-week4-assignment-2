import React from 'react';

export default function Input({
  value,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}){
  return (
    <p>
      <label htmlFor="input-restaurant-name">
        이름
      </label>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
        value={value.name}
        onChange={onChangeName}
      />
      <label htmlFor="input-restaurant-category">
        분류
      </label>
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
        value={value.category}
        onChange={onChangeCategory}
      />
      <label htmlFor="input-restaurant-address">
        주소
      </label>
      <input
        id="input-restaurant-address"
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
