import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    address: '',
  });

  const { name, category, address } = inputs;

  const [restaurantList, setRestaurantList] = useState({
    newId: 1,
    restaurants: [],
  });

  const { newId, restaurants } = restaurantList;

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
    setRestaurantList({
      ...restaurantList,
      newId: newId + 1,
      restaurants: [...restaurants, { id: newId, ...inputs }],
    });

    // TODO : 레스토랑이 등록되면 input을 빈 값으로 초기화해야 한다.
  }

  return (
    <Page
      restaurants={restaurants}
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
