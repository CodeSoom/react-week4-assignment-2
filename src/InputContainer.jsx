import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeRestaurantField, addRestaurant } from './actions';

export default function InputContainer() {
  // ASK: 구조분해 할당
  const restaurantName = useSelector((state) => (state.restaurantName));
  const restaurantCategory = useSelector((state) => (state.restaurantCategory));
  const restaurantAddress = useSelector((state) => (state.restaurantAddress));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(changeRestaurantField({ name: 'changeRestaurantName', value: event.target.value }));
  }

  function handleChangeCategory(event) {
    dispatch(changeRestaurantField({ name: 'changeRestaurantCategory', value: event.target.value }));
  }

  function handleChangeAddress(event) {
    dispatch(changeRestaurantField({ name: 'changeRestaurantAddress', value: event.target.value }));
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
