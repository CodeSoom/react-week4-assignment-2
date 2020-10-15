import React from 'react';

export default function Input({ value, onChange }) {
  return (
    <input type="text" value={value} onChange={onChange} />
  );
}
