import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';
import { addRestaurant, updateInputContent } from '../store/actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const handleInputChange = ({ targetType, content }) => {
    dispatch(updateInputContent({ targetType, content }));
  };

  const handleSubmit = () => {
    dispatch(addRestaurant());
  };

  return (
    <Input
      name={name}
      category={category}
      address={address}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}
