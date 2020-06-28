import React from 'react';

import RestaurantList from './RestaurantList'

export default function App() {
  const restaurantList = [
    {
    id: 1,
    name: '호식당',
    category: '일식',
    address: '경기도 수정구 태평동',
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList 
        restaurantList={restaurantList}
      />   
    </div>
  )
}
