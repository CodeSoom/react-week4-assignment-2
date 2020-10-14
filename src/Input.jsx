import React from 'react';

export default function Input({ placeholderText, value }) {
  return (
    <input
      type="text"
      placeholder={placeholderText}
      value={value}
    />
  );
}
