import React from 'react';

export default function RestaurantForm({ restaurantInformation = {} }) {
  const { name, category, address } = restaurantInformation;

  return (
    <div>
      <input placeholder="이름" value={name} />
      <input placeholder="분류" value={category} />
      <input placeholder="주소" value={address} />
      <button type="button">등록</button>
    </div>
  );
}
