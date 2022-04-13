import { useState } from 'react';

import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
  });

  const { name } = inputs;

  function handleNameChange(value) {
    setInputs({
      ...inputs,
      name: value,
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
      <RestaurantCategoryInput />
      <RestaurantAddressInput />
      <button type="button">등록</button>
    </div>
  );
}
