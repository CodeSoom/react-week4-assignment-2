import React from 'react';

import Input from './Input';

export default function Page({ inputTitles, onChange, onClick }) {
  return (
    <div>
      {inputTitles.map((inputTitle) => (
        <Input
          key={inputTitle.name}
          name={inputTitle.name}
          placeholder={inputTitle.placeholder}
          value={inputTitle.value}
          onChange={onChange}
        />
      ))}
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
