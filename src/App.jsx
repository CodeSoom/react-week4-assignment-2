import { useState } from 'react';

import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';
import RestaurantRegisterButton from './RestaurantRegisterButton';

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
    <div>
      <h1>Restaurants</h1>
      <RestaurantList />
      <RestaurantNameInput
        onChange={handleNameChange}
        value={name}
      />
      <RestaurantCategoryInput
        onChange={handleCategoryChange}
        value={category}
      />
      <RestaurantAddressInput
        onChange={handleAddressChange}
        value={address}
      />
      <RestaurantRegisterButton
        onClick={handleRegisterRestaurant}
      />
    </div>
  );
}
