import React from 'react';

export default function Form({ value, onChangeInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        value={value.name}
        onChange={onChangeInput}
        placeholder="이름"
      />
      <input
        name="category"
        type="text"
        value={value.category}
        onChange={onChangeInput}
        placeholder="분류"
      />
      <input
        name="address"
        type="text"
        value={value.address}
        onChange={onChangeInput}
        placeholder="주소"
      />
      <button
        type="submit"
      >
        등록
      </button>
    </form>
  );
}
