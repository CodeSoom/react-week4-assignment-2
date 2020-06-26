import React from 'react';

export default function Input({ informations: { name, category, address } }) {
  return (
    <>
      <input type="text" name="name" value={name} />
      <input type="text" name="category" value={category} />
      <input type="text" name="address" value={address} />
      <button type="button">등록</button>
    </>
  );
}
