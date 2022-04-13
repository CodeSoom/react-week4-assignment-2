import { useState } from 'react';

import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    address: '',
  });

  const { name, category, address } = inputs;

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

  function handleAddRestaurant() {
    // todo : 레스토랑을 등록하는 동작을 작성
    console.log('등록!');
    return null;
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
      <button type="button" onClick={handleAddRestaurant}>등록</button>
    </div>
  );
}
