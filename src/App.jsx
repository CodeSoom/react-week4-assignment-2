import { useState } from 'react';

import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
  });

  const { name, category } = inputs;

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
      <RestaurantAddressInput />
      <button type="button">등록</button>
    </div>
  );
}
