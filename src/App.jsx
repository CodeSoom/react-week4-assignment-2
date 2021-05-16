import React from 'react';

import Restaurants from './Restaurants';
import RestaurantForm from './RestaurantForm';

export default function App() {
  const restaurants = [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
      id: 1,
    },
    {
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
      id: 2,
    },
  ];

  const restaurant = {
    name: '',
    category: '',
    address: '',
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
      <RestaurantForm restaurant={restaurant} />
    </div>
  );
}
