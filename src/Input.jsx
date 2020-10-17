import React from 'react';

export default function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
