import React from 'react';

export default function Inputs({ value, onChanges, onClick }) {
  return (
    <p>
      <input
        name="name"
        id="input-name"
        type="text"
        placeholder="이름"
        value={value.name}
        onChange={onChanges.name}
      />
      <input
        name="category"
        id="input-category"
        type="text"
        placeholder="분류"
        value={value.category}
        onChange={onChanges.category}
      />
      <input
        name="address"
        id="input-address"
        type="text"
        placeholder="주소"
        value={value.address}
        onChange={onChanges.address}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
