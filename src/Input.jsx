import React from 'react';

export default function Input({
  restaurant, type, address, onChange, onClick,
}) {
  return (
    <div>
      <input placeholder="이름" name="restaurant" value={restaurant} onChange={onChange} />
      <input placeholder="분류" name="type" value={type} onChange={onChange} />
      <input placeholder="주소" name="address" value={address} onChange={onChange} />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
