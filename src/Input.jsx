import React from 'react';

export default function Input({ onChange }) {
  return (
    <input
      type="text"
      placeholder="분류"
      value="한식"
      onChange={onChange}
    />
  );
}
