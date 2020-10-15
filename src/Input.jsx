import React from 'react';

export default function Input({
  placeholder,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
