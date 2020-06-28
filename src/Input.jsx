import React from 'react';

export default function Input(
  { restaurant: { name, category, address }, onChange, onClick },
) {
  return (
    <>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="category" value={category} onChange={onChange} />
      <input type="text" name="address" value={address} onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
}
