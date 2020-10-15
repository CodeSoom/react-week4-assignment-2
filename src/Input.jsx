import React from 'react';

export default function Input({ restaurant }) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input type="text" value={name} />
      <input type="text" value={category} />
      <input type="text" value={address} />
      <button type="button">등록</button>
    </div>
  );
}
