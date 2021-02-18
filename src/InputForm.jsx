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
      <input value={nameValue} name="name" placeholder="이름" onChange={onChange} />
      <input value={categoryValue} name="category" placeholder="분류" onChange={onChange} />
      <input value={addressValue} name="address" placeholder="주소" onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
