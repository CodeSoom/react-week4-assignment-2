import React from 'react';

const isBlank = (string) => string.trim().length === 0;

export default function Form({ restaurant, getChangeHandler, onClick }) {
  const placeholders = {
    name: '이름',
    category: '분류',
    address: '주소',
  };

  const isAddable = Object.values(restaurant).every((value) => !isBlank(value));

  return (
    <div>
      {Object.entries(restaurant).map(([key, value]) => (
        <input
          key={key}
          name={key}
          value={value}
          onChange={getChangeHandler(key)}
          placeholder={placeholders[key]}
        />
      ))}
      <button type="button" onClick={onClick} disabled={!isAddable}>등록</button>
    </div>
  );
}
