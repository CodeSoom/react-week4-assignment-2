import React from 'react';

export default function InputList({ restaurant, onChange, onClick }) {
  const placeholders = {
    name: '이름',
    category: '분류',
    address: '주소',
  };

  return (
    <div>
      {Object.entries(restaurant).map(([key, value]) => (
        <input value={value} onChange={onChange(key)} placeholder={placeholders[key]} />
      ))}
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
