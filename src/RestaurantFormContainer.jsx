import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, updateInput } from './actions';

import RestaurantForm from './RestaurantForm';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((selector) => ({
    name: selector.restaurant.name,
    category: selector.restaurant.category,
    address: selector.restaurant.address,
  }));

  const handleInputChange = (e) => {
    dispatch(updateInput({
      key: e.target.name,
      value: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addRestaurant());
  };

  return (
    <RestaurantForm
      onChange={handleInputChange}
      onClick={handleSubmit}
      name={name}
      category={category}
      address={address}
    />
  );
}
