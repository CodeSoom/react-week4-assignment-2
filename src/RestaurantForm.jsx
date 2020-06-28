import React from 'react';

export default function RestaurantForm({ newRestaurant, handleChange, handleClickSubmit }) {
  return (
    <form onSubmit={handleClickSubmit}>
      <input
        type="text"
        name="name"
        value={newRestaurant.name}
        placeholder="이름"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        value={newRestaurant.category}
        placeholder="분류"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={newRestaurant.address}
        placeholder="주소"
        onChange={handleChange}
      />
      <input type="submit" value="등록" />
    </form>
  );
}
