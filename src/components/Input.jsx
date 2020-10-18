import React from 'react';

export default function Input({
  name, value, placeholder, onChange,
}) {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
