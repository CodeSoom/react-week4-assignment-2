import React from 'react';

export default function Input({
  name,
  type,
  onChange,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="type"
        value={type}
        onChange={onChange}
      />
    </div>
  );
}
