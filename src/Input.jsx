import React from 'react';

export default function Input({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
