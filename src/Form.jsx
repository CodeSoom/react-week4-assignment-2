import React from 'react';

export default function Form({ value, onChangeInput, onSubmit }) {
  const handleChangeInput = (e) => onChangeInput({ name: e.target.name, value: e.target.value });

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        value={value.name}
        onChange={handleChangeInput}
        placeholder="이름"
      />
      <input
        name="category"
        type="text"
        value={value.category}
        onChange={handleChangeInput}
        placeholder="분류"
      />
      <input
        name="address"
        type="text"
        value={value.address}
        onChange={handleChangeInput}
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
