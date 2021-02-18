import React from 'react';

export default function TypeInput({ type, onChange }) {
  return (
    <input
      type="text"
      placeholder="분류"
      name="type"
      value={type}
      onChange={onChange}
    />
  );
}
