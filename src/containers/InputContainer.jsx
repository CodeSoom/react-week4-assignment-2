import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddr,
  addRestaurant,
} from '../actions';

export default function InputContainer() {
  const dispath = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  function onChangeUpdateRestaurantName(event) {
    dispath(updateRestaurantName(event.target.value));
  }

  function onClickUpdateRestaurantCategory(event) {
    dispath(updateRestaurantCategory(event.target.value));
  }

  function onClickUpdateRestaurantAddr(event) {
    dispath(updateRestaurantAddr(event.target.value));
  }

  function onClickAddRestaurant() {
    dispath(addRestaurant());
  }

  return (
    <div>
      <Input placeholder="이름" value={name} onChange={onChangeUpdateRestaurantName} />
      <Input placeholder="분류" value={category} onChange={onClickUpdateRestaurantCategory} />
      <Input placeholder="주소" value={address} onChange={onClickUpdateRestaurantAddr} />
      <Button text="등록" onClick={onClickAddRestaurant} />
    </div>
  );
}
