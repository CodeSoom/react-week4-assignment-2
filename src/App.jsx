import React from 'react';

import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantList';

const restaurants = [
  {
    id: 1, name: '자매수산', category: '일식', address: '서울시 논현동',
  },
];

export default function App() {
  const restaurant = {
    name: '',
    category: '',
    address: '',
  };

  const handleChange = () => {
    // TODO: 작성하기
  };

  const handleClick = () => {
    // TODO: 작성하기
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
      <RestaurantForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}
