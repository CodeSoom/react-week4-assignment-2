import React from 'react';

export default function RestaurantForm({
  restaurant,
  onChangeName,
  onChangeType,
  onChangeAddress,
  onClickAddRestaurant,
}) {
  return (
    <div>
      <input
        name="name"
        type="text"
        value={restaurant.name}
        onChange={onChangeName}
        placeholder="이름"
      />
      <input
        name="category"
        type="text"
        value={restaurant.type}
        onChange={onChangeType}
        placeholder="분류"
      />
      <input
        name="address"
        type="text"
        value={restaurant.address}
        onChange={onChangeAddress}
        placeholder="주소"
      />
      <button onClick={onClickAddRestaurant} type="submit">
        등록
      </button>
    </div>
  );
}
