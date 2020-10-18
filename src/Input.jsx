import React from 'react';

export default function Input() {
  return (
    <div>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
      />
      <input
        id="input-restaurant-type"
        type="text"
        placeholder="분류"
      />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
      />
      <button type="button">
        등록
      </button>
    </div>
  );
}
