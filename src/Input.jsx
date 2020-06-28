import React from 'react';

export default function Input(
  { restaurant: { name, category, address }, onChange, onClick },
) {
  return (
    <>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="이름" aria-label="name" />
      <input type="text" name="category" value={category} onChange={onChange} placeholder="분류" aria-label="category" />
      <input type="text" name="address" value={address} onChange={onChange} placeholder="주소" aria-label="address" />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
}
