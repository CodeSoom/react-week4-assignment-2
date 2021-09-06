import React from 'react';

export default function RestaurantForm({ restaurant, onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        placeholder="이름"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        value={restaurant.category}
        placeholder="분류"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={restaurant.address}
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
