import React from 'react';

export default function Input({
  id, title, placeholder, value, onChange,
}) {
  return (
    <input
      type="text"
      id={id}
      title={title}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
