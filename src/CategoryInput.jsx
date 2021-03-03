import React from 'react';

export default function CategoryInput({ category, onChange }) {
  return (
    <input
      type="text"
      placeholder="분류"
      name="category"
      value={category}
      onChange={onChange}
    />
  );
}
