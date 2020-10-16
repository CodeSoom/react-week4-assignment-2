import React from 'react';

export default function Input({
  onChange, onClick, name, categoryTitle, addressTitle,
}) {
  return (
    <div>
      <input type="text" onChange={onChange} placeholder="이름" value={name} />
      <input type="text" onChange={onChange} placeholder="분류" value={categoryTitle} />
      <input type="text" onChange={onChange} placeholder="주소" value={addressTitle} />

      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
