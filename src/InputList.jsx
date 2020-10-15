import React from 'react';

const isBlank = (string) => string.trim().length === 0;

export default function InputList({ restaurant, onChange, onClick }) {
  const placeholders = {
    name: '이름',
    category: '분류',
    address: '주소',
  };

  const isAddable = Object.entries((restaurant)).every(([, value]) => !isBlank(value));

  return (
    <div>
      {Object.entries(restaurant).map(([key, value]) => (
        <input
          key={key}
          value={value}
          onChange={onChange(key)}
          placeholder={placeholders[key]}
        />
      ))}
      <button type="button" onClick={onClick} disabled={!isAddable}>등록</button>
    </div>
  );
}
