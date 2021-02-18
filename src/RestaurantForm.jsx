import React from 'react';

export default function RestaurantForm({ restaurantInformation = {} }) {
  return (
    <div>
      <input placeholder="이름" value={restaurantInformation.name} />
      <input placeholder="분류" value={restaurantInformation.category} />
      <input placeholder="주소" value={restaurantInformation.address} />
      <button type="button">등록</button>
    </div>
  );
}
