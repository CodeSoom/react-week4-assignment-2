import React from 'react';

const isBlank = (string) => string.trim().length === 0;

export default function Form({ restaurant, getOnChangeRestaurant, onClickAddRestaurant }) {
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
          onChange={getOnChangeRestaurant(key)}
          placeholder={placeholders[key]}
        />
      ))}
      <button type="button" onClick={onClickAddRestaurant} disabled={!isAddable}>등록</button>
    </div>
  );
}
