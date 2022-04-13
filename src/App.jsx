import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    address: '',
  });

  const { name, category, address } = inputs;

  const [restaurantList, setRestaurantList] = useState([]);

  function handleNameChange(value) {
    setInputs({
      ...inputs,
      name: value,
    });
  }

  function handleCategoryChange(value) {
    setInputs({
      ...inputs,
      category: value,
    });
  }

  function handleAddressChange(value) {
    setInputs({
      ...inputs,
      address: value,
    });
  }

  function handleRegisterRestaurant() {
    setRestaurantList([...restaurantList, inputs]);
  }

  return (
    <Page
      restaurants={restaurantList}
      handleNameChange={handleNameChange}
      name={name}
      handleCategoryChange={handleCategoryChange}
      category={category}
      handleAddressChange={handleAddressChange}
      address={address}
      handleRegisterRestaurant={handleRegisterRestaurant}
    />
  );
}
