import React from 'react';

export default function InputReservation({
  values: {
    name, category, address,
  } = { name: '', category: '', address: '' },
  onChange,
  onClick,
}) {
  function handleChange(event) {
    const { name: target, value } = event.target;

    onChange({ target, value });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        value={category}
        placeholder="분류"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={address}
        placeholder="주소"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
