import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

import {
  changeRestaurantField,
  addRestaurant,
} from '../actions';

export default function InputContainer() {
  const dispath = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.restaurant.name,
    category: state.restaurant.category,
    address: state.restaurant.address,
  }));

  const field = {
    name: (eventValue) => ({
      name: eventValue,
      category,
      address,
    }),
    category: (eventValue) => ({
      name,
      category: eventValue,
      address,
    }),
    address: (eventValue) => ({
      name,
      category,
      address: eventValue,
    }),
  };

  const onChangeRestaurantField = ({ fieldKey, eventValue }) => {
    const getFieldObject = field[fieldKey];

    dispath(changeRestaurantField(getFieldObject(eventValue)));
  };

  function onClickAddRestaurant() {
    dispath(addRestaurant());
  }

  return (
    <div>
      <Input
        name="name"
        placeholder="이름"
        value={name}
        onChange={(event) => onChangeRestaurantField({ fieldKey: 'name', eventValue: event.target.value })}
      />
      <Input
        name="category"
        placeholder="분류"
        value={category}
        onChange={(event) => onChangeRestaurantField({ fieldKey: 'category', eventValue: event.target.value })}
      />
      <Input
        name="address"
        placeholder="주소"
        value={address}
        onChange={(event) => onChangeRestaurantField({ fieldKey: 'address', eventValue: event.target.value })}
      />
      <Button text="등록" onClick={onClickAddRestaurant} />
    </div>
  );
}
