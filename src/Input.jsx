import React from 'react';

export default function Input({
  division, onChange, data, inputName,
}) {
  return (
    <>
      <input
        type="text"
        name={inputName}
        placeholder={division}
        value={data}
        onChange={onChange}
      />
    </>
  );
}
