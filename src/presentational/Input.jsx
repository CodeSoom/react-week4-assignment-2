import React from 'react';

import {
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
} from '../actions/actions';

export default function Input({
  name, category, address, onChange,
  onClickAddRestaurant,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        onChange={(event) => onChange(updateRestaurantName(event.target.value))}
        value={name}
      />
      <input
        type="text"
        placeholder="분류"
        onChange={(event) => onChange(updateRestaurantCategory(event.target.value))}
        value={category}
      />
      <input
        type="text"
        placeholder="주소"
        onChange={(event) => onChange(updateRestaurantAddress(event.target.value))}
        value={address}
      />
      <button type="button" onClick={onClickAddRestaurant}>등록</button>
    </>
  );
}
