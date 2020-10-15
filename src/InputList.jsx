import React from 'react';

export default function InputList({ restaurant, onChange, onClick }) {
  return (
    <div>
      {Object.entries(restaurant).map(([key, value]) => (
        <input value={value} onChange={onChange(key)} />
      ))}
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
