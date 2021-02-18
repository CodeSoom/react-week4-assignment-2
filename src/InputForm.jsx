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
      <input value={nameValue} name="이름" placeholder="이름" onChange={onChange} />
      <input value={categoryValue} name="종류" placeholder="종류" onChange={onChange} />
      <input value={addressValue} name="주소" placeholder="주소" onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
