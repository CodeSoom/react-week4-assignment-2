import React from 'react';

export default function Input({
  id, name, title, placeholder, value, onChange,
}) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      title={title}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
