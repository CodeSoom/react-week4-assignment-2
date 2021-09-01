import React from 'react';

import Input from './Input';

export default function Page({ informations, onChange, onClick }) {
  return (
    <div>
      {informations.map((information) => (
        <Input
          key={information.name}
          name={information.name}
          placeholder={information.placeholder}
          value={information.value}
          onChange={onChange}
        />
      ))}

      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
