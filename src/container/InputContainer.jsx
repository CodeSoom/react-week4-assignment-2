import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';
import { addRestaurant, updateInputContent } from '../store/actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { title, category, address } = useSelector((state) => ({
    title: state.name,
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
      name={title}
      category={category}
      address={address}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}
