import React from 'react';

const isBlank = (string) => string.trim().length === 0;

export default function RestaurantForm({
  restaurant,
  onChangeRestaurantField,
  onClickAddRestaurant,
}) {
  const { name, category, address } = restaurant;

  const isOneOfValueBlank = Object.values(restaurant).some(isBlank);

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChangeRestaurantField}
      />
      <input
        name="category"
        placeholder="분류"
        value={category}
        onChange={onChangeRestaurantField}
      />
      <input
        name="address"
        placeholder="주소"
        value={address}
        onChange={onChangeRestaurantField}
      />
      <button
        type="button"
        onClick={onClickAddRestaurant}
        disabled={isOneOfValueBlank}
      >
        등록
      </button>
    </div>
  );
}
