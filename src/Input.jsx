import React from 'react';

export default function Input({ placehoder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placehoder}
      value={value}
      onChange={onChange}
    />
  );
}
