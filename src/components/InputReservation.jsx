import React from 'react';

export default function InputReservation({
  values: {
    name, category, address,
  } = { name: '', category: '', address: '' },
  onChange,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={(event) => onChange({ target: 'name', event })}
      />
      <input
        type="text"
        name="category"
        value={category}
        placeholder="분류"
        onChange={(event) => onChange({ target: 'category', event })}
      />
      <input
        type="text"
        name="address"
        value={address}
        placeholder="주소"
        onChange={(event) => onChange({ target: 'address', event })}
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
