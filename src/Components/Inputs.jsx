import React from 'react';

const defaultValue = {
  name: '',
  category: '',
  address: '',
};

export default function Inputs({ value, onChanges, onClick }) {
  return (
    <p>
      <input
        id="input-name"
        type="text"
        placeholder="이름"
        value={value.name}
        onChange={onChanges.name}
      />
      <input
        id="input-category"
        type="text"
        placeholder="분류"
        value={value.category}
        onChange={onChanges.category}
      />
      <input
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
