import React from 'react';

export default function Input({ value, category, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={value}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={onChange}
      />
    </div>
  );
}
