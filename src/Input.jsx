import React from 'react';

export default function Input(
  {
    restaurant, onChange, onClick,
  },
) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange(name, value);
  }

  return (
    <div>
      <input
        id="input-registration-name"
        type="text"
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        id="input-registration-type"
        type="text"
        name="type"
        placeholder="분류"
        value={restaurant.type}
        onChange={handleChange}
      />
      <input
        id="input-registration-address"
        type="text"
        name="address"
        placeholder="주소"
        value={restaurant.address}
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
