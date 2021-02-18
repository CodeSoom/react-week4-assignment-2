import React from 'react';

export default function InputForm({
  nameValue,
  categoryValue,
  addressValue,
  onChange,
  onClick,
}) {
  return (
    <div>
      <input value={nameValue} placeholder="이름" onChange={onChange} />
      <input value={categoryValue} placeholder="종류" onChange={onChange} />
      <input value={addressValue} placeholder="주소" onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
