import React from 'react';

export default function Input({
  nameValue,
  categoryValue,
  addressValue,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <div>
      <input value={nameValue} placeholder="이름" onChange={onChangeName} />
      <input value={categoryValue} placeholder="종류" onChange={onChangeCategory} />
      <input value={addressValue} placeholder="주소" onChange={onChangeAddress} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}