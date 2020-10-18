import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  updateRestaurantCategory,
  updateRestaurantLocation,
  updateRestaurantName,
} from './actions';

export default function InputContainer() {
  const { name, category, location } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    location: state.location,
  }));

  const dispatch = useDispatch();

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  function handleChangeName(event) {
    dispatch(updateRestaurantName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateRestaurantCategory(event.target.value));
  }

  function handleChangeLocation(event) {
    dispatch(updateRestaurantLocation(event.target.value));
  }

  return (
    <div>
      <input placeholder="이름" name="name" onChange={handleChangeName} value={name} />
      <input placeholder="분류" name="category" onChange={handleChangeCategory} value={category} />
      <input placeholder="주소" name="address" onChange={handleChangeLocation} value={location} />
      <button type="button" onClick={handleClickAddRestaurant}>
        등록
      </button>
    </div>
  );
}
