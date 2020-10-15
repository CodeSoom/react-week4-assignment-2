import React from 'react';

export default function InputList({ restaurant, onChange, onClick }) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input type="text" value={name} onChange={onChange('name')} />
      <input type="text" value={category} onChange={onChange('category')} />
      <input type="text" value={address} onChange={onChange('address')} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
