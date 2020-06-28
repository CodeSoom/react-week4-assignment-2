import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeRestaurantName, changeRestaurantCategory, changeRestaurantAddress, addRestaurant,
} from './actions';

export default function InputContainer() {
  const restaurantName = useSelector((state) => ({
    restaurantName: state,
  }));
  const restaurantCategory = useSelector((state) => ({
    restaurantCategory: state.restaurantCategory,
  }));
  const restaurantAddress = useSelector((state) => ({
    restaurantAddress: state.restaurantAddress,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(changeRestaurantName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(changeRestaurantCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(changeRestaurantAddress(event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }
  return (
    <div>
      <p>
        <input placeholder="이름" value={restaurantName} onChange={handleChangeName} />
        <input placeholder="분류" value={restaurantCategory} onChange={handleChangeCategory} />
        <input placeholder="주소" value={restaurantAddress} onChange={handleChangeAddress} />
        <button type="button" onClick={handleClickAddRestaurant}>
          등록
        </button>
      </p>
    </div>
  );
}
